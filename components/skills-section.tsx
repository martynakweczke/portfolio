"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,7vw,104px)]">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="m-0 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]">
            {t.skills.title}
          </h2>
          <p className="m-0 text-[11px] uppercase tracking-[0.2em] text-gold-ink tabular-nums">
            03 - {t.skills.kicker}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(24px,3vw,40px)]">
          {t.skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 border-b border-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                {group.title}
              </h3>
              <ul className="flex list-none flex-wrap gap-[7px] p-0">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-bg px-3 py-[7px] text-[13px] text-ink transition-colors duration-200 hover:border-gold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
