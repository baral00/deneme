import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Harpa Skåne',
        short_name: 'Harpa Skåne',
        description: 'Exclusive Harp Music for Weddings & Events in Skåne',
        start_url: '/',
        display: 'standalone',
        background_color: '#F7F4ED',
        theme_color: '#064e3b',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo_1_perfect.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo_1_perfect.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
