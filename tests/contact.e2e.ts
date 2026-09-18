import { expect, test } from '@playwright/test';

test.describe('Contact Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/contact');
	});

	test('has expected meta title and SEO tags', async ({ page }) => {
		await expect(page).toHaveTitle(/Contact \| LinkPulse/);
	});

	test('renders Contact Hero with dispatch badge and narrative', async ({ page }) => {
		await expect(page.getByText('DISPATCH • ROUTE /contact')).toBeVisible();
		await expect(page.getByRole('heading', { name: /Get in Touch\./i })).toBeVisible();
		await expect(
			page.getByText(
				/Primary channel for freelance opportunities, full-time engineering collaborations/i
			)
		).toBeVisible();
	});

	test('renders Direct Message Gateway form with interactive pill selector', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'Direct Message Gateway' })).toBeVisible();
		await expect(page.getByText('PGP / TLS 1.3')).toBeVisible();

		// Check form fields
		const nameInput = page.getByLabel(/Full Name/i);
		const emailInput = page.getByLabel(/Email Address/i);
		const trackSelect = page.getByLabel(/Inquiry Track/i);
		const messageInput = page.getByLabel(/Message Scope/i);

		await expect(nameInput).toBeVisible();
		await expect(emailInput).toBeVisible();
		await expect(trackSelect).toBeVisible();
		await expect(messageInput).toBeVisible();

		// Pill track interaction
		const freelancePill = page.getByRole('button', { name: 'Freelance Opportunity' });
		await expect(freelancePill).toBeVisible();
		await freelancePill.click();
		await expect(trackSelect).toHaveValue('Freelance Opportunity');

		const bugPill = page.getByRole('button', { name: 'Bug Report & Issues' });
		await bugPill.click();
		await expect(trackSelect).toHaveValue('Bug Report & Issues');
	});

	test('renders Direct Coordinates & Channels card with email copy trigger', async ({ page }) => {
		await expect(page.getByText('Direct Coordinates & Channels')).toBeVisible();
		await expect(page.getByText('contact@linkpulse.dev')).toBeVisible();
		await expect(page.getByText('github.com/linkpulse/issues')).toBeVisible();
		await expect(page.getByText('linkpulse.dev/community')).toBeVisible();
		await expect(page.getByText('linkedin.com/in/developer-profile')).toBeVisible();
		await expect(page.getByTitle('Copy email address')).toBeVisible();
	});

	test('renders Support & Response SLA card', async ({ page }) => {
		await expect(page.getByText('Support & Response SLA')).toBeVisible();
		await expect(page.getByText('Live SLA', { exact: true })).toBeVisible();
		await expect(page.getByText('Response Time Matrix')).toBeVisible();
		await expect(page.getByText('High Priority', { exact: true })).toBeVisible();
		await expect(page.getByText('TIMEZONE / AVAILABILITY')).toBeVisible();
		await expect(page.getByText('PGP Fingerprint')).toBeVisible();
		await expect(page.getByRole('button', { name: /Download Key/i })).toBeVisible();
	});

	test('renders Frequently Asked Topics accordion and expands items', async ({ page }) => {
		await expect(page.getByText('Frequently Asked Topics')).toBeVisible();
		await expect(page.getByText('Looking for freelance or consulting?')).toBeVisible();
		await expect(page.getByText('Reporting an urgent redirect vulnerability?')).toBeVisible();
		await expect(page.getByText('Custom API limits & vanity domains?')).toBeVisible();

		// Click to expand first item
		const firstFaq = page.getByText('Looking for freelance or consulting?');
		await firstFaq.click();
		await expect(
			page.getByText(/We accept selective high-throughput distributed architecture audits/i)
		).toBeVisible();
	});

	test('submits message and shows success toast notification', async ({ page }) => {
		await page.getByLabel(/Full Name/i).fill('Alex Morgan');
		await page.getByLabel(/Email Address/i).fill('alex.morgan@example.com');
		await page.getByRole('button', { name: 'Full-time Engineering' }).click();
		await page
			.getByLabel(/Message Scope/i)
			.fill(
				'Inquiry regarding high-throughput distributed systems roles and engineering collaboration.'
			);

		await page.getByRole('button', { name: 'Send Message' }).click();

		await expect(page.getByText('Message Sent Successfully')).toBeVisible();
		await expect(
			page.getByText(/Thank you for reaching out\. We have received your inquiry/i)
		).toBeVisible();

		// Check inputs are reset
		await expect(page.getByLabel(/Full Name/i)).toHaveValue('');
		await expect(page.getByLabel(/Email Address/i)).toHaveValue('');
	});

	test('navigates between Home and Contact via Navbar', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact' })).toBeVisible();
		await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();

		await expect(page).toHaveURL(/\/contact/);
		await expect(page.getByRole('heading', { name: /Get in Touch\./i })).toBeVisible();
	});
});
