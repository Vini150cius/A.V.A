import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVA",
  description: "Assistente Virtual Avançada (AVA) - Criada por Vinícius Porto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
