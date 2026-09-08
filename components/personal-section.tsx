"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function PersonalSection() {
  const { t } = useLanguage();

  return (
    <section id="personal" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,7vw,104px)]">
        <div className="flex flex-wrap items-start gap-[clamp(28px,5vw,72px)]">
          <div className="min-w-0 flex-[1_1_300px]">
            <p className="mb-3.5 text-[11px] uppercase tracking-[0.2em] text-gold-ink tabular-nums">
              05 — {t.personal.kicker}
            </p>
            <h2 className="mb-[18px] font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]">
              {t.personal.title}
            </h2>
            <p className="m-0 max-w-[52ch] text-justify text-[16px] leading-[1.8] text-ink-2 hyphens-auto">
              {t.personal.body}
            </p>
          </div>
          <ul className="m-0 min-w-0 flex-[1_1_280px] list-none p-0">
            {t.hobbies.map((hobby) => (
              <li
                key={hobby}
                className="flex items-baseline gap-4 border-t border-line py-4"
              >
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="font-display text-[23px] leading-[1.35]">
                  {hobby}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
