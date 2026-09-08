<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_LOGO_URL } from '$env/static/public';

	let { children } = $props();
	const logoUrl = PUBLIC_LOGO_URL || favicon;
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={logoUrl} />
	<title>LinkPulse — Next-Gen URL Shortener & Analytics Platform</title>
	<meta
		name="description"
		content="Enterprise-grade URL shortening, branded link domains, and real-time edge analytics engineered for modern marketing and development teams."
	/>
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-surface font-sans text-on-surface selection:bg-primary selection:text-white"
>
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
