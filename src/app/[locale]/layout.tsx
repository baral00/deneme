import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import MUIProvider from "@/components/providers/MUIProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import SEO from "@/components/SEO";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const baseUrl = 'https://harpaskane.se';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | Harpa Skåne`
    },
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'sv-SE': `${baseUrl}/se`,
        'en-US': `${baseUrl}/en`,
        'x-default': `${baseUrl}/se`
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `${baseUrl}/${locale}`,
      siteName: 'Harpa Skåne',
      locale: locale === 'se' ? 'sv_SE' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/IMG_2080website hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Harpa Skåne - Exclusive Harp Music',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/IMG_2080website hero.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const htmlLang = locale === 'se' ? 'sv' : locale;
  return (
    <html lang={htmlLang}>
      <body className="antialiased">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextIntlClientProvider messages={messages}>
            <SEO />
            <MUIProvider>
              {children}
            </MUIProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

