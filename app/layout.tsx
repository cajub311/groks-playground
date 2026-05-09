import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrokHub | Charles' Playground",
  description: "Personal dashboard, finance, wedding, games & AI experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white font-sans">{children}</body>
    </html>
  );
}