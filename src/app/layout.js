import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MANIT Sports",
  description: "This is MANIT Sports website for the update of upcoming events and the past events with their results and schedule",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Header />
        {children}
        <Footer />
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
