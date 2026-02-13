import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://granddesign.ir"),

  title: {
    default:
      "گراند دیزاین | شرکت طراحی، معماری، برندینگ و اجرای پروژه‌های خلاقانه",
    template: "%s | گراند دیزاین",
  },

  description:
    "گراند دیزاین استودیوی تخصصی طراحی، معماری و برندینگ است که با بهره‌گیری از نوین‌ترین ابزارهای طراحی و هوش مصنوعی، ایده‌ها را به فضاهای الهام‌بخش تبدیل می‌کند. ارائه خدمات طراحی داخلی، نما، دکوراسیون، VR360، انیمیشن، پیمانکاری و اجرای پروژه‌های خاص در گیلان و سراسر ایران.",

  keywords: [
    "طراحی معماری",
    "طراحی داخلی",
    "دکوراسیون",
    "طراحی نما",
    "برندینگ",
    "طراحی سایت",
    "پیمانکاری و اجرا",
    "بازسازی خانه",
    "VR360",
    "انیمیشن معماری",
    "گراند دیزاین",
    "Grand Design",
  ],

  icons: {
    icon: "https://ftp.granddesign.ir/images/20241027_175739_0000.png",
    apple: "https://ftp.granddesign.ir/images/20241027_175739_0000.png",
  },

  openGraph: {
    title: "گراند دیزاین | طراحی، معماری و اجرای پروژه‌های خاص",
    description:
      "استودیو گراند دیزاین با بهره‌گیری از خلاقیت، هوش مصنوعی و طراحی مدرن، از ایده تا اجرای پروژه‌های معماری، دکوراسیون، برندینگ و VR360 در سراسر ایران همراه شماست.",
    url: "https://granddesign.ir",
    siteName: "Grand Design",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://ftp.granddesign.ir/images/20241027_175739_0000.png",
        width: 1200,
        height: 630,
        alt: "Grand Design - Architecture and Creative Studio",
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
