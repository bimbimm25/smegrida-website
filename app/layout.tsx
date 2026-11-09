import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Atau font lain yang Anda gunakan
import "./globals.css";
import Footer from "@/components/Footer"; // 1. IMPORT FOOTER DI SINI

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMKS PGRI 2 Sidoarjo",
  description: "Website Resmi SMKS PGRI 2 Sidoarjo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Konten Halaman Anda (termasuk Beranda) */}
        {children} 
        
        {/* 2. TARUH FOOTER DI BAWAH SINI AGAR MUNCUL DI SEMUA HALAMAN */}
        <Footer />
      </body>
    </html>
  );
}