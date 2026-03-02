'use client';

import React from 'react';

export default function SEO() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Harpa Skåne",
        "image": "https://harpaskane.se/IMG_2080website hero.jpg",
        "@id": "https://harpaskane.se",
        "url": "https://harpaskane.se",
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
        "description": "Exklusiv harpmusik för bröllop och event i Skåne. Professionell harpist för vigsel, mingel och fest.",
        "priceRange": "$$$"
    };

    const musicianData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        "name": "Harpa Skåne",
        "description": "Professionell harpist specialiserad på bröllop och exklusiva event i Skåne.",
        "genre": ["Classical", "Contemporary", "Wedding Music"],
        "location": {
            "@type": "Place",
            "name": "Skåne, Sweden"
        }
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
        </>
    );
}
