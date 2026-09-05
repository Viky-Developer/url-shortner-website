<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import ProductTour from '$lib/components/ProductTour.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
</script>

<svelte:head>
	<title>Features — ShortLink Platform Architecture & Tools</title>
</svelte:head>

<div class="py-12">
	<div class="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
			Platform Capabilities
		</span>
		<h1 class="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
			Engineered for extreme performance & reliability
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
			Deep dive into our edge routing engine, customizable branded domains, high-density QR
			generator, and real-time click stream analytics.
		</p>
	</div>

	<Features />
	<ProductTour />
	<CtaSection />
</div>
