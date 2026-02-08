import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const exo2 = Exo_2({
  variable: "--font-expo",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://event.hispace.ai"),
  title: "Human Interior - Đại Tiệc Khai Trương Showroom",
  description:
    "Sự kiện khai trương showroom Human Interior - Thiết kế & Thi công nội thất cao cấp. Powered by hispace.ai",
  keywords: [
    "nội thất",
    "thiết kế nội thất",
    "Human Interior",
    "hispace.ai",
    "showroom",
    "khai trương",
  ],
  openGraph: {
    title: "Human Interior - Đại Tiệc Khai Trương Showroom",
    description: "Cơ hội nhận quà tặng nội thất lên đến 50.000.000 VNĐ",
    url: "https://event.hispace.ai",
    siteName: "Human Interior",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Human Interior Showroom Opening Event",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Interior - Đại Tiệc Khai Trương Showroom",
    description: "Cơ hội nhận quà tặng nội thất lên đến 50.000.000 VNĐ",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Material+Symbols+Rounded:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${exo2.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
