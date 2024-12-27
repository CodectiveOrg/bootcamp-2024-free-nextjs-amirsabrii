/** @format */

import type { Metadata } from "next";

import { Noto_Naskh_Arabic } from "next/font/google";

import HeaderComponent from "@/components/header/header";
import FooterComponent from "@/components/footer/footer";

import "./globals.css";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "پروژه پزشکی",
  description: "پلتفرم جامع جستجو دکتر و رزرو آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={notoNaskhArabic.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
