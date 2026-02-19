import type { Metadata } from "next";
import "./globals.css";
import MUIProvider from "@/components/providers/MUIProvider";

export const metadata: Metadata = {
  title: "Harp for Events | Luxury Event Planning",
  description: "Crafting Timeless Celebrations with an Ultra-Luxury touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MUIProvider>
          {children}
        </MUIProvider>
      </body>
    </html>
  );
}

