import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alsad & Safna | Wedding Invitation",
  description:
    "Request your esteemed presence and blessings for the marriage of Alsad Subair with Safna Navas on 3rd January 2027 at Ayisha Convention Centre, Mylapore, Kollam.",
  generator: "v0.app",
  openGraph: {
    title: "Alsad & Safna | Wedding Invitation",
    description:
      "Request your esteemed presence and blessings for the marriage of Alsad Subair with Safna Navas on 3rd January 2027 at Ayisha Convention Centre, Mylapore, Kollam.",
  },
  twitter: {
    card: "summary",
    title: "Alsad & Safna | Wedding Invitation",
    description:
      "Request your esteemed presence and blessings for the marriage of Alsad Subair with Safna Navas on 3rd January 2027 at Ayisha Convention Centre, Mylapore, Kollam.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${amiri.variable} bg-background`}
    >
      <body className="antialiased selection:bg-gold/20 selection:text-burgundy">
        {children}
      </body>
    </html>
  );
}
