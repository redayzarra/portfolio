import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/MyComponents/SmoothScroll";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReDay's Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <Head>
        <title>ReDay&apos;s Portfolio</title>
        <meta name="description" content="Portfolio website of ReDay Zarra" />
        <link rel="icon" href="/images/myLogo.png" />
      </Head>
      <body className={inter.className}>
        <SmoothScroll>
          <main>{children}</main>
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}

