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
  title: "eBike Tours | Book Your Adventure",
  description: "Book scenic eBike tours with Apple-style glassmorphic design. Modern, responsive, and optimized for Vercel.",
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
        <nav className="w-full flex justify-center py-4 px-2 sticky top-0 z-30">
          <div className="glassmorphic flex gap-6 px-8 py-2 rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 backdrop-blur-xl">
            <Link href="/" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
            <Link href="/tours" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Tours</Link>
            <Link href="/booking" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Booking</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
