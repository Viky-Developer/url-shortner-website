<script lang="ts">
	import { resolve } from '$app/paths';
	import InteractiveDemo from './InteractiveDemo.svelte';
	import { STATS } from '$lib/data/websiteData';
	import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
	<!-- Background gradient ambient lights -->
	<div
		class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl"
	></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Hero Top Announcement -->
		<div class="flex flex-col items-center text-center">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-medium text-indigo-300 shadow-sm backdrop-blur-md"
			>
				<Sparkles class="h-3.5 w-3.5 text-indigo-400" />
				<span>Next-Gen URL Infrastructure & Analytics</span>
			</div>

			<!-- Main Heading -->
			<h1
				class="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.15]"
			>
				Shorten, Track, & Scale <br />
				<span
					class="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
				>
					Every Link You Share
				</span>
			</h1>

			<!-- Subtitle -->
			<p class="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg">
				Transform long messy URLs into high-performing branded links, dynamic QR codes, and
				actionable real-time analytics. Powered by globally distributed edge nodes for sub-50ms
				redirects.
			</p>

			<!-- CTA Action Group -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<a
					href={resolve('/pricing')}
					class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-95"
				>
					<span>Start Shortening Free</span>
					<ArrowRight class="h-4 w-4" />
				</a>
				<a
					href={resolve('/features')}
					class="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/80 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-800 hover:text-white"
				>
					<span>Explore Features</span>
				</a>
			</div>

			<!-- Trust Points -->
			<div class="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
				<div class="flex items-center gap-1.5">
					<CheckCircle2 class="h-4 w-4 text-emerald-400" />
					<span>No credit card required</span>
				</div>
				<div class="flex items-center gap-1.5">
					<ShieldCheck class="h-4 w-4 text-indigo-400" />
					<span>GDPR & Privacy Compliant</span>
				</div>
				<div class="flex items-center gap-1.5">
					<CheckCircle2 class="h-4 w-4 text-emerald-400" />
					<span>99.99% Uptime Guarantee</span>
				</div>
			</div>
		</div>

		<!-- Interactive Demo Widget Section -->
		<div class="mt-14 sm:mt-20">
			<InteractiveDemo />
		</div>

		<!-- Stats Counter Bar -->
		<div class="mt-20 grid grid-cols-2 gap-6 border-y border-neutral-800/80 py-10 sm:grid-cols-4">
			{#each STATS as stat (stat.label)}
				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
						{stat.value}
					</span>
					<span class="mt-1 text-xs font-medium text-neutral-400 sm:text-sm">
						{stat.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>
