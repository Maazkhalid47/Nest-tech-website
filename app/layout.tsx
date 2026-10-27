import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <p className="nav-logo" style={{ fontSize: 15, fontWeight: 600 }}>
                Nest Technologies
              </p>
              <p>
                A product engineering studio helping startups and businesses
                build scalable digital products.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <Link href="/#philosophy">Philosophy</Link>
                </li>
                <li>
                  <Link href="/#work">Work</Link>
                </li>
                <li>
                  <Link href="/#insights">Insights</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/Maazkhalid47/Nest-tech-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/marskhalid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Nest Technologies. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
