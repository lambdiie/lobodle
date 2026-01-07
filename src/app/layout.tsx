import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Logo from "@/components/logo";

const norwester = localFont({
  src: "../../public/fonts/norwester.woff2",
  variable: "--font-norwester",
});

const gillSansMT = localFont({
  src: "../../public/fonts/gillsansmt.woff2",
  variable: "--font-gill-sans-mt",
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
        className={`${norwester.variable} ${gillSansMT.variable} antialiased`}
      >
        <div className="fixed w-screen h-screen -z-1">
          <Image
            src="/images/background.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative flex justify-center min-h-screen">
          <main className="flex w-full max-w-3xl flex-col items-center py-16 gap-16 font-norwester">
            <Logo />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
