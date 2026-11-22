import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGI is Dangerous",
  description:
    "Warning about the risks of advanced Artificial Intelligence (AI).",
  icons: {
    icon: "/img/agiisdangerous.png",
    shortcut: "/img/agiisdangerous.png",
    apple: "/img/agiisdangerous.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Roboto:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        {children}
        <a href="#top" className="back-to-top" aria-label="Back to top">
          <img src="/img/arrow141.png" alt="" />
        </a>
      </body>
    </html>
  );
}
