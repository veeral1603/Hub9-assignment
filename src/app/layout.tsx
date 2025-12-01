import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Hub9 - Assignment",
  description: "A simple assignment project using Next.js and TypeScript.",
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
        <div className="min-h-screen flex flex-col">
          <nav className="bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
              <div>
                <Link href="/" className="text-white font-semibold text-lg">
                  Hub9 Assignment
                </Link>
              </div>
              <div className="flex items-center gap-8 text-white text-sm md:text-base font-medium ">
                <Link
                  href="/assignment-1"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Assignment 1
                </Link>
                <Link
                  href="/assignment-2"
                  className="hover:text-orange-400 transition duration-300"
                >
                  Assignment 2
                </Link>
              </div>
            </div>
          </nav>
          <main className="flex-1 h-full flex items-center justify-center max-w-8xl mx-auto px-4 md:px-8 py-10 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
