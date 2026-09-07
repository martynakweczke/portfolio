"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-header-bg backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1180px] flex-nowrap items-center gap-x-[clamp(14px,2vw,28px)] gap-y-2.5 px-[clamp(20px,5vw,64px)] py-3.5">
        <a
          href="#top"
          className="mr-auto shrink-0 font-display text-[21px] tracking-[0.01em] text-ink no-underline"
        >
          Martyna Kweczke
        </a>
        <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-[clamp(10px,1.6vw,22px)] gap-y-1.5 max-[760px]:hidden">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-1 text-[11.5px] uppercase tracking-[0.16em] text-ink-3 no-underline transition-colors hover:border-gold hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
