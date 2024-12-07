"use-client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarKey Wallet Connect",
  description: "StarKey Wallet Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {





  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <TopNavBar/> */}
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
