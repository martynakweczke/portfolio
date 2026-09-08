"use client";

import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/components/providers/language-provider";
import { RepoList } from "@/components/repo-list";

export function WorkSection() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,7vw,104px)]"
    >
      <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <h2 className="m-0 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]">
          {t.work.title}
        </h2>
        <p className="m-0 text-[11px] uppercase tracking-[0.2em] text-gold-ink tabular-nums">
          01 — {t.work.kicker}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[clamp(16px,2vw,26px)]">
        {t.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <RepoList title={t.reposTitle} repos={t.repos} />
    </section>
  );
}
