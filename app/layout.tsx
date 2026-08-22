import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | فاطمه تاجیک`,
  },
  description: siteConfig.description,
  keywords: [
    "آموزش زبان آلمانی",
    "مدرس آلمانی هرات",
    "کلاس آلمانی",
    "آزمون گوته",
    "زبان آلمانی آنلاین",
    "فاطمه تاجیک",
    "Deutsch lernen",
  ],
  authors: [{ name: "فاطمه تاجیک" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
