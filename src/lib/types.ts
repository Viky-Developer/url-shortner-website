export interface NavItem {
	label: string;
	href: string;
	isExternal?: boolean;
}

export interface FeatureItem {
	id: string;
	title: string;
	description: string;
	icon: string;
	badge?: string;
}

export interface PricingPlan {
	id: string;
	name: string;
	description: string;
	monthlyPrice: number;
	annualPrice: number;
	highlighted?: boolean;
	features: string[];
	ctaText: string;
	ctaHref: string;
}

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export interface TestimonialItem {
	id: string;
	name: string;
	role: string;
	company: string;
	content: string;
	avatar: string;
	rating: number;
}

export interface DemoShortenedLink {
	originalUrl: string;
	shortUrl: string;
	slug: string;
	createdAt: string;
	clicks: number;
	qrDataUrl?: string;
}
