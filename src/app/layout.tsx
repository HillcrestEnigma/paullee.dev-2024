import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Me",
  description: "About Paul Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + "bg-gradient-to-r from-orange-50 to-amber-50"
        }
      >
        {/* <div className="mx-auto px-8 pb-8 pt-2 lg:w-3/5"> */}
        <div className="flex justify-center">
          <div className="px-8 pb-8 pt-2 inline-block">
            <Header className="" />
            <main className="mt-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
