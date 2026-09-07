"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = theme === "dark" ? t.themeLight : t.themeDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.themeAria}
      className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded border border-line px-3 py-1.5 font-serif text-[11.5px] uppercase tracking-[0.16em] text-ink-3 transition-colors hover:border-ink hover:text-ink"
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full border border-gold bg-[var(--theme-dot)]"
      />
      {label}
    </button>
  );
}
