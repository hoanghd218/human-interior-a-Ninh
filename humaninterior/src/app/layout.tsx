import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const exo2 = Exo_2({
  variable: "--font-expo",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://event.hispace.ai"),
  title: "SỰ KIỆN HISPACE.AI",
  description:
    "Định hướng Kiến trúc sư theo ý tưởng của Bạn. THAM DỰ SỰ KIỆN & NHẬN QUÀ TẶNG GIÁ TRỊ",
  keywords: [
    "nội thất",
    "thiết kế nội thất",
    "Human Interior",
    "hispace.ai",
    "showroom",
    "khai trương",
  ],
  openGraph: {
    title: "TỰ TAY THIẾT KẾ & TÙY CHỈNH 3D",
    description: "Định hướng Kiến trúc sư theo ý tưởng của Bạn. THAM DỰ SỰ KIỆN & NHẬN QUÀ TẶNG GIÁ TRỊ",
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
    title: "TỰ TAY THIẾT KẾ & TÙY CHỈNH 3D",
    description: "Định hướng Kiến trúc sư theo ý tưởng của Bạn. THAM DỰ SỰ KIỆN & NHẬN QUÀ TẶNG GIÁ TRỊ",
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
