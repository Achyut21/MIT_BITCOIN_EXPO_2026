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
  title: "MIT Bitcoin Expo 2026 | Freedom for All",
  description: "Join us for MIT Bitcoin Expo 2026 on April 11-12, 2026 at MIT Campus, Cambridge, MA. Theme: Freedom for All.",
  keywords: ["Bitcoin", "MIT", "Crypto", "Blockchain", "Conference", "Expo"],
  openGraph: {
    title: "MIT Bitcoin Expo 2026 | Freedom for All",
    description: "Join us for MIT Bitcoin Expo 2026 on April 11-12, 2026 at MIT Campus, Cambridge, MA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
