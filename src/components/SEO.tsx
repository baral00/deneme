'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function SEO() {
    const t = useTranslations('metadata');
    const tAbout = useTranslations('about');
    const tTestimonials = useTranslations('testimonials');
    const locale = useLocale();
    const baseUrl = 'https://harpaskane.se';

    // Base SEO Structured Data
    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Harpa Skåne",
        "image": `${baseUrl}/IMG_2080website hero.jpg`,
        "@id": `${baseUrl}/${locale}`,
        "url": `${baseUrl}/${locale}`,
        "telephone": "+46793162064",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Malmö",
            "addressRegion": "Skåne",
            "postalCode": "",
            "addressCountry": "SE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.6050,
            "longitude": 13.0038
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/share/1Mr1piUqHX/?mibextid=wwXIfr",
            "https://www.instagram.com/harpaskane?igsh=czkwOTV0eDcxYm5m",
            "https://www.youtube.com/@claudiabesne"
        ],
        "description": t('description'),
        "priceRange": "$$$"
    };

    const musicianData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        "name": "Harpa Skåne",
        "description": t('description'),
        "genre": ["Classical", "Contemporary", "Wedding Music"],
        "location": {
            "@type": "Place",
            "name": "Skåne, Sweden"
        }
    };

    // Person Schema for E-E-A-T
    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Claudia Besne",
        "jobTitle": "Harpist",
        "description": tAbout('feature1Desc'),
        "url": baseUrl,
        "sameAs": [
            "https://www.instagram.com/harpaskane",
            "https://www.youtube.com/@claudiabesne"
        ],
        "knowsAbout": ["Harp Music", "Wedding Music", "Classical Music", "Event Entertainment"]
    };

    // FAQ Schema for AI Search
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": locale === 'se' ? "Vilka områden täcker ni?" : "What areas do you cover?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": locale === 'se'
                        ? "Vi erbjuder harpmusik i hela Skåne, inklusive Malmö, Lund, Helsingborg och Österlen."
                        : "We offer harp music throughout Skåne, including Malmö, Lund, Helsingborg, and Österlen."
                }
            },
            {
                "@type": "Question",
                "name": locale === 'se' ? "Vilka typer av evenemang spelar du på?" : "What types of events do you play for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": locale === 'se'
                        ? "Jag spelar på bröllopsceremonier, cocktail-timmar, företagsevent och privata fester."
                        : "I perform for wedding ceremonies, cocktail hours, corporate events, and private parties."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(musicianData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
        </>
    );
}
