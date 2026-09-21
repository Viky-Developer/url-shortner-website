<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		Link2,
		ArrowRight,
		Zap,
		ShieldCheck,
		QrCode,
		Timer,
		Check,
		Copy,
		Sparkles,
		ChevronRight,
		Sliders
	} from 'lucide-svelte';

	let demoSlug = $state('launch-2026');
	let demoDestination = $state('https://github.com/sveltejs/kit/releases/tag/v2.0.0');
	let demoUtmCampaign = $state('product_launch');
	let demoUtmSource = $state('twitter');
	let demoExpiresIn = $state('30d');
	let copied = $state(false);

	let fullGeneratedUrl = $derived(
		`https://linkpulse.io/s/${demoSlug || 'demo'}?utm_source=${demoUtmSource}&utm_campaign=${demoUtmCampaign}`
	);

	async function copyUrl() {
		await navigator.clipboard.writeText(fullGeneratedUrl).catch(() => {});
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>URL Shortening & Intelligent Routing | LinkPulse</title>
	<meta
		name="description"
		content="Explore LinkPulse sub-2ms edge redirect routing, collision-resistant base62 tokenization, custom vanity slugs, UTM parameter builders, and automatic link expiration."
	/>
</svelte:head>

<div class="flex w-full flex-col bg-surface">
	<!-- Hero Header -->
	<section
		class="relative overflow-hidden border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20"
	>
		<div
			class="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-160 -translate-x-1/2 bg-linear-to-b from-primary-fixed/50 via-surface-variant/20 to-transparent blur-3xl"
		></div>

		<div class="mx-auto max-w-300 px-4 sm:px-8">
			<!-- Breadcrumb -->
			<nav
				class="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500"
				aria-label="Breadcrumb"
			>
				<a href={resolve('/')} class="transition hover:text-primary-600">Home</a>
				<ChevronRight class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400">Features</span>
				<ChevronRight class="h-3 w-3 text-slate-400" />
				<span class="font-medium text-slate-900">URL Routing</span>
			</nav>

			<div class="max-w-3xl space-y-4">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1 font-mono text-xs font-semibold text-primary-700"
				>
					<Sparkles class="h-3.5 w-3.5 text-primary-600" />
					<span>Intelligent Edge Redirection</span>
				</div>
				<h1 class="font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
					Sub-millisecond routing with deterministic execution.
				</h1>
				<p class="text-base leading-relaxed text-slate-600 sm:text-lg">
					Generate clean, branded vanity short links with collision-resistant base62 tokens,
					automated UTM tagging, dynamic QR generation, and strict zero-alloc memory performance.
				</p>
			</div>
		</div>
	</section>

	<!-- Interactive Routing Studio -->
	<section class="py-12 sm:py-16">
		<div class="mx-auto max-w-300 px-4 sm:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
				<!-- Left: Interactive Form Simulator -->
				<div class="space-y-6 lg:col-span-7">
					<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
						<div class="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
							<div class="flex items-center gap-2.5">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-fixed text-primary-600"
								>
									<Sliders class="h-4 w-4" />
								</div>
								<h2 class="font-sans text-base font-semibold text-slate-900">
									Interactive Routing Builder
								</h2>
							</div>
							<span
								class="rounded bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700"
							>
								Live Studio
							</span>
						</div>

						<div class="space-y-4">
							<!-- Target Destination -->
							<div>
								<label
									for="destination-url"
									class="mb-1.5 block font-mono text-xs font-medium text-slate-700"
								>
									Target Destination URL
								</label>
								<div
									class="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 focus-within:border-primary-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-600/20"
								>
									<Link2 class="mr-2 h-4 w-4 shrink-0 rotate-45 text-slate-400" />
									<input
										id="destination-url"
										type="url"
										bind:value={demoDestination}
										class="w-full bg-transparent font-mono text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden sm:text-sm"
										placeholder="https://example.com/long-page-path"
									/>
								</div>
							</div>

							<!-- Custom Vanity Slug & Expiration -->
							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label
										for="vanity-slug"
										class="mb-1.5 block font-mono text-xs font-medium text-slate-700"
									>
										Custom Vanity Slug
									</label>
									<div
										class="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 focus-within:border-primary-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-600/20"
									>
										<span class="font-mono text-xs text-slate-400">linkpulse.io/s/</span>
										<input
											id="vanity-slug"
											type="text"
											bind:value={demoSlug}
											class="w-full bg-transparent font-mono text-xs font-semibold text-primary-600 focus:outline-hidden sm:text-sm"
											placeholder="my-link"
										/>
									</div>
								</div>

								<div>
									<label
										for="link-expiration"
										class="mb-1.5 block font-mono text-xs font-medium text-slate-700"
									>
										TTL / Link Expiration
									</label>
									<div
										class="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5"
									>
										<Timer class="mr-2 h-4 w-4 shrink-0 text-slate-400" />
										<select
											id="link-expiration"
											bind:value={demoExpiresIn}
											class="w-full bg-transparent font-mono text-xs text-slate-800 focus:outline-hidden sm:text-sm"
										>
											<option value="24h">24 Hours (Temporary)</option>
											<option value="7d">7 Days (Campaign)</option>
											<option value="30d">30 Days (Standard)</option>
											<option value="never">Never (Permanent 301)</option>
										</select>
									</div>
								</div>
							</div>

							<!-- UTM Presets -->
							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label
										for="utm-source"
										class="mb-1.5 block font-mono text-xs font-medium text-slate-700"
									>
										UTM Source
									</label>
									<input
										id="utm-source"
										type="text"
										bind:value={demoUtmSource}
										class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 font-mono text-xs text-slate-800 focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/20 focus:outline-hidden"
										placeholder="twitter, newsletter, producthunt"
									/>
								</div>
								<div>
									<label
										for="utm-campaign"
										class="mb-1.5 block font-mono text-xs font-medium text-slate-700"
									>
										UTM Campaign
									</label>
									<input
										id="utm-campaign"
										type="text"
										bind:value={demoUtmCampaign}
										class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 font-mono text-xs text-slate-800 focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/20 focus:outline-hidden"
										placeholder="spring_sale_2026"
									/>
								</div>
							</div>
						</div>
					</div>

					<!-- Compiled Output Card -->
					<div class="rounded-2xl border border-primary-200/80 bg-primary-50/40 p-5">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold text-primary-700">
								Compiled Short Link Payload
							</span>
							<button
								type="button"
								onclick={copyUrl}
								class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-2xs transition hover:bg-slate-100 hover:text-slate-900"
							>
								{#if copied}
									<Check class="h-3.5 w-3.5 text-emerald-600" />
									<span class="text-emerald-600">Copied!</span>
								{:else}
									<Copy class="h-3.5 w-3.5 text-slate-500" />
									<span>Copy Link</span>
								{/if}
							</button>
						</div>
						<div
							class="mt-2 rounded-xl border border-primary-200 bg-white p-3 font-mono text-xs break-all text-slate-900 shadow-2xs sm:text-sm"
						>
							{fullGeneratedUrl}
						</div>
					</div>
				</div>

				<!-- Right: Architectural Highlights -->
				<div class="space-y-5 lg:col-span-5">
					<div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
						<h3 class="font-sans text-base font-bold text-slate-900">Routing Capabilities</h3>
						<p class="mt-1 text-xs text-slate-500">
							Architected for deterministic performance and zero packet loss under traffic spikes.
						</p>

						<div class="mt-6 space-y-4">
							<div class="flex items-start gap-3">
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
								>
									<Zap class="h-4 w-4" />
								</div>
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Sub-2ms Redis Cache Layer
									</h4>
									<p class="mt-0.5 text-xs text-slate-600">
										Short links are pre-warmed in distributed memory for immediate 301/302
										redirects.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600"
								>
									<ShieldCheck class="h-4 w-4" />
								</div>
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Collision-Resistant Base62
									</h4>
									<p class="mt-0.5 text-xs text-slate-600">
										Cryptographic snowflake tokens guarantee unique slugs across billions of
										records.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600"
								>
									<QrCode class="h-4 w-4" />
								</div>
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Dynamic QR Vectorization
									</h4>
									<p class="mt-0.5 text-xs text-slate-600">
										Every short URL instantly generates scannable high-DPI vectors for physical
										media.
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- cURL Example snippet -->
					<div class="rounded-2xl border border-slate-900 bg-slate-950 p-5 text-white shadow-md">
						<div class="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
							<span>API Quickstart</span>
							<span class="text-emerald-400">POST /api/v1/urls</span>
						</div>
						<pre class="overflow-x-auto font-mono text-[11px] leading-relaxed text-slate-300"><code
								>{`curl -X POST https://api.linkpulse.io/v1/urls \\
  -H "Authorization: Bearer lp_live_***" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "${demoDestination}",
    "slug": "${demoSlug}",
    "ttl": "${demoExpiresIn}"
  }'`}</code
							></pre>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer Navigation -->
	<section class="border-t border-slate-200/80 bg-slate-50 py-12">
		<div
			class="mx-auto flex max-w-300 flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8"
		>
			<a
				href={resolve('/features/analytics')}
				class="inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary-600 transition hover:text-primary-700"
			>
				<span>Next: Explore Real-Time Analytics</span>
				<ArrowRight class="h-4 w-4" />
			</a>
			<a
				href={resolve('/')}
				class="font-mono text-xs text-slate-500 transition hover:text-slate-900"
			>
				&larr; Back to Home
			</a>
		</div>
	</section>
</div>
