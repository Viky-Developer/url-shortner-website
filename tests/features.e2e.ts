import { expect, test } from '@playwright/test';

test.describe('Feature Exploration Routes', () => {
	test('navigates from home features grid to routing page', async ({ page }) => {
		await page.goto('/');
		await expect(
			page.getByRole('heading', { name: 'Everything required for modern link fleets.' })
		).toBeVisible();

		// Click Explore Routing
		await page.getByRole('link', { name: /Create Short URLs/i }).click();
		await expect(page).toHaveURL(/\/features\/routing/);
		await expect(
			page.getByRole('heading', { name: /Sub-millisecond routing with deterministic execution/i })
		).toBeVisible();
		await expect(page.getByText('Interactive Routing Builder')).toBeVisible();
	});

	test('navigates from home features grid to analytics page', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: /Track Analytics/i }).click();
		await expect(page).toHaveURL(/\/features\/analytics/);
		await expect(
			page.getByRole('heading', { name: /Real-time telemetry without redirect degradation/i })
		).toBeVisible();
		await expect(page.getByText('Non-Blocking Event Bus')).toBeVisible();
	});

	test('navigates from home features grid to management page', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: /Manage Links/i }).click();
		await expect(page).toHaveURL(/\/features\/management/);
		await expect(
			page.getByRole('heading', { name: /Total control over every link, tag, and domain/i })
		).toBeVisible();
		await expect(page.getByText('Link Explorer & Tag Filter')).toBeVisible();
	});

	test('features routing page interactive URL generator works', async ({ page }) => {
		await page.goto('/features/routing');
		await expect(page.getByText('Compiled Short Link Payload')).toBeVisible();
		await expect(page.getByText('https://linkpulse.io/s/launch-2026')).toBeVisible();
	});

	test('features management page tag filter works', async ({ page }) => {
		await page.goto('/features/management');
		await expect(page.getByText('docs-api')).toBeVisible();

		// Filter by 'Engineering'
		await page.getByRole('button', { name: 'Engineering' }).click();
		await expect(page.getByText('docs-api')).toBeVisible();
	});
});
