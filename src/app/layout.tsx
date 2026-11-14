import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cori Lucas R.Ac — Registered Acupuncturist | Halifax & Hammonds Plains, NS",
  description:
    "Cori Lucas is a Registered Acupuncturist (ATCMANS) offering acupuncture, gua sha, fire cupping, acupressure, and tuina massage in Halifax and Hammonds Plains, Nova Scotia.",
  keywords: [
    "acupuncture",
    "acupuncturist",
    "Halifax",
    "Hammonds Plains",
    "Nova Scotia",
    "Traditional Chinese Medicine",
    "TCM",
    "gua sha",
    "cupping",
    "ATCMANS",
    "Cori Lucas",
  ],
  authors: [{ name: "Cori Lucas" }],
  metadataBase: new URL("https://corilucas.ca"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cori Lucas R.Ac — Registered Acupuncturist",
    description:
      "Holistic acupuncture and Traditional Chinese Medicine in Halifax and Hammonds Plains, Nova Scotia.",
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Cori Lucas R.Ac",
    images: [
      {
        url: "/images/logo.png",
        width: 750,
        height: 750,
        alt: "Cori Lucas R.Ac logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Cori Lucas R.Ac — Registered Acupuncturist",
    description:
      "Holistic acupuncture and Traditional Chinese Medicine in Halifax and Hammonds Plains, Nova Scotia.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
