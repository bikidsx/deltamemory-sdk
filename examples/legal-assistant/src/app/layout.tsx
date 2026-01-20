import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Assistant - DeltaMemory",
  description: "AI-powered legal research with persistent memory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
