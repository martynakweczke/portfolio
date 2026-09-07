import type { Lang } from "@/lib/content";

type SiteConfig = {
  defaultLang: Lang;
  showPhoto: boolean;
  showBeforeTech: boolean;
};

export const siteConfig: SiteConfig = {
  defaultLang: "en",
  showPhoto: true,
  showBeforeTech: true,
};
