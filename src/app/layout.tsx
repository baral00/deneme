import type { Metadata } from "next";
import "./globals.css";
import MUIProvider from "@/components/providers/MUIProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MUIProvider>
            {children}
          </MUIProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

