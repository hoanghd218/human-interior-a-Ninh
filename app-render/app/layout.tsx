import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mienphi.hispace.ai"),
  title: "HiSpace - Serving Star-Rating Living Spaces",
  description:
    "Premium interior design platform combining AI technology with human craftsmanship to create star-rating living spaces.",
  keywords: [
    "interior design",
    "AI design",
    "living space",
    "architecture",
    "hispace",
    "star-rating",
  ],
  openGraph: {
    title: "HiSpace - Serving Star-Rating Living Spaces",
    description:
      "Premium interior design platform combining AI technology with human craftsmanship to create star-rating living spaces.",
    url: "https://mienphi.hispace.ai",
    siteName: "HiSpace",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HiSpace - AI Powered Interior Design",
        type: "image/png",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiSpace - Serving Star-Rating Living Spaces",
    description:
      "Premium interior design platform combining AI technology with human craftsmanship to create star-rating living spaces.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${cinzel.variable} ${josefinSans.variable} antialiased bg-slate-50 text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
