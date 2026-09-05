<script lang="ts">
	import Faq from '$lib/components/Faq.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
</script>

<svelte:head>
	<title>FAQ — ShortLink Frequently Asked Questions</title>
</svelte:head>

<div class="py-12">
	<div class="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
			Knowledge Base
		</span>
		<h1 class="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
			Frequently Asked Questions
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-base text-neutral-400">
			Everything you need to know about setting up custom domains, tracking analytics, API rate
			limits, and billing.
		</p>
	</div>

	<Faq />
	<CtaSection />
</div>
