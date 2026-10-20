import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
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
  keywords:
    "أربعاء الساحل, جماعة أربعاء الساحل, إقليم تيزنيت, سوس ماسة, Commune Arbaa Sahel Tiznit",
  icons: {
    icon: process.env.NODE_ENV === "production" ? "/cta/logo.jpg" : "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('splash_seen')==='true'){document.documentElement.classList.add('splash-seen')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className="font-[family-name:var(--font-cairo)] antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800"
        style={{ direction: "rtl" }}
      >
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}