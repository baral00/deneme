'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function SEO() {
    const t = useTranslations('metadata');
    const locale = useLocale();
    const baseUrl = 'https://harpaskane.se';

    const structuredData = {
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
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
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

    const serviceData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Harp Music for Events",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Harpa Skåne"
        },
        "areaServed": {
            "@type": "State",
            "name": "Skåne"
        },
        "description": t('description')
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(musicianData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
            />
        </>
    );
}
