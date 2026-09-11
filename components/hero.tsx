"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { ExternalArrow } from "@/components/external-arrow";

const rise = (delay: string): CSSProperties => ({
  animation: `rise 0.8s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay} both`,
});

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] pt-[clamp(48px,8vw,108px)] pb-[clamp(40px,5vw,72px)]">
      <div className="flex flex-wrap-reverse items-end gap-[clamp(28px,5vw,72px)]">
        <div className="min-w-0 flex-[3_1_420px]">
          <p
            className="mb-5 text-[12px] uppercase tracking-[0.2em] text-gold-ink"
            style={rise("0s")}
          >
            {t.hero.kicker}
          </p>
          <h1
            className="m-0 text-balance font-display text-[clamp(3rem,9.5vw,7rem)] font-normal leading-[0.95] tracking-[-0.02em]"
            style={rise("0.06s")}
          >
            Martyna
            <br />
            Kweczke
          </h1>
          <div
            className="mt-[clamp(24px,4vw,40px)] mb-[clamp(20px,3vw,28px)] h-px bg-line"
            style={rise("0.12s")}
          />
          <p
            className="m-0 max-w-[54ch] text-justify text-[clamp(16px,1.5vw,18px)] leading-[1.75] text-ink-2 hyphens-auto"
            style={rise("0.18s")}
          >
            {t.hero.lede}
          </p>
          <div
            className="mt-[clamp(24px,3vw,36px)] flex flex-wrap items-center gap-x-[14px] gap-y-2.5"
            style={rise("0.24s")}
          >
            <a
              href="mailto:martynakweczke@gmail.com"
              className="rounded border border-gold px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-gold-ink no-underline transition-colors hover:bg-gold-soft hover:text-ink"
            >
              {t.hero.ctaMail}
            </a>
            <a
              href="/assets/Martyna-Kweczke-CV.pdf"
              download="Martyna-Kweczke-CV.pdf"
              className="rounded border border-line px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-ink-3 no-underline transition-colors hover:border-ink hover:text-ink"
            >
              {t.hero.ctaCv}
            </a>
            <a
              href="https://github.com/martynakweczke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.14em] text-ink-3"
            >
              GitHub<ExternalArrow />
              <span className="sr-only"> ({t.a11y.newTab})</span>
            </a>
            <a
              href="https://www.linkedin.com/in/martyna-kweczke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.14em] text-ink-3"
            >
              LinkedIn<ExternalArrow />
              <span className="sr-only"> ({t.a11y.newTab})</span>
            </a>
          </div>
        </div>
        <figure
          className="m-0 max-w-[330px] flex-[1_1_240px] rounded border border-line bg-bg-alt p-3"
          style={rise("0.1s")}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
            <Image
              src="/assets/profile-picture.webp"
              alt="Martyna Kweczke"
              fill
              sizes="(max-width: 760px) 90vw, 330px"
              priority
              className="object-cover [filter:var(--img)] [object-position:50%_18%]"
            />
          </div>
          <figcaption className="mt-2.5 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            {t.hero.available}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
