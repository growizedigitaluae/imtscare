import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imtscare.com"),
  title: {
    default: "IMTS CARE | Worldwide Air Ambulance & Medical Tourism",
    template: "%s | IMTS CARE",
  },
  description:
    "IMTS CARE coordinates worldwide air ambulance services, international patient transfers and medical tourism support from Dubai, UAE.",
  keywords: [
    "air ambulance Dubai",
    "worldwide air ambulance",
    "international patient transfer",
    "medical tourism Dubai",
    "commercial flight stretcher",
    "medical escort",
    "IMTS CARE",
  ],
  openGraph: {
    title: "IMTS CARE | Global Medical Care Without Borders",
    description:
      "Worldwide air ambulance, patient transfer and international medical tourism coordination.",
    url: "https://www.imtscare.com",
    siteName: "IMTS CARE",
    type: "website",
    images: [{ url: "/images/imtscare-logo.png", width: 1250, height: 834, alt: "IMTS CARE logo" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#293984",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
