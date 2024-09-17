import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";

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
          inter.className + "bg-slate-100 dark:bg-slate-700 dark:text-slate-100"
        }
      >
        <div className="flex justify-center">
          <div className="inline-block px-8 pb-8 pt-2">
            <Suspense>
              <Header className="" />
              <main className="mt-4">{children}</main>
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
