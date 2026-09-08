<script lang="ts">
	import { Globe, Zap, ArrowDown, GitFork, ShieldCheck } from 'lucide-svelte';
</script>

<section class="relative w-full overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24">
	<!-- Top Ambient Aura -->
	<div
		class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-3xl -translate-x-1/2 rounded-full bg-linear-to-b from-primary-200/50 via-primary-100/20 to-transparent blur-3xl"
	></div>

	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Left Column: Story & Metrics -->
			<div class="space-y-6 lg:col-span-7">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-700 shadow-sm"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-primary-600"></span>
					</span>
					<span>About LinkPulse</span>
				</div>

				<h1
					class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1]"
				>
					Built for Fast, <span class="text-primary-600">Reliable</span> Link Management
				</h1>

				<p class="text-base leading-relaxed text-slate-600 sm:text-lg">
					LinkPulse was conceived to address a pervasive flaw in modern link management: sluggish
					HTTP 301/302 redirects weighed down by cumbersome legacy middleware and opaque tracking
					scripts. Every redundant redirect hop forfeits conversions and degrades user trust.
				</p>

				<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
					We rebuilt URL shortener mechanics from the byte up. Engineered specifically for <strong
						class="font-semibold text-slate-900"
						>indie hackers, high-scale startups, growth marketers, and infrastructure engineers</strong
					>, LinkPulse delivers deterministic base62 routing, sub-millisecond in-memory lookups, and
					uncompromising clickstream observability without storing invasive consumer cookies.
				</p>

				<!-- Metrics Row -->
				<div class="flex flex-wrap items-center gap-6 pt-4 sm:gap-10">
					<div class="flex flex-col">
						<span class="font-mono text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
							>&lt; 2ms</span
						>
						<span class="font-mono text-xs tracking-wider text-slate-500 uppercase"
							>P99 Edge Routing</span
						>
					</div>
					<div class="h-10 w-px bg-slate-200"></div>
					<div class="flex flex-col">
						<span class="font-mono text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
							>0 ms</span
						>
						<span class="font-mono text-xs tracking-wider text-slate-500 uppercase"
							>Cold-Start Overhead</span
						>
					</div>
					<div class="h-10 w-px bg-slate-200"></div>
					<div class="flex flex-col">
						<span
							class="font-mono text-2xl font-bold tracking-tight text-accent-emerald sm:text-3xl"
							>100%</span
						>
						<span class="font-mono text-xs tracking-wider text-slate-500 uppercase"
							>Open Specification</span
						>
					</div>
				</div>
			</div>

			<!-- Right Column: Visual Architecture Pipeline Card -->
			<div class="relative lg:col-span-5">
				<div
					class="relative space-y-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-xl sm:p-8"
				>
					<!-- Window Header -->
					<div class="flex items-center justify-between border-b border-slate-100 pb-4">
						<div class="flex items-center gap-1.5">
							<span class="bg-accent-rose h-3 w-3 rounded-full"></span>
							<span class="h-3 w-3 rounded-full bg-amber-400"></span>
							<span class="h-3 w-3 rounded-full bg-accent-emerald"></span>
						</div>
						<span class="font-mono text-xs text-slate-400">linkpulse-core.internal</span>
					</div>

					<!-- Pipeline Steps -->
					<div class="space-y-3 font-mono text-xs text-slate-700">
						<!-- Step 1: Ingress -->
						<div
							class="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50 p-3.5 shadow-sm"
						>
							<div class="flex items-center gap-2.5">
								<Globe class="h-4 w-4 text-primary-600" />
								<span class="font-semibold text-slate-900">GET /go/launch-q1</span>
							</div>
							<span
								class="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-bold text-accent-emerald"
								>HTTP 307</span
							>
						</div>

						<!-- Connector 1 -->
						<div class="flex justify-center py-0.5 text-slate-400">
							<ArrowDown class="h-4 w-4 animate-bounce" />
						</div>

						<!-- Step 2: Cache Hit -->
						<div
							class="flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5 shadow-sm"
						>
							<div class="flex items-center gap-2.5">
								<Zap class="h-4 w-4 fill-amber-500 text-amber-500" />
								<span class="font-semibold text-slate-900">Redis L1 Cache Hit</span>
							</div>
							<span class="rounded bg-primary-600 px-2 py-0.5 font-bold text-white">0.82ms</span>
						</div>

						<!-- Connector 2 -->
						<div class="flex justify-center py-0.5 text-slate-400">
							<GitFork class="h-4 w-4" />
						</div>

						<!-- Step 3: Async Split Workers -->
						<div class="grid grid-cols-2 gap-2.5">
							<div
								class="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm"
							>
								<span class="h-2 w-2 rounded-full bg-accent-emerald"></span>
								<span class="truncate font-sans text-xs font-medium text-slate-700"
									>Worker: GeoIP2</span
								>
							</div>
							<div
								class="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm"
							>
								<span class="h-2 w-2 rounded-full bg-accent-purple"></span>
								<span class="truncate font-sans text-xs font-medium text-slate-700"
									>Async Telemetry</span
								>
							</div>
						</div>
					</div>

					<!-- Card Footer -->
					<div
						class="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500"
					>
						<span class="flex items-center gap-1.5 font-medium text-slate-700">
							<ShieldCheck class="h-4 w-4 text-accent-emerald" />
							SHA256 Token Auth
						</span>
						<span class="font-mono text-[11px] text-slate-400">rev: 7f94c2e</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
