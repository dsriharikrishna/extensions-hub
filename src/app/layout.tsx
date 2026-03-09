import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadzap.auto"),
  title: {
    default: "LeadZap Automation | Extract. Connect. Convert.",
    template: "%s | LeadZap Automation"
  },
  description: "Advanced AI-powered lead generation engines for hyper-growth. Extract verified business leads with 99% accuracy and automate your high-conversion WhatsApp outreach campaigns.",
  keywords: ["AI Lead Generation", "Hyper-growth Automation", "Enterprise Data Extraction", "ROI-driven Marketing", "Scalable Sales Engine", "WhatsApp Automation", "Business Intelligence", "LeadZap", "Revenue Operations"],
  authors: [{ name: "LeadZap Team", url: "https://leadzap.auto" }],
  creator: "LeadZap Automation",
  publisher: "LeadZap Automation",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadzap.auto",
    title: "LeadZap Automation | Extract. Connect. Convert.",
    description: "Deploy AI-powered extraction engines to build a scalable sales pipeline. Extract hyper-accurate business data and automate high-conversion WhatsApp campaigns.",
    siteName: "LeadZap Automation",
    images: [
      {
        url: "/og-image.png", // Recommended to add this asset later
        width: 1200,
        height: 630,
        alt: "LeadZap Automation Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadZap Automation | Extract. Connect. Convert.",
    description: "Deploy AI-powered extraction engines and automate your high-conversion WhatsApp outreach.",
    site: "@leadzap_auto",
    creator: "@leadzap_auto",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-purple-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
