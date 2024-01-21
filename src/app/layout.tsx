import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
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
        <div className="flex justify-center">
          <div className="inline-block px-8 pb-8 pt-2">
            <Header className="" />
            <main className="mt-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
