import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "الجماعة الترابية أربعاء الساحل | إقليم تيزنيت — الموقع الرسمي",
  description:
    "البوابة الإلكترونية الرسمية للجماعة الترابية أربعاء الساحل، دائرة تيزنيت، إقليم تيزنيت، جهة سوس ماسة، المملكة المغربية. خدمات المواطن، أخبار المجلس والمشاريع التنموية.",
  keywords: "أربعاء الساحل, جماعة أربعاء الساحل, إقليم تيزنيت, سوس ماسة, Commune Arbaa Sahel Tiznit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href={process.env.NODE_ENV === "production" ? "/cta/logo.jpg" : "/logo.jpg"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-[family-name:var(--font-cairo)] antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800"
        style={{ direction: "rtl" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
