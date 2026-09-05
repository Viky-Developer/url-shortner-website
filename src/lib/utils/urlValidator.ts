import type { DemoShortenedLink } from '$lib/types';

const RESERVED_SLUGS = new Set([
	'api',
	'login',
	'register',
	'dashboard',
	'pricing',
	'features',
	'faq',
	'admin',
	'about',
	'contact',
	'privacy',
	'terms',
	'status',
	'settings'
]);

/**
 * Validates whether a given string is a valid HTTP or HTTPS URL.
 */
export function isValidUrl(input: string): boolean {
	if (!input || typeof input !== 'string') return false;
	const trimmed = input.trim();
	if (!trimmed) return false;

	try {
		const parsed = new URL(trimmed);
		return parsed.protocol === 'http:' || parsed.protocol === 'https:';
	} catch {
		return false;
	}
}

/**
 * Validates a custom slug for URL safety and format constraints.
 */
export function validateCustomSlug(slug: string): { valid: boolean; error?: string } {
	if (!slug) {
		return { valid: true };
	}

	const trimmed = slug.trim().toLowerCase();

	if (trimmed.length < 3) {
		return { valid: false, error: 'Custom alias must be at least 3 characters long.' };
	}

	if (trimmed.length > 30) {
		return { valid: false, error: 'Custom alias cannot exceed 30 characters.' };
	}

	if (!/^[a-z0-9-_]+$/.test(trimmed)) {
		return {
			valid: false,
			error: 'Custom alias may only contain lowercase letters, numbers, hyphens, and underscores.'
		};
	}

	if (RESERVED_SLUGS.has(trimmed)) {
		return {
			valid: false,
			error: `The alias "${trimmed}" is reserved by the system. Please choose another.`
		};
	}

	return { valid: true };
}

/**
 * Safely shortens display text of long URLs.
 */
export function formatDisplayUrl(url: string, maxLength = 45): string {
	if (!url) return '';
	if (url.length <= maxLength) return url;
	return `${url.slice(0, maxLength - 3)}...`;
}

/**
 * Simulates a realistic shortened link generation for client preview.
 */
export function generateMockShortLink(originalUrl: string, customSlug?: string): DemoShortenedLink {
	const cleaned = originalUrl.trim();
	const slug = customSlug?.trim().toLowerCase() || generateRandomSlug(6);
	const shortDomain = 'https://short.link';

	return {
		originalUrl: cleaned,
		shortUrl: `${shortDomain}/${slug}`,
		slug,
		createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
		clicks: Math.floor(Math.random() * 25) + 1
	};
}

function generateRandomSlug(length: number): string {
	const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}
