import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go Global Indonesia - Program Kerja di Jepang Tokutei Ginou | Oke Jadi",
  description: "Bimbingan belajar bahasa Jepang intensif dari nol dan program job matching terpercaya untuk bekerja di Jepang dengan Visa Tokutei Ginou bersama LPK Go Global Indonesia & Oke Jadi.",
  keywords: ["Tokutei Ginou", "Kerja di Jepang", "LPK Jepang Bandung", "Go Global Indonesia", "Oke Jadi", "Bahasa Jepang", "Job Matching Jepang"],
  openGraph: {
    title: "Go Global Indonesia - Kerja di Jepang Tokutei Ginou | Oke Jadi",
    description: "Bimbingan belajar bahasa Jepang intensif dari nol dan program job matching terpercaya untuk bekerja di Jepang dengan Visa Tokutei Ginou bersama LPK Go Global Indonesia & Oke Jadi.",
    url: "https://goglobal.id",
    siteName: "Go Global Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Global Indonesia - Kerja di Jepang Tokutei Ginou | Oke Jadi",
    description: "Bimbingan belajar bahasa Jepang intensif dari nol dan program job matching terpercaya untuk bekerja di Jepang dengan Visa Tokutei Ginou bersama LPK Go Global Indonesia & Oke Jadi.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
