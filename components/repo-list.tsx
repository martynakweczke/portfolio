"use client";

import { useLanguage } from "@/components/providers/language-provider";
import type { Copy } from "@/lib/content";
import { ExternalArrow } from "@/components/external-arrow";

type Repo = Copy["repos"][number];

export function RepoList({ title, repos }: { title: string; repos: Repo[] }) {
  const { t } = useLanguage();

  return (
    <div className="mt-[clamp(32px,4vw,56px)] border-t border-line pt-[clamp(18px,2.4vw,26px)]">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="m-0 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-gold-ink">
          {title}
        </h3>
        <a
          href="https://github.com/martynakweczke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-[0.14em]"
        >
          github.com/martynakweczke<ExternalArrow />
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      </div>
      <ul className="m-0 list-none p-0">
        {repos.map((repo) => (
          <li key={repo.name} className="border-t border-line">
            <a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-baseline gap-x-[clamp(16px,3vw,40px)] gap-y-1.5 px-0.5 py-4 text-ink no-underline transition-colors duration-200 hover:text-gold-ink"
            >
              <span className="min-w-0 flex-[1_1_220px] font-display text-[22px] leading-[1.25]">
                {repo.name}
              </span>
              <span className="min-w-0 flex-[2_1_260px] text-[14px] leading-[1.6] text-ink-2">
                {repo.body}
              </span>
              <span className="flex-none text-[10.5px] uppercase tracking-[0.12em] text-muted">
                {repo.stack}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
