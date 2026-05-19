import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar-Powered Desalination System Design",
  description: "ME 474 senior design final project for a compact solar-electric desalination prototype.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-zinc-900 antialiased`}>
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <footer className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Solar Desalination Team</span>
            <span>Sun Fresh Water, LLC x The City College of New York</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
