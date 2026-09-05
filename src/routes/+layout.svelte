<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ShortLink — Next-Gen URL Shortener & Analytics Platform</title>
	<meta
		name="description"
		content="Enterprise-grade URL shortening, branded link domains, and real-time edge analytics engineered for modern marketing and development teams."
	/>
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-100 selection:bg-indigo-500 selection:text-white"
>
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
