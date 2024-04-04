import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/navbar";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const myFont = localFont({
  src: "./proximanova-regular.otf",
  display: "swap",
  variable: "--font-proximanova",
});

export const metadata: Metadata = {
  title:
    "Soul H Studio - Redefine Your Space with Soul H Studio and Crafting Inspiring Solutions for Modern Living",
  description:
    "Experience exceptional design craftsmanship with Soul H Studio, we have been in the industry for 10 years! From concept to execution, we pay meticulous attention to every detail to ensure your space is nothing short of extraordinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${myFont.className}`}>
        <Navbar />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
