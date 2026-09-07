"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.langAria}
      className="shrink-0 cursor-pointer rounded border border-gold px-3 py-1.5 font-serif text-[11.5px] uppercase tracking-[0.16em] text-gold-ink transition-colors hover:bg-gold-soft hover:text-ink"
    >
      {t.langSwitch}
    </button>
  );
}
