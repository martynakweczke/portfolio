"use client";

import { useLanguage } from "@/components/providers/language-provider";
import type { Copy } from "@/lib/content";
import { ExternalArrow } from "@/components/external-arrow";

type Project = Copy["projects"][number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="flex flex-col gap-3.5 rounded border border-line bg-bg p-[clamp(20px,2.4vw,30px)] transition duration-[250ms] hover:-translate-y-[3px] hover:border-gold hover:shadow-[0_8px_24px_-18px_var(--shadow)]">
      {project.badge ? (
        <span className="self-start rounded border border-gold px-[9px] py-1 text-[10px] uppercase tracking-[0.18em] text-gold-ink">
          {project.badge}
        </span>
      ) : null}
      <h3 className="m-0 font-display text-[27px] font-semibold leading-[1.15]">
        {project.title}
      </h3>
      <p className="m-0 text-[11px] uppercase tracking-[0.14em] text-muted tabular-nums">
        {project.meta}
      </p>
      <p className="m-0 text-[15px] leading-[1.75] text-ink-2">{project.body}</p>
      <ul className="mt-auto flex list-none flex-wrap gap-1.5 p-0">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-line px-[9px] py-[5px] text-[10.5px] uppercase tracking-[0.12em] text-ink-3"
          >
            {tag}
          </li>
        ))}
      </ul>
      {project.links.length > 0 ? (
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] uppercase tracking-[0.14em]"
            >
              {link.label}<ExternalArrow />
              <span className="sr-only"> ({t.a11y.newTab})</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
