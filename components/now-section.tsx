"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function NowSection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line">
      <dl className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-[clamp(24px,4vw,56px)] gap-y-[22px] px-[clamp(20px,5vw,64px)] py-[clamp(24px,3vw,34px)]">
        {t.now.map((item) => (
          <div key={item.k}>
            <dt className="mb-2 text-[11px] uppercase tracking-[0.18em] text-gold-ink">
              {item.k}
            </dt>
            <dd className="m-0 font-display text-[21px] leading-[1.35] text-ink">
              {item.v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
