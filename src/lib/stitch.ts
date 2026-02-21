export interface GalleryImage {
    id: string;
    url: string;
    title: string;
    height: number;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    // In a real application, this would fetch from the Stitch API using an API key or SDK.
    // For this demonstration, we are using the assets generated via the Stitch MCP tools.
    return [
        {
            id: '1',
            url: '/250425_DúoBoreal(29).jpg',
            title: 'Harpist Detail',
            height: 400
        },
        {
            id: '2',
            url: '/PHOTO-2025-11-03-18-46-15.jpg',
            title: 'Bespoke Celebration',
            height: 700
        },
        {
            id: '3',
            url: '/250425_DúoBoreal(8).jpg',
            title: 'Harpist Performance',
            height: 600
        },
        {
            id: '4',
            url: '/PHOTO-2025-11-03-18-46-16.jpg',
            title: 'Elegant Venue',
            height: 500
        }
    ];
}
