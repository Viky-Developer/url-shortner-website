import { expect, test } from '@playwright/test';

test.describe('UI Components Demo', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/demo');
	});

	test('renders all component sections', async ({ page }) => {
		await expect(page.locator('h1')).toContainText('UI Components Library');

		for (const section of ['Button', 'Badge', 'Input & URL Input', 'Card', 'Checkbox']) {
			await expect(page.getByText(section, { exact: true })).toBeVisible();
		}
	});

	test('shows button variants', async ({ page }) => {
		await expect(page.getByRole('button', { name: 'Primary' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Secondary' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Ghost' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Destructive' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Disabled' })).toBeDisabled();
	});

	test('shows badge variants', async ({ page }) => {
		for (const label of [
			'Default',
			'Secondary',
			'Outline',
			'Active',
			'Inactive',
			'Success',
			'Destructive'
		]) {
			await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
		}
	});

	test('url input renders monospaced prefix and reacts to typing', async ({ page }) => {
		const prefix = page.getByText('dub.sh/');
		await expect(prefix).toBeVisible();

		const input = page.locator('input[placeholder="your-link"]');
		await expect(input).toHaveValue('git-repo');
		await input.fill('my-campaign');
		await expect(input).toHaveValue('my-campaign');
	});

	test('checkbox toggles state', async ({ page }) => {
		const subscription = page.getByLabel('Email me product updates');
		await expect(subscription).not.toBeChecked();
		await subscription.check();
		await expect(subscription).toBeChecked();
		await expect(page.getByText('Subscription: on')).toBeVisible();
	});
});
