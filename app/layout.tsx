import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRE Master — Learn & Mock",
  description: "Spaced-repetition vocabulary, quant drills, and full-length mock tests for the GRE.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <AuthProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="page-shell py-10 mt-12 border-t border-[var(--color-rule)]">
            <p className="text-[var(--color-ink-faint)] text-sm">
              <span className="serif italic">GRE Master</span> — a private study workbench.
            </p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
