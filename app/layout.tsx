import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejumola Olaide - AI + Web3 Community Manager",
  description: "Building and scaling empowered communities in the Web3 and AI ecosystem. Specializing in Telegram & Discord community management, content creation, and ecosystem growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
