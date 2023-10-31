import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";

const cormorant = Cormorant_Garamond({
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convite de casamento Laisa & Mateus",
  description: "Acesse o convite de casamento da Laisa!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </head>

      <body className={`${cormorant.className} text-brown-500`}>
        {children}
      </body>
    </html>
  );
}
