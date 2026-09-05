<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>ShortLink — UI Components Library</title>
</svelte:head>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
	<h1 class="text-4xl font-bold tracking-tight text-on-surface">
		Short<span class="text-primary-600">Link</span>
	</h1>
	<p class="mt-4 max-w-md text-lg text-slate-600">
		UI components library built on the "Modern Hyperlink Engine" design system.
	</p>
	<a
		href={resolve('/demo')}
		class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
	>
		Explore Components
		<ArrowRight class="h-4 w-4" />
	</a>
</div>
