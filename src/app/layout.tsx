import type { Metadata } from "next";
import "./globals.css";
import MUIProvider from "@/components/providers/MUIProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  metadataBase: new URL('https://harpaskane.se'),
  title: {
    default: "Harpa Skåne | Exklusiv Harpmusik för Bröllop & Event i Skåne",
    template: "%s | Harpa Skåne"
  },
  description: "Professionell harpist i Skåne. Skapa magisk stämning på ditt bröllop, dop eller företagsevent med elegant livemusik. Boka Harpa Skåne för en oförglömlig upplevelse i Malmö, Lund och hela Skåne.",
  keywords: ["Harpist Skåne", "Bröllopsmusik Skåne", "Harpist bröllop", "Livemusik bröllop", "Harpist Malmö", "Harpist Lund", "Musik till dop", "Eventmusik Skåne", "Harpist Helsingborg", "Harpist Österlen"],
  authors: [{ name: "Harpa Skåne" }],
  creator: "Harpa Skåne",
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://harpaskane.se',
    siteName: 'Harpa Skåne',
    title: 'Harpa Skåne | Exklusiv Harpmusik för Bröllop & Event',
    description: 'Skapa magisk stämning på ditt bröllop eller event med professionell harpmusik i Skåne.',
    images: [
      {
        url: '/IMG_2080website hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Harpa Skåne - Professionell Harpist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harpa Skåne | Exklusiv Harpmusik',
    description: 'Professionell harpist i Skåne för bröllop och event.',
    images: ['/IMG_2080website hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">
        <SEO />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <LanguageProvider>
            <MUIProvider>
              {children}
            </MUIProvider>
          </LanguageProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

