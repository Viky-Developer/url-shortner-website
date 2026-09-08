<script lang="ts">
	import {
		AboutHero,
		TechFoundations,
		CoreCapabilities,
		PerformanceBenchmarks,
		OpenSourceBanner
	} from '$lib/components/about';
</script>

<svelte:head>
	<title>About | LinkPulse - Modern Hyperlink Engine</title>
	<meta
		name="description"
		content="Learn how LinkPulse delivers sub-2ms edge redirect routing, collision-resistant base62 tokenization, and non-blocking telemetry with 100% open-source transparency."
	/>
</svelte:head>

<div class="flex w-full flex-col">
	<AboutHero />
	<TechFoundations />
	<CoreCapabilities />
	<PerformanceBenchmarks />
	<OpenSourceBanner />
</div>
