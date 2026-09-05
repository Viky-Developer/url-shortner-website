<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight, Sparkles } from 'lucide-svelte';
</script>

<section class="bg-neutral-950 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/60 via-neutral-900 to-neutral-950 p-8 text-center shadow-2xl sm:p-14"
		>
			<div
				class="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
			></div>

			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-900/40 px-3.5 py-1 text-xs font-semibold text-indigo-300"
			>
				<Sparkles class="h-3.5 w-3.5 text-indigo-400" />
				<span>Ready in under 60 seconds</span>
			</div>

			<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
				Ready to take control of your links?
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-sm text-neutral-300 sm:text-base">
				Join thousands of developers, creators, and marketing professionals who rely on ShortLink
				for secure, fast, and measurable URLs.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<a
					href={resolve('/pricing')}
					class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-95"
				>
					<span>Start For Free</span>
					<ArrowRight class="h-4 w-4" />
				</a>
				<a
					href={resolve('/faq')}
					class="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/80 px-7 py-3.5 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-800 hover:text-white"
				>
					<span>Read FAQ</span>
				</a>
			</div>
		</div>
	</div>
</section>
