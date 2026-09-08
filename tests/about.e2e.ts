import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/about');
	});

	test('has expected meta title and SEO tags', async ({ page }) => {
		await expect(page).toHaveTitle(/About \| LinkPulse/);
	});

	test('renders About Hero with metrics and architecture card', async ({ page }) => {
		// Badge and headline
		await expect(page.getByText('About LinkPulse')).toBeVisible();
		await expect(
			page.getByRole('heading', { name: /Built for Fast, Reliable Link Management/i })
		).toBeVisible();

		// Metrics
		await expect(page.getByText('< 2ms')).toBeVisible();
		await expect(page.getByText('P99 Edge Routing')).toBeVisible();
		await expect(page.getByText('0 ms')).toBeVisible();
		await expect(page.getByText('Cold-Start Overhead')).toBeVisible();

		// Pipeline Card
		await expect(page.getByText('linkpulse-core.internal')).toBeVisible();
		await expect(page.getByText('GET /go/launch-q1')).toBeVisible();
		await expect(page.getByText('Redis L1 Cache Hit')).toBeVisible();
		await expect(page.getByText('Worker: GeoIP2')).toBeVisible();
		await expect(page.getByText('Async Telemetry')).toBeVisible();
	});

	test('renders all 6 Technology Foundations cards', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Engineered with Intentional Simplicity/i })
		).toBeVisible();

		await expect(page.getByRole('heading', { name: 'Go HTTP Engine' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'PostgreSQL' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Redis In-Memory' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'SQLC Query Generator' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Cryptographic JWT' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'SvelteKit 5 + Tailwind' })).toBeVisible();
	});

	test('renders Core Capabilities with Base62 encoding primitive', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Deterministic Link Engineering/i })
		).toBeVisible();

		await expect(
			page.getByRole('heading', { name: 'Base62 Collision-Resistant Tokenization' })
		).toBeVisible();
		await expect(page.getByText('encode(10892348123)')).toBeVisible();
		await expect(page.getByText('→ "x9A7qZ" (6 chars)')).toBeVisible();

		await expect(page.getByRole('heading', { name: 'Sub-5ms P99 Routing API' })).toBeVisible();
		await expect(page.getByText('1.82ms')).toBeVisible();
	});

	test('renders Real Benchmark Telemetry section', async ({ page }) => {
		await expect(page.getByRole('heading', { name: /Real Benchmark Telemetry/i })).toBeVisible();
		await expect(page.getByText('LinkPulse (Go + Redis Engine)')).toBeVisible();
		await expect(page.getByText('1.8 ms')).toBeVisible();
		await expect(page.getByText('26.7x')).toBeVisible();
		await expect(page.getByText('18.4 MB')).toBeVisible();
		await expect(page.getByText('92k req/s')).toBeVisible();
	});

	test('renders Open Source banner with GitHub CTA', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: /Inspect the Code\. Fork the Architecture\./i })
		).toBeVisible();

		await expect(page.getByText('1,248')).toBeVisible();
		await expect(page.getByText('MIT')).toBeVisible();
		await expect(page.getByRole('link', { name: /View Source Code/i })).toBeVisible();
	});

	test('navigates between Home and About via Navbar', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('navigation').getByRole('link', { name: 'About' })).toBeVisible();
		await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();

		await expect(page).toHaveURL(/\/about/);
		await expect(
			page.getByRole('heading', { name: /Built for Fast, Reliable Link Management/i })
		).toBeVisible();
	});
});
