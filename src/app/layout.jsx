

import "./globals.css";

export const metadata = {
  title: {
    default: "گراند دیزاین | شرکت طراحی و معماری خانه",
  viewport: "width=device-width, initial-scale=1",
  title: {
    default: "گراند دیزاین | شرکت طراحی، معماری و برندینگ",
    template: "%s | گراند دیزاین",
  },

  description:
    "گراند دیزاین ارائه‌دهنده طراحی سایت حرفه‌ای، UI/UX، برندینگ و سئو برای کسب‌وکارها در لاهیجان و گیلان.",

  metadataBase: new URL("https://granddesign.ir"),

    "گراند دیزاین شرکت تخصصی طراحی و دیزاین با تمرکز بر طراحی معماری، طراحی داخلی، طراحی سایت، UI/UX، برندینگ و سئو برای رشد کسب‌وکارها در لاهیجان و استان گیلان.",

  metadataBase: new URL("https://granddesign.ir"),


  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "گراند دیزاین | طراحی سایت در لاهیجان",
    description:
      "طراحی سایت، برندینگ و سئو برای رشد کسب‌وکارهای محلی در لاهیجان و گیلان",
    title: "گراند دیزاین | شرکت طراحی و دیزاین حرفه‌ای",
    description:
      "گراند دیزاین ارائه‌دهنده خدمات تخصصی طراحی معماری، طراحی داخلی، طراحی سایت، UI/UX، برندینگ و سئو برای توسعه و رشد کسب‌وکارها در لاهیجان و گیلان.",
    url: "https://granddesign.ir",
    siteName: "Grand Design",
    locale: "fa_IR",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
