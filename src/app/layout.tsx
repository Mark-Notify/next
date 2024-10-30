import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const metadata: Metadata = {
  title: "Mark | Tools App", // ชื่อของหน้าแอป
  description: "Generated by create next app", // คำอธิบายของเว็บ
  icons: {
    icon: "/logo-grifin.png", // ระบุไอคอนใน public directory
    apple: "/apple-touch-icon.png", // สำหรับ Apple devices
  },
  keywords: ["Next.js", "QR Code", "React"], // คำค้นหา SEO
  themeColor: "#ffffff", // กำหนดสีพื้นหลังของแถบเบราว์เซอร์
  viewport: "width=device-width, initial-scale=1", // กำหนด viewport สำหรับ mobile responsiveness
  openGraph: {
    title: "Mark | Tools App",
    description: "Generated by create next app",
    url: "https://yourwebsite.com",
    siteName: "Create Next App",
    images: [
      {
        url: "/logo-grifin.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
