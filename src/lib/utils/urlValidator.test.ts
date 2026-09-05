import { describe, it, expect } from 'vitest';
import {
	isValidUrl,
	validateCustomSlug,
	formatDisplayUrl,
	generateMockShortLink
} from './urlValidator';

describe('urlValidator unit tests', () => {
	describe('isValidUrl', () => {
		it('accepts valid https URLs', () => {
			expect(isValidUrl('https://google.com')).toBe(true);
			expect(isValidUrl('https://sub.domain.co.uk/path/test?q=1#hash')).toBe(true);
		});

		it('accepts valid http URLs', () => {
			expect(isValidUrl('http://localhost:3000')).toBe(true);
			expect(isValidUrl('http://example.org/feed')).toBe(true);
		});

		it('rejects empty strings and malformed inputs', () => {
			expect(isValidUrl('')).toBe(false);
			expect(isValidUrl('   ')).toBe(false);
			expect(isValidUrl('not-a-url')).toBe(false);
			expect(isValidUrl('javascript:alert(1)')).toBe(false);
			expect(isValidUrl('ftp://example.com')).toBe(false);
		});
	});

	describe('validateCustomSlug', () => {
		it('allows empty slugs (system will auto-generate)', () => {
			const res = validateCustomSlug('');
			expect(res.valid).toBe(true);
		});

		it('accepts valid custom slugs', () => {
			expect(validateCustomSlug('my-campaign-2026').valid).toBe(true);
			expect(validateCustomSlug('launch_v1').valid).toBe(true);
		});

		it('rejects slugs shorter than 3 characters', () => {
			const res = validateCustomSlug('ab');
			expect(res.valid).toBe(false);
			expect(res.error).toContain('at least 3 characters');
		});

		it('rejects slugs longer than 30 characters', () => {
			const res = validateCustomSlug('a'.repeat(31));
			expect(res.valid).toBe(false);
			expect(res.error).toContain('cannot exceed 30 characters');
		});

		it('rejects invalid special characters', () => {
			const res = validateCustomSlug('my/link');
			expect(res.valid).toBe(false);
			expect(res.error).toContain('only contain');
		});

		it('rejects reserved words', () => {
			const res = validateCustomSlug('api');
			expect(res.valid).toBe(false);
			expect(res.error).toContain('reserved');
		});
	});

	describe('formatDisplayUrl', () => {
		it('returns unchanged string if length is within limit', () => {
			expect(formatDisplayUrl('https://example.com', 50)).toBe('https://example.com');
		});

		it('truncates and appends ellipsis if length exceeds limit', () => {
			const longUrl = 'https://example.com/very/long/nested/path/to/some/resource';
			const formatted = formatDisplayUrl(longUrl, 25);
			expect(formatted.length).toBeLessThanOrEqual(25);
			expect(formatted.endsWith('...')).toBe(true);
		});
	});

	describe('generateMockShortLink', () => {
		it('generates a short link with custom slug if provided', () => {
			const link = generateMockShortLink('https://example.com', 'custom-test');
			expect(link.slug).toBe('custom-test');
			expect(link.shortUrl).toBe('https://short.link/custom-test');
			expect(link.originalUrl).toBe('https://example.com');
			expect(link.clicks).toBeGreaterThan(0);
		});

		it('generates a random slug if custom slug is omitted', () => {
			const link = generateMockShortLink('https://example.com');
			expect(link.slug).toHaveLength(6);
			expect(link.shortUrl).toContain('https://short.link/');
		});
	});
});
