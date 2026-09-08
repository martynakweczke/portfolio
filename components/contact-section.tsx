"use client";

import { useLanguage } from "@/components/providers/language-provider";

const bandRow =
  "flex items-baseline justify-between gap-4 py-[18px] text-band-ink no-underline transition-colors duration-200 hover:text-band-gold";
const bandRowName = "font-display text-[23px]";
const bandRowMeta = "text-[11px] uppercase tracking-[0.16em] text-band-muted";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-band-bg text-band-ink">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,112px)]">
        <div className="flex flex-wrap items-start justify-between gap-[clamp(28px,5vw,72px)]">
          <div className="min-w-0 flex-[1_1_340px]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-band-gold tabular-nums">
              06 — {t.contact.kicker}
            </p>
            <h2 className="mb-5 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-normal leading-none tracking-[-0.02em]">
              {t.contact.title}
            </h2>
            <p className="mb-7 max-w-[50ch] text-[16px] leading-[1.8] text-band-ink-2">
              {t.contact.body}
            </p>
            <a
              href="mailto:martynakweczke@gmail.com"
              className="border-b border-band-gold pb-1 font-display text-[clamp(1.35rem,3.2vw,2.2rem)] text-band-ink no-underline transition-colors duration-200 hover:border-band-ink hover:text-band-gold"
            >
              martynakweczke@gmail.com
            </a>
          </div>
          <ul className="m-0 flex-[0_1_280px] list-none p-0">
            <li className="border-t border-band-line">
              <a
                href="https://github.com/martynakweczke"
                target="_blank"
                rel="noopener noreferrer"
                className={bandRow}
              >
                <span className={bandRowName}>GitHub</span>
                <span className={bandRowMeta}>
                  martynakweczke<span aria-hidden="true">&#8239;↗</span>
                </span>
                <span className="sr-only"> ({t.a11y.newTab})</span>
              </a>
            </li>
            <li className="border-t border-band-line">
              <a
                href="https://www.linkedin.com/in/martyna-kweczke"
                target="_blank"
                rel="noopener noreferrer"
                className={bandRow}
              >
                <span className={bandRowName}>LinkedIn</span>
                <span className={bandRowMeta}>
                  martyna-kweczke<span aria-hidden="true">&#8239;↗</span>
                </span>
                <span className="sr-only"> ({t.a11y.newTab})</span>
              </a>
            </li>
            <li className="border-t border-b border-band-line">
              <a
                href="/assets/Martyna-Kweczke-CV.pdf"
                download="Martyna-Kweczke-CV.pdf"
                className={bandRow}
              >
                <span className={bandRowName}>{t.contact.cv}</span>
                <span className={bandRowMeta}>
                  PDF<span aria-hidden="true">&#8239;↓</span>
                </span>
                <span className="sr-only"> ({t.a11y.download})</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-[clamp(44px,6vw,80px)] border-t border-band-line pt-5 text-[11.5px] tracking-[0.1em] text-band-muted">
          {t.contact.footer}
        </p>
      </div>
    </section>
  );
}
