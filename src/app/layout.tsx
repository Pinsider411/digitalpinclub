import type { Metadata } from "next";
import { Inter, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PinSiderMark } from "@/components/PinSiderMark";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Pin Club — Community for Digital Pin Collectors",
    template: "%s · Digital Pin Club",
  },
  description:
    "Independent fan community for digital pin collectors. Learn the hobby, follow drops, show off your board, and find your people. Not affiliated with Disney, Dapper Labs, or Disney Pinnacle.",
  openGraph: {
    title: "Digital Pin Club — Community for Digital Pin Collectors",
    description:
      "Independent fan community for digital pin collectors. Learn, trade smarter, and belong.",
    siteName: "Digital Pin Club",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-cta-text"
        >
          Skip to content
        </a>
        <div className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center sm:justify-between sm:px-6">
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 font-mono text-[11px] text-muted sm:text-xs">
              Unofficial club · Data desk on{" "}
              <a
                href="https://pinsider.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent underline-offset-2 hover:underline"
                aria-label="Pinsider"
              >
                <PinSiderMark className="h-4 w-4" size={16} />
                <span className="font-display text-xs font-semibold tracking-tight text-text">
                  Pinsider<span className="text-[#D4AF37]">.io</span>
                </span>
                <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </div>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
