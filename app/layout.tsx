import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olaide Tejumola - Web3 Community Manager & Moderator",
  description: "Experienced Community Manager & Moderator with 3 years managing 100,000+ members in Web3, AI, and tech. Skilled in Discord & Telegram moderation, user engagement, and conflict resolution.",
  keywords: "Web3 community manager, Discord moderator, Telegram moderator, blockchain community, NFT community manager, crypto community, community management, Web3 moderator",
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
