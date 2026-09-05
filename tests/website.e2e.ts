import { expect, test } from '@playwright/test';

test.describe('ShortLink Website E2E Tests', () => {
	test('homepage loads and renders core marketing elements', async ({ page }) => {
		await page.goto('/');

		// Verify page title
		await expect(page).toHaveTitle(/ShortLink/);

		// Verify main headline is visible
		const headline = page.locator('h1');
		await expect(headline).toBeVisible();
		await expect(headline).toContainText('Shorten, Track, & Scale');

		// Verify hero CTAs are visible
		await expect(page.getByRole('link', { name: 'Start Shortening Free' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Explore Features' })).toBeVisible();
	});

	test('interactive demo allows shortening a link and toggling QR code', async ({ page }) => {
		await page.goto('/');

		// Find the interactive demo input
		const input = page.getByPlaceholder('Paste your long link here');
		await expect(input).toBeVisible();

		// Submit shortening
		const shortenBtn = page.getByRole('button', { name: 'Shorten Link' });
		await expect(shortenBtn).toBeVisible();
		await shortenBtn.click();

		// Verify recent link card appears with Copy button
		const copyButtons = page.getByRole('button', { name: 'Copy' });
		await expect(copyButtons.first()).toBeVisible();

		// Click QR Code toggle
		const qrButtons = page.getByRole('button', { name: 'QR Code' });
		await expect(qrButtons.first()).toBeVisible();
		await qrButtons.first().click();

		// Verify SVG QR preview is rendered
		const qrSvg = page.locator('svg[viewBox="0 0 100 100"]');
		await expect(qrSvg.first()).toBeVisible();
	});

	test('navigation routes to features, pricing, and faq pages', async ({ page }) => {
		await page.goto('/');

		// Navigate to Features
		await page.locator('nav').getByRole('link', { name: 'Features' }).click();
		await expect(page).toHaveURL(/.*\/features/);
		await expect(page.locator('h1')).toContainText('Engineered for extreme performance');

		// Navigate to Pricing
		await page.locator('nav').getByRole('link', { name: 'Pricing' }).click();
		await expect(page).toHaveURL(/.*\/pricing/);
		await expect(page.locator('h2')).toContainText('Scale your links without hidden limits');

		// Navigate to FAQ
		await page.locator('nav').getByRole('link', { name: 'FAQ' }).click();
		await expect(page).toHaveURL(/.*\/faq/);
		await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
	});

	test('pricing page allows toggling between monthly and annual billing', async ({ page }) => {
		await page.goto('/pricing');

		// Check default annual billing price for Pro ($15)
		const monthlyBtn = page.getByRole('button', { name: 'Monthly Billing' });
		const annualBtn = page.getByRole('button', { name: /Annual Billing/ });

		await expect(monthlyBtn).toBeVisible();
		await expect(annualBtn).toBeVisible();

		// Toggle to monthly
		await monthlyBtn.click();
		await expect(page.getByText('$19')).toBeVisible();

		// Toggle back to annual
		await annualBtn.click();
		await expect(page.getByText('$15')).toBeVisible();
	});

	test('faq page toggles accordion answers on click', async ({ page }) => {
		await page.goto('/faq');

		// Click a question
		const questionButton = page.getByRole('button', {
			name: 'Can I use my own branded custom domain?'
		});
		await expect(questionButton).toBeVisible();
		await questionButton.click();

		// Expect answer text to be displayed
		await expect(
			page.getByText(/On our Pro and Enterprise plans, you can connect your own domains/)
		).toBeVisible();
	});
});
