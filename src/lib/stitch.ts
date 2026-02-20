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
            url: '/images/gallery-2.jpg',
            title: 'Portrait with Harp',
            height: 700
        },
        {
            id: '2',
            url: '/images/gallery-1.jpg',
            title: 'Harp Performance',
            height: 500
        },
        {
            id: '3',
            url: '/images/gallery-3.jpg',
            title: 'Artistic Portrait',
            height: 700
        }
    ];
}
