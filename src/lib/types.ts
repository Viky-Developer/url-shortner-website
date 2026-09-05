export interface DemoShortenedLink {
	originalUrl: string;
	shortUrl: string;
	slug: string;
	createdAt: string;
	clicks: number;
	qrDataUrl?: string;
}
