<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import TelemetryWidget from '$lib/components/TelemetryWidget.svelte';
	import Architecture from '$lib/components/Architecture.svelte';
	import FeaturesGrid from '$lib/components/FeaturesGrid.svelte';
	import DevWorkspace from '$lib/components/DevWorkspace.svelte';
	import WhyLinkPulse from '$lib/components/WhyLinkPulse.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	onMount(() => {
		if (window.location.hash === '#about') {
			goto(resolve('/about'), { replaceState: true });
		} else if (window.location.hash === '#contact') {
			goto(resolve('/contact'), { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>LinkPulse — Short Links. Smart Tracking.</title>
	<meta
		name="description"
		content="High-performance URL shortener with sub-millisecond redirects, real-time telemetry, and enterprise edge analytics."
	/>
</svelte:head>

<div class="flex w-full flex-col">
	<Hero />
	<TelemetryWidget />
	<Architecture />
	<FeaturesGrid />
	<DevWorkspace />
	<WhyLinkPulse />
	<CtaBanner />
</div>
