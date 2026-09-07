import { readStorage, writeStorage } from "@/lib/storage";

export type Theme = "light" | "dark";

const STORAGE_KEY = "mk-portfolio-theme";
const QUERY = "(prefers-color-scheme: dark)";

const listeners = new Set<() => void>();
let hydrated = false;
let mediaCleanup: (() => void) | null = null;

const emit = () => {
  for (const listener of listeners) listener();
};

const systemTheme = (): Theme => {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia(QUERY).matches ? "dark" : "light";
};

const storedTheme = (): Theme | null => {
  const value = readStorage(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
};

const currentTheme = (): Theme => storedTheme() ?? systemTheme();

const applyTheme = (theme: Theme) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }
};

export const themeStore = {
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    if (
      listeners.size === 1 &&
      typeof window !== "undefined" &&
      window.matchMedia
    ) {
      const media = window.matchMedia(QUERY);
      const onChange = () => {
        if (storedTheme()) return;
        applyTheme(media.matches ? "dark" : "light");
        emit();
      };
      media.addEventListener("change", onChange);
      mediaCleanup = () => media.removeEventListener("change", onChange);
    }
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0 && mediaCleanup) {
        mediaCleanup();
        mediaCleanup = null;
      }
    };
  },
  getSnapshot: (): Theme => (hydrated ? currentTheme() : "light"),
  getServerSnapshot: (): Theme => "light",
  markHydrated: () => {
    if (hydrated) return;
    hydrated = true;
    emit();
  },
  toggle: () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    writeStorage(STORAGE_KEY, next);
    applyTheme(next);
    emit();
  },
};
