import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://granddesign.ir"),

  title: {
    default:
      "گرند دیزاین | شرکت طراحی، معماری، برندینگ و اجرای پروژه‌های خلاقانه",
    template: "%s | گرند دیزاین",
  },

  description:
    "گراند دیزاین شرکت تخصصی طراحی، معماری و برندینگ است که با خلاقیت و ابزارهای نوین، ایده‌ها را به فضاهای الهام‌بخش تبدیل می‌کند.",

  keywords: [
    "طراحی معماری",
    "طراحی داخلی",
    "دکوراسیون",
    "طراحی نما",
    "برندینگ",
    "گرند دیزاین",
  ],

  icons: {
    icon: "/favicon.ico", // ✅ از public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "گرند دیزاین | طراحی، معماری و اجرای پروژه‌های خاص",
    description:
      "استودیو گرند دیزاین؛ از ایده تا اجرای پروژه‌های معماری، دکوراسیون و برندینگ.",
    url: "https://granddesign.ir",
    siteName: "Grand Design",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // اگر داشتی
        width: 1200,
        height: 630,
        alt: "Grand Design Studio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
