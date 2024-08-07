import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"],preload:true });

export const metadata: Metadata = {
  title: "Accounts panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={cn(inter.className, "bg-slate-100")}>{children}</body>
    </html>
  );
}
