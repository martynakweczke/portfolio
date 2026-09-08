"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,7vw,104px)]">
        <div className="mb-[clamp(20px,3vw,36px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="m-0 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]">
            {t.exp.title}
          </h2>
          <p className="m-0 text-[11px] uppercase tracking-[0.2em] text-gold-ink tabular-nums">
            02 — {t.exp.kicker}
          </p>
        </div>
        <ol className="m-0 list-none p-0">
          {t.jobs.map((job) => (
            <li
              key={`${job.period}-${job.role}`}
              className="flex flex-wrap gap-x-[clamp(20px,4vw,56px)] gap-y-2 border-t border-line py-[clamp(20px,2.6vw,30px)]"
            >
              <p className="m-0 flex-[0_0_168px] whitespace-nowrap pt-1.5 text-[12px] tracking-[0.1em] text-gold-ink tabular-nums">
                {job.period}
              </p>
              <div className="min-w-0 flex-[1_1_320px]">
                <h3 className="mb-1 font-display text-[25px] font-semibold leading-[1.2]">
                  {job.role}
                </h3>
                <p className="mb-2.5 text-[14px] italic text-muted">{job.org}</p>
                <p className="mb-3 max-w-[62ch] text-[15px] leading-[1.75] text-ink-2">
                  {job.body}
                </p>
                <ul className="flex list-none flex-wrap gap-1.5 p-0">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-line px-[9px] py-[5px] text-[10.5px] uppercase tracking-[0.12em] text-ink-3"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-x-[clamp(20px,4vw,56px)] gap-y-2 border-t border-line pt-[clamp(20px,2.6vw,30px)]">
          <p className="m-0 flex-[0_0_168px] whitespace-nowrap pt-1.5 text-[12px] tracking-[0.1em] text-muted tabular-nums">
            2021 — 2024
          </p>
          <div className="min-w-0 flex-[1_1_320px]">
            <h3 className="mb-2.5 font-display text-[25px] font-semibold leading-[1.2]">
              {t.before.title}
            </h3>
            <p className="m-0 max-w-[62ch] text-justify text-[15px] leading-[1.75] text-ink-2 hyphens-auto">
              {t.before.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
