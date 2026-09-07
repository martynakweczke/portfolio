import type { Lang } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { readStorage, writeStorage } from "@/lib/storage";

const STORAGE_KEY = "mk-portfolio-lang";

const listeners = new Set<() => void>();
let hydrated = false;

const emit = () => {
  for (const listener of listeners) listener();
};

const storedLang = (): Lang | null => {
  const value = readStorage(STORAGE_KEY);
  return value === "en" || value === "pl" ? value : null;
};

const currentLang = (): Lang => storedLang() ?? siteConfig.defaultLang;

export const langStore = {
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot: (): Lang => (hydrated ? currentLang() : siteConfig.defaultLang),
  getServerSnapshot: (): Lang => siteConfig.defaultLang,
  markHydrated: () => {
    if (hydrated) return;
    hydrated = true;
    emit();
  },
  toggle: () => {
    const next: Lang = currentLang() === "en" ? "pl" : "en";
    writeStorage(STORAGE_KEY, next);
    emit();
  },
};
