<script lang="ts">
	import { resolve } from '$app/paths';
	import { Activity, Globe, Laptop, ArrowRight, ChevronRight, Sparkles, Cpu } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Real-Time Telemetry & Click Analytics | LinkPulse</title>
	<meta
		name="description"
		content="Monitor real-time clicks, geographic ingress, referrers, device architectures, operating systems, and Prometheus exporters with LinkPulse telemetry."
	/>
</svelte:head>

<div class="flex w-full flex-col bg-surface">
	<!-- Hero Header -->
	<section
		class="relative overflow-hidden border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20"
	>
		<div
			class="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-160 -translate-x-1/2 bg-linear-to-b from-indigo-200/50 via-surface-variant/20 to-transparent blur-3xl"
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
				<span class="font-medium text-slate-900">Telemetry &amp; Analytics</span>
			</nav>

			<div class="max-w-3xl space-y-4">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 font-mono text-xs font-semibold text-indigo-700"
				>
					<Sparkles class="h-3.5 w-3.5 text-indigo-600" />
					<span>Zero-Overhead Event Streaming</span>
				</div>
				<h1 class="font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
					Real-time telemetry without redirect degradation.
				</h1>
				<p class="text-base leading-relaxed text-slate-600 sm:text-lg">
					Asynchronous ring buffers ingest click events, geo-origins, and referrers into time-series
					storage without delaying the initial user HTTP redirect handshake.
				</p>
			</div>
		</div>
	</section>

	<!-- Live Telemetry Matrix -->
	<section class="py-12 sm:py-16">
		<div class="mx-auto max-w-300 px-4 sm:px-8">
			<!-- 3 KPI Feature Cards -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-accent-emerald"
					>
						<Activity class="h-5 w-5" />
					</div>
					<h3 class="font-sans text-base font-bold text-slate-900">Non-Blocking Event Bus</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
						Click logs are pushed to lock-free Go channels and written in micro-batches to
						PostgreSQL, maintaining sub-2ms redirect execution.
					</p>
					<div class="mt-4 border-t border-slate-100 pt-3 font-mono text-xs text-emerald-600">
						P99 Ingestion: &lt; 0.4ms
					</div>
				</div>

				<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"
					>
						<Globe class="h-5 w-5" />
					</div>
					<h3 class="font-sans text-base font-bold text-slate-900">
						Edge Geo-Ingress &amp; IP Shield
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
						Resolves autonomous system numbers (ASN) and country origins with GDPR-compliant IP
						hashing and automated bot filtering.
					</p>
					<div class="mt-4 border-t border-slate-100 pt-3 font-mono text-xs text-indigo-600">
						Zero PII Storage
					</div>
				</div>

				<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600"
					>
						<Cpu class="h-5 w-5" />
					</div>
					<h3 class="font-sans text-base font-bold text-slate-900">Native Prometheus Exporter</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
						Scrape metrics directly at <code>/metrics</code> for Grafana dashboards, alerting pipelines,
						and cluster auto-scaling.
					</p>
					<div class="mt-4 border-t border-slate-100 pt-3 font-mono text-xs text-purple-600">
						Prometheus v2.x Ready
					</div>
				</div>
			</div>

			<!-- Technical Deep Dive Grid -->
			<div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
				<!-- Device & Client Breakdown Sample -->
				<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center gap-2">
							<Laptop class="h-4 w-4 text-slate-500" />
							<h4 class="font-sans text-sm font-bold text-slate-900">
								Client &amp; OS Breakdown Matrix
							</h4>
						</div>
						<span class="font-mono text-xs text-slate-400">Live Samples</span>
					</div>

					<div class="space-y-3.5 pt-2">
						<div>
							<div class="flex justify-between font-mono text-xs">
								<span class="text-slate-700">Desktop (macOS / Linux / Windows)</span>
								<span class="font-semibold text-slate-900">62.4%</span>
							</div>
							<div class="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
								<div class="h-full rounded-full bg-primary-600" style="width: 62.4%"></div>
							</div>
						</div>

						<div>
							<div class="flex justify-between font-mono text-xs">
								<span class="text-slate-700">Mobile (iOS / Android)</span>
								<span class="font-semibold text-slate-900">31.8%</span>
							</div>
							<div class="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
								<div class="h-full rounded-full bg-accent-emerald" style="width: 31.8%"></div>
							</div>
						</div>

						<div>
							<div class="flex justify-between font-mono text-xs">
								<span class="text-slate-700">API Headless / Webhook Handshake</span>
								<span class="font-semibold text-slate-900">5.8%</span>
							</div>
							<div class="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
								<div class="h-full rounded-full bg-accent-purple" style="width: 5.8%"></div>
							</div>
						</div>
					</div>
				</div>

				<!-- REST Analytics Endpoint Code -->
				<div class="rounded-2xl border border-slate-900 bg-slate-950 p-6 text-white shadow-md">
					<div class="mb-3 flex items-center justify-between font-mono text-xs text-slate-400">
						<span>Analytics API</span>
						<span class="text-emerald-400">{'GET /api/v1/urls/{id}/analytics'}</span>
					</div>
					<pre class="overflow-x-auto font-mono text-xs leading-relaxed text-slate-300"><code
							>{`{
  "slug": "launch-2026",
  "total_clicks": 14289,
  "unique_visitors": 11840,
  "cache_hit_rate": 0.9998,
  "p99_latency_ms": 1.84,
  "geo_breakdown": {
    "US": 6858,
    "EU": 4429,
    "APAC": 3002
  }
}`}</code
						></pre>
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
				href={resolve('/features/management')}
				class="inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary-600 transition hover:text-primary-700"
			>
				<span>Next: Explore Link Management</span>
				<ArrowRight class="h-4 w-4" />
			</a>
			<a
				href={resolve('/features/routing')}
				class="font-mono text-xs text-slate-500 transition hover:text-slate-900"
			>
				&larr; Previous: URL Routing
			</a>
		</div>
	</section>
</div>
