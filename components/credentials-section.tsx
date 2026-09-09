"use client";

import { useLanguage } from "@/components/providers/language-provider";

const subheading =
  "mb-1.5 border-b border-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-gold-ink";
const entryDate = "mb-1.5 text-[11.5px] tracking-[0.12em] text-muted tabular-nums";
const entryTitle =
  "mb-1 font-display text-[21px] font-semibold leading-[1.25]";
const entryOrg = "text-[13.5px] italic text-muted";

export function CredentialsSection() {
  const { t } = useLanguage();

  return (
    <section id="credentials" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[clamp(56px,7vw,104px)]">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="m-0 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]">
            {t.cred.title}
          </h2>
          <p className="m-0 text-[11px] uppercase tracking-[0.2em] text-gold-ink tabular-nums">
            04 - {t.cred.kicker}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-[clamp(28px,4vw,64px)]">
          <div>
            <h3 className={subheading}>{t.cred.certs}</h3>
            <ul className="m-0 list-none p-0">
              {t.certs.map((cert) => (
                <li key={cert.title} className="border-b border-line py-[18px]">
                  <p className={entryDate}>{cert.date}</p>
                  <h4 className={entryTitle}>{cert.title}</h4>
                  <p className={`${entryOrg} mb-1.5`}>{cert.org}</p>
                  <p className="m-0 text-[14px] leading-[1.7] text-ink-2">
                    {cert.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={subheading}>{t.cred.education}</h3>
            <ul className="m-0 mb-[clamp(28px,4vw,44px)] list-none p-0">
              {t.education.map((entry) => (
                <li key={entry.degree} className="border-b border-line py-[18px]">
                  <p className={entryDate}>{entry.period}</p>
                  <h4 className={entryTitle}>{entry.degree}</h4>
                  <p className={`${entryOrg} m-0`}>{entry.org}</p>
                </li>
              ))}
            </ul>
            <h3 className={subheading}>{t.cred.languages}</h3>
            <ul className="m-0 list-none p-0">
              {t.langs.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                >
                  <span className="font-display text-[21px]">
                    {language.name}
                  </span>
                  <span className="text-[11.5px] uppercase tracking-[0.16em] text-gold-ink">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
