import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felicia Bengtsson | Frontendutvecklare",
  description:
    "Portfolio med utvalda projekt inom frontend, UX/UI och visuellt starka webbupplevelser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
