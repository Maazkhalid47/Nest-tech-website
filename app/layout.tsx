import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Arima } from "next/font/google";
import { Work_Sans } from "next/font/google";

const arima = Arima({
  subsets: ["latin"],
  variable: "--font-arima",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Nest Technologies — Product Engineering Studio",
  description:
    "Nest Technologies is a product engineering studio helping startups and businesses transform ambitious ideas into scalable digital products.",
  openGraph: {
    title: "Nest Technologies — Product Engineering Studio",
    description:
      "Product strategy, design, and engineering for startups and businesses building ambitious digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={workSans.variable}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
