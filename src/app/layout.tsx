import type { Metadata } from "next";
import { Geist, Geist_Mono, Zhi_Mang_Xing } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zhiMangXing = Zhi_Mang_Xing({
  weight: "400",
  variable: "--font-zhi-mang-xing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZZ Zhou | Research Scientist & Software Engineer",
  description: "Personal website of ZZ Zhou - Life, Leisure, and Musings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zhiMangXing.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
