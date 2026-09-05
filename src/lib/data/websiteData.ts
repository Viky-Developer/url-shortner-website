import type { FeatureItem, PricingPlan, FaqItem, TestimonialItem } from '$lib/types';

export const STATS = [
	{ value: '10M+', label: 'Links Shortened' },
	{ value: '99.99%', label: 'Uptime SLA' },
	{ value: '150M+', label: 'Clicks Tracked' },
	{ value: '<50ms', label: 'Average Redirect' }
];

export const FEATURES: FeatureItem[] = [
	{
		id: 'lightning-redirects',
		title: 'Sub-50ms Global Redirects',
		description:
			'Deployed on globally distributed edge nodes to ensure instant link resolution worldwide with zero cold starts.',
		icon: 'zap',
		badge: 'Edge Powered'
	},
	{
		id: 'real-time-analytics',
		title: 'Comprehensive Real-Time Analytics',
		description:
			'Track geographic locations, referrer channels, device types, and click spikes with privacy-compliant analytics.',
		icon: 'chart',
		badge: 'Live Data'
	},
	{
		id: 'custom-domains',
		title: 'Branded Custom Domains',
		description:
			'Connect your own custom domains (e.g. go.yourbrand.com) with automatic SSL certificates in one click.',
		icon: 'globe',
		badge: 'Brand First'
	},
	{
		id: 'dynamic-qr',
		title: 'High-Resolution Dynamic QR Codes',
		description:
			'Generate customizable SVG & PNG QR codes for marketing materials, menus, packaging, and digital displays.',
		icon: 'qr',
		badge: 'Print Ready'
	},
	{
		id: 'security-protection',
		title: 'Link Expiration & Passwords',
		description:
			'Protect sensitive destinations with password authentication, click limits, or auto-expiring links.',
		icon: 'shield',
		badge: 'Enterprise Grade'
	},
	{
		id: 'developer-api',
		title: 'Robust REST & Webhook APIs',
		description:
			'Programmatically create, update, and manage links with typed SDKs, webhooks, and rate-limit scaling.',
		icon: 'code',
		badge: 'Dev Friendly'
	}
];

export const PRICING_PLANS: PricingPlan[] = [
	{
		id: 'starter',
		name: 'Starter',
		description: 'Perfect for individuals, freelancers, and small projects.',
		monthlyPrice: 0,
		annualPrice: 0,
		features: [
			'Up to 1,000 links / month',
			'Standard redirect speed',
			'30-day analytics retention',
			'Standard QR code generation',
			'Community support'
		],
		ctaText: 'Get Started Free',
		ctaHref: '/register'
	},
	{
		id: 'pro',
		name: 'Pro',
		description: 'For growing creators, marketing teams, and businesses.',
		monthlyPrice: 19,
		annualPrice: 15,
		highlighted: true,
		features: [
			'Unlimited links',
			'3 Branded custom domains',
			'Unlimited analytics history',
			'Custom styled dynamic QR codes',
			'UTM campaign builder',
			'Password & expiry protection',
			'Priority email & chat support'
		],
		ctaText: 'Start 14-Day Free Trial',
		ctaHref: '/register?plan=pro'
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		description: 'High-volume scale, custom SLA, and dedicated infrastructure.',
		monthlyPrice: 99,
		annualPrice: 79,
		features: [
			'Unlimited links & domains',
			'99.99% Uptime SLA',
			'Dedicated edge IP addresses',
			'Single Sign-On (SSO / SAML)',
			'Role-based team permissions',
			'Real-time webhook events',
			'Dedicated account manager'
		],
		ctaText: 'Contact Enterprise',
		ctaHref: '/contact'
	}
];

export const FAQS: FaqItem[] = [
	{
		id: 'what-is-shortener',
		question: 'What is a URL shortener and why do I need one?',
		answer:
			'A URL shortener transforms long, unwieldy web links into clean, memorable, and shareable short URLs. It increases click-through rates, prevents broken links, and gives you detailed analytics on where your clicks come from.'
	},
	{
		id: 'custom-domains',
		question: 'Can I use my own branded custom domain?',
		answer:
			'Yes! On our Pro and Enterprise plans, you can connect your own domains (like link.yourcompany.com). We automatically provision and renew free SSL certificates for all connected domains.'
	},
	{
		id: 'qr-codes',
		question: 'Are QR codes included with shortened links?',
		answer:
			'Every shortened link automatically includes a vector (SVG) and raster (PNG) QR code. You can download and print them on business cards, brochures, or packaging.'
	},
	{
		id: 'link-analytics',
		question: 'What analytics data is tracked?',
		answer:
			'We track total clicks, unique visitors, referring websites, country/region geography, operating system, and browser breakdown, all while respecting user privacy without invasive cookies.'
	},
	{
		id: 'free-trial',
		question: 'Is there a free trial for the Pro plan?',
		answer:
			'Yes, you can try our Pro plan free for 14 days with no credit card required. You can upgrade, downgrade, or cancel anytime from your account settings.'
	}
];

export const TESTIMONIALS: TestimonialItem[] = [
	{
		id: '1',
		name: 'Sarah Chen',
		role: 'Head of Growth',
		company: 'Acme SaaS',
		content:
			'Switching to this shortener increased our social media CTR by 38%. The analytics are fast, accurate, and actionable.',
		avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
		rating: 5
	},
	{
		id: '2',
		name: 'Marcus Vance',
		role: 'Founder',
		company: 'TechFlow Media',
		content:
			'The sub-50ms edge redirects and branded domains have made our links look professional and bulletproof. Best in class.',
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
		rating: 5
	},
	{
		id: '3',
		name: 'Elena Rostova',
		role: 'Marketing Director',
		company: 'Lumina Studio',
		content:
			'Custom QR codes with real-time scans directly into our dashboard helped us bridge offline print campaigns with online sales.',
		avatar:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
		rating: 5
	}
];
