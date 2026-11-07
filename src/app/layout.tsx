import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cancer-care-foundation.vercel.app"),
  title: {
    template: "%s | Cancer Care & Cure Foundation",
    default: "Cancer Care & Cure Foundation | Together, We Give Hope. Together, We Save Lives.",
  },
  description:
    "Cancer Care & Cure Foundation is a non-profit organization dedicated to helping financially disadvantaged cancer patients access timely financial aid, nutrition, and compassionate guidance.",
  keywords: [
    "Cancer NGO Delhi",
    "Cancer patient assistance India",
    "Cancer treatment financial aid",
    "Cancer care charity",
    "Cancer nutrition support",
    "Donate cancer patients India",
  ],
  authors: [{ name: "Cancer Care & Cure Foundation" }],
  openGraph: {
    title: "Cancer Care & Cure Foundation",
    description: "Together, We Give Hope. Together, We Save Lives.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable} overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1E2A33] font-sans antialiased selection:bg-[#E8F1F7] selection:text-[#004F8C] overflow-x-hidden">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#004F8C] focus:text-white focus:rounded focus:shadow-md"
        >
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
