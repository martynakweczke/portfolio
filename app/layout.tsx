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

const siteTitle = "Martyna Kweczke";
const siteDescription =
  "Junior frontend and full-stack developer in Wrocław, Poland. Over a year of hands-on experience in Angular, React and TypeScript.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Martyna Kweczke" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("mk-portfolio-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);var l=localStorage.getItem("mk-portfolio-lang");if(l==="en"||l==="pl"){document.documentElement.lang=l;}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
