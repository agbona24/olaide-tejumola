import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olaide Tejumola - Web3 Community Manager",
  description: "3 years managing 100,000+ members in Web3, AI, and Tech. Expert in Discord & Telegram moderation, user engagement, and community growth.",
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
