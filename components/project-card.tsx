"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import type { Copy } from "@/lib/content";
import { ExternalArrow } from "@/components/external-arrow";

type Project = Copy["projects"][number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const primary =
    project.links.find((link) => !link.href.includes("github.com")) ?? project.links[0];

  return (
    <article
      className={`relative flex flex-col gap-3.5 rounded border bg-bg p-[clamp(20px,2.4vw,30px)] transition ${
        project.featured ? "border-gold/60" : "border-line"
      } duration-[250ms] hover:-translate-y-[3px] hover:border-gold hover:shadow-[0_8px_24px_-18px_var(--shadow)]`}
    >
      {project.image ? (
        <div className="relative -mx-[clamp(8px,1vw,14px)] -mt-[clamp(8px,1vw,14px)] mb-2 aspect-[16/9] overflow-hidden rounded-[2px] border border-line">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 760px) 90vw, 560px"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      {project.badge ? (
        <span className="self-start rounded border border-gold px-[9px] py-1 text-[10px] uppercase tracking-[0.18em] text-gold-ink">
          {project.badge}
        </span>
      ) : null}
      <h3
        className={`m-0 font-display font-semibold leading-[1.15] ${
          project.featured ? "text-[clamp(28px,3vw,36px)]" : "text-[25px]"
        }`}
      >
        {primary ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit! no-underline before:absolute before:inset-0 before:content-['']"
          >
            {project.title}
            <span className="sr-only"> ({t.a11y.newTab})</span>
          </a>
        ) : (
          project.title
        )}
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
              className="relative z-10 text-[11.5px] uppercase tracking-[0.14em]"
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
