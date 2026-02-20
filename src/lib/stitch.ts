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
            url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/250425_Du%CC%81oBoreal%288%29-VSjqkMTEDyNYbufZFFVDrJ1xh1qEWU.jpg',
            title: 'Portrait with Harp',
            height: 700
        },
        {
            id: '2',
            url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2080.JPG-fbxQrsFinAScYFtAcpppaQskheOW7r.jpeg',
            title: 'Harp Performance',
            height: 500
        },
        {
            id: '3',
            url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/250425_Du%CC%81oBoreal%2829%29-SyQRgeEiWCnJPSj7vP9N7gpLtqACTn.jpg',
            title: 'Artistic Portrait',
            height: 700
        }
    ];
}
