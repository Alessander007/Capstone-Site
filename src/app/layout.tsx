import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Desalination",
  description: "Mechanical Engineering Capstone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* add the font’s className to body */}
      <body className={`${inter.className} bg-white text-zinc-900 antialiased`}>
        <SiteHeader />
        <main className="pt-20">{children}</main>
        <footer className="mt-24 border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-zinc-500">
            © {new Date().getFullYear()} Solar Desalination Team
          </div>
        </footer>
      </body>
    </html>
  );
}
