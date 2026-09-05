<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import ProductTour from '$lib/components/ProductTour.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
</script>

<svelte:head>
	<title>ShortLink — Shorten, Track, & Scale Every Link</title>
</svelte:head>

<div class="space-y-0">
	<Hero />
	<Features />
	<ProductTour />
	<Pricing />
	<Testimonials />
	<Faq />
	<CtaSection />
</div>
