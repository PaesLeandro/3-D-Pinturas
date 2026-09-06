import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://3-d-pinturas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "3 D Pinturas | Residencial e Comercial",
    template: "%s | 3 D Pinturas",
  },

  description:
    "Pintura residencial e comercial com acabamento profissional. Solicite seu orçamento pelo WhatsApp.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "3 D Pinturas",
    title: "3 D Pinturas | Residencial e Comercial",
    description:
      "Pintura residencial e comercial com acabamento profissional. Solicite seu orçamento pelo WhatsApp.",
  },

  twitter: {
    card: "summary",
    title: "3 D Pinturas | Residencial e Comercial",
    description:
      "Pintura residencial e comercial com acabamento profissional. Solicite seu orçamento pelo WhatsApp.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}