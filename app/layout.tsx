import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = localFont({
  src: "../public/fonts/cal.ttf",
  variable: '--font-heading'
})


const fontSubHeading = localFont({
  src: "../public/fonts/jak.ttf",
  variable: '--font-subheading'
})
export const metadata: Metadata = {
  title: "Doing Blog",
  description: "Doing a blog right from the source",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn( fontHeading.variable , fontSubHeading.variable)} >{children}</body>
    </html>
  );
}
