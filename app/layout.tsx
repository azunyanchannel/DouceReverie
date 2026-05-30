import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douce Rêverie",
  description: "A free, romantic, slightly sweet closet for becoming yourself."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
