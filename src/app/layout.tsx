import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobodle",
  description: "The daily guessing game for Lobotomy Corporation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed w-screen h-screen -z-1">
          <Image
            src="/background.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative flex justify-center min-h-screen">
          <main className="flex w-full max-w-3xl flex-col items-center py-16 gap-8 bg-black/80 border border-border">
            <Link href="/">Lobodle</Link>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
