import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "3 D Pinturas | Residencial e Comercial",
  description:
    "Pintura residencial e comercial com acabamento profissional. Solicite seu orçamento pelo WhatsApp.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
