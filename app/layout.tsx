import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteName = "Martyna Kweczke";
const siteTitle = "Martyna Kweczke — Junior Frontend & Full-Stack Developer";
const siteDescription =
  "Junior frontend and full-stack developer in Wrocław, Poland. Over a year of hands-on experience in Angular, React and TypeScript.";
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Martyna Kweczke — Junior Frontend & Full-Stack Developer, Wrocław, Poland",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.martynakweczke.dev"),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("mk-portfolio-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);var l=localStorage.getItem("mk-portfolio-lang");if(l==="en"||l==="pl"){document.documentElement.lang=l;}}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: "https://www.martynakweczke.dev",
  image: "https://www.martynakweczke.dev/assets/profile-picture.webp",
  jobTitle: "Junior Frontend & Full-Stack Developer",
  email: "mailto:martynakweczke@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wrocław",
    addressCountry: "PL",
  },
  knowsLanguage: ["pl", "en"],
  knowsAbout: ["React", "Angular", "TypeScript", "Next.js", "React Native", "NestJS"],
  sameAs: [
    "https://github.com/martynakweczke",
    "https://www.linkedin.com/in/martyna-kweczke",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
