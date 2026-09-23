import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PinSiderMark } from "@/components/PinSiderMark";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Pin Club — Community for Digital Pin Collectors",
    template: "%s · Digital Pin Club",
  },
  description:
    "Community for digital pin collectors. Learn the hobby, follow drops, show off your board, and find your people. Not affiliated with Disney, Dapper Labs, or Disney Pinnacle.",
  openGraph: {
    title: "Digital Pin Club — Community for Digital Pin Collectors",
    description:
      "Community for digital pin collectors. Learn, trade smarter, and belong.",
    siteName: "Digital Pin Club",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
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
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-cta-text"
        >
          Skip to content
        </a>
        <div className="border-b border-border bg-bg-elevated">
          <div className="mx-auto flex max-w-[1160px] items-center justify-center gap-2 px-4 py-2 text-center sm:justify-between sm:px-6">
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-muted sm:text-xs">
              Data desk on{" "}
              <a
                href="https://pinsider.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold underline-offset-2 hover:underline"
                aria-label="Pinsider"
              >
                <PinSiderMark className="h-4 w-4" size={16} />
                <span className="font-display text-xs font-semibold tracking-tight text-text">
                  Pinsider<span className="text-gold">.io</span>
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
