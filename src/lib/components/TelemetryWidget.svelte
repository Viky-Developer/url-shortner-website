<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { Activity, ShieldCheck, Settings, TrendingUp } from 'lucide-svelte';

	// ─── Types ──────────────────────────────────────────────────────────────────

	interface GeoRegion {
		flag: string;
		label: string;
		code: string;
		pct: number;
		color: 'indigo' | 'emerald';
	}

	interface TelemetryData {
		clicksToday: number;
		clicksDelta: number; // percent, positive = up
		cacheHitRate: number; // 0-100
		cacheP99ms: number;
		botsBlocked: number;
		p99LatencyMs: number;
		hourlyBars: number[]; // 24 values (index = hour)
		geo: GeoRegion[];
	}

	// ─── Env ────────────────────────────────────────────────────────────────────

	const PROM_URL: string = env.PUBLIC_PROMETHEUS_URL ?? '';
	const hasPrometheus = PROM_URL.length > 0;

	// ─── State ──────────────────────────────────────────────────────────────────

	let liveMode = $state(true);
	let loading = $state(true);
	let data = $state<TelemetryData | null>(null);
	let hoveredBar = $state<number | null>(null);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	// ─── Prometheus helpers ──────────────────────────────────────────────────────

	async function promQuery(query: string, time?: string): Promise<number> {
		const url = new URL(`${PROM_URL}/api/v1/query`);
		url.searchParams.set('query', query);
		if (time) url.searchParams.set('time', time);
		const res = await fetch(url.toString());
		if (!res.ok) throw new Error(`Prometheus ${res.status}`);
		const json = await res.json();
		const val = json?.data?.result?.[0]?.value?.[1];
		return val != null ? parseFloat(val) : 0;
	}

	async function promRangeQuery(
		query: string,
		start: string,
		end: string,
		step: string
	): Promise<number[]> {
		const url = new URL(`${PROM_URL}/api/v1/query_range`);
		url.searchParams.set('query', query);
		url.searchParams.set('start', start);
		url.searchParams.set('end', end);
		url.searchParams.set('step', step);
		const res = await fetch(url.toString());
		if (!res.ok) throw new Error(`Prometheus ${res.status}`);
		const json = await res.json();
		const values: number[] = (json?.data?.result?.[0]?.values ?? []).map((v: [number, string]) =>
			parseFloat(v[1])
		);
		// Pad or trim to exactly 24 buckets
		while (values.length < 24) values.unshift(0);
		return values.slice(-24);
	}

	// ─── Fetch ───────────────────────────────────────────────────────────────────

	async function fetchMetrics(): Promise<void> {
		if (!hasPrometheus) {
			loading = false;
			return;
		}

		try {
			const now = Math.floor(Date.now() / 1000);
			const h24Ago = now - 86400;
			const nowIso = new Date(now * 1000).toISOString();
			const h24Iso = new Date(h24Ago * 1000).toISOString();

			const [
				clicksToday,
				clicksPrev,
				cacheHit,
				cacheMiss,
				cacheP99ms,
				botsBlocked,
				p99Latency,
				hourlyRaw,
				geoUS,
				geoEU,
				geoAP
			] = await Promise.all([
				promQuery('increase(linkpulse_redirects_total[24h])', nowIso),
				promQuery('increase(linkpulse_redirects_total[24h])', h24Iso),
				promQuery('increase(redis_keyspace_hits_total[24h])', nowIso),
				promQuery('increase(redis_keyspace_misses_total[24h])', nowIso),
				promQuery(
					'histogram_quantile(0.99, rate(redis_command_duration_seconds_bucket[5m])) * 1000'
				),
				promQuery('increase(linkpulse_bots_blocked_total[24h])', nowIso),
				promQuery(
					'histogram_quantile(0.99, rate(linkpulse_redirect_duration_seconds_bucket[5m])) * 1000'
				),
				promRangeQuery('increase(linkpulse_redirects_total[1h])', h24Iso, nowIso, '3600'),
				promQuery('increase(linkpulse_redirects_total{region="us"}[24h])', nowIso),
				promQuery('increase(linkpulse_redirects_total{region="eu"}[24h])', nowIso),
				promQuery('increase(linkpulse_redirects_total{region="ap"}[24h])', nowIso)
			]);

			const totalGeo = geoUS + geoEU + geoAP || 1;
			const cacheHitRate = (cacheHit / (cacheHit + cacheMiss || 1)) * 100;
			const clicksDelta = clicksPrev > 0 ? ((clicksToday - clicksPrev) / clicksPrev) * 100 : 0;

			data = {
				clicksToday: Math.round(clicksToday),
				clicksDelta: parseFloat(clicksDelta.toFixed(1)),
				cacheHitRate: parseFloat(cacheHitRate.toFixed(2)),
				cacheP99ms: parseFloat(cacheP99ms.toFixed(2)),
				botsBlocked: Math.round(botsBlocked),
				p99LatencyMs: parseFloat(p99Latency.toFixed(1)),
				hourlyBars: hourlyRaw,
				geo: [
					{
						flag: '🇺🇸',
						label: 'United States',
						code: 'US',
						pct: Math.round((geoUS / totalGeo) * 100),
						color: 'indigo'
					},
					{
						flag: '🇪🇺',
						label: 'Europe (Frankfurt)',
						code: 'EU',
						pct: Math.round((geoEU / totalGeo) * 100),
						color: 'indigo'
					},
					{
						flag: '🇸🇬',
						label: 'Asia-Pacific (APAC)',
						code: 'SG',
						pct: Math.round((geoAP / totalGeo) * 100),
						color: 'emerald'
					}
				]
			};
		} catch (e) {
			console.error('[TelemetryWidget] fetch failed:', e);
		} finally {
			loading = false;
		}
	}

	function startPolling(): void {
		fetchMetrics();
		const interval = liveMode ? 15_000 : 30_000;
		intervalId = setInterval(fetchMetrics, interval);
	}

	function stopPolling(): void {
		if (intervalId != null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	function toggleMode(live: boolean): void {
		if (liveMode === live) return;
		liveMode = live;
		stopPolling();
		loading = true;
		data = null;
		startPolling();
	}

	onMount(() => {
		startPolling();
	});

	onDestroy(() => {
		stopPolling();
	});

	// ─── Derived helpers ─────────────────────────────────────────────────────────

	const maxBar = $derived(data ? Math.max(...data.hourlyBars, 1) : 1);

	function barHeight(val: number): number {
		return Math.max(4, Math.round((val / maxBar) * 100));
	}

	function fmtNum(n: number): string {
		if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
		if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
		return n.toString();
	}

	const hours = Array.from({ length: 24 }, (_, i) => i);
	const peakHour = $derived(data ? data.hourlyBars.indexOf(Math.max(...data.hourlyBars)) : 12);
</script>

<section class="w-full bg-slate-50/80 py-10 sm:py-14">
	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<!-- Widget Card -->
		<div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg">
			<!-- ─── Card Header ─────────────────────────────────────────────── -->
			<div
				class="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
			>
				<div class="flex items-center gap-3">
					<div
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-fixed"
					>
						<Activity class="h-4 w-4 text-primary-600" />
					</div>
					<div>
						<h2 class="font-sans text-sm font-semibold text-slate-900 sm:text-base">
							Link Telemetry &amp; Real-Time Ingestion
						</h2>
						<p class="font-mono text-[11px] text-slate-400">
							Global stream for svk-demo &bull; Direct edge sync
						</p>
					</div>
				</div>

				<div class="flex shrink-0 items-center gap-2">
					<div class="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5">
						<button
							type="button"
							onclick={() => toggleMode(false)}
							class="rounded-md px-3 py-1 font-mono text-xs font-medium transition-colors {!liveMode
								? 'bg-white text-slate-900 shadow-sm'
								: 'text-slate-500 hover:text-slate-700'}"
						>
							Past 24 Hours
						</button>
						<button
							type="button"
							onclick={() => toggleMode(true)}
							class="flex items-center gap-1.5 rounded-md px-3 py-1 font-mono text-xs font-medium transition-colors {liveMode
								? 'bg-primary-600 text-white shadow-sm'
								: 'text-slate-500 hover:text-slate-700'}"
						>
							{#if liveMode}
								<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
							{/if}
							Live
						</button>
					</div>
				</div>
			</div>

			<!-- ─── KPI Row ────────────────────────────────────────────────── -->
			<div
				class="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
			>
				<!-- Clicks Today -->
				<div class="px-5 py-5 sm:px-6">
					<div class="mb-2 flex items-center justify-between">
						<span class="font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase"
							>Clicks Today</span
						>
						<div class="rounded bg-emerald-50 p-1">
							<TrendingUp class="h-3.5 w-3.5 text-accent-emerald" />
						</div>
					</div>
					{#if loading || !data}
						<div class="h-8 w-28 animate-pulse rounded bg-slate-100"></div>
						<div class="mt-1.5 h-3 w-36 animate-pulse rounded bg-slate-100"></div>
					{:else}
						<div class="font-mono text-3xl font-bold tracking-tight text-slate-900">
							{fmtNum(data.clicksToday)}
						</div>
						<p
							class="mt-0.5 font-mono text-xs {data.clicksDelta >= 0
								? 'text-accent-emerald'
								: 'text-rose-500'}"
						>
							{data.clicksDelta >= 0 ? '+' : ''}{data.clicksDelta}% vs previous cycle
						</p>
					{/if}
				</div>

				<!-- Redis Cache Hit Rate -->
				<div class="px-5 py-5 sm:px-6">
					<div class="mb-2 flex items-center justify-between">
						<span class="font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase"
							>Redis Cache Hit Rate</span
						>
						<div class="rounded bg-primary-fixed p-1">
							<Settings class="h-3.5 w-3.5 text-primary-600" />
						</div>
					</div>
					{#if loading || !data}
						<div class="h-8 w-24 animate-pulse rounded bg-slate-100"></div>
						<div class="mt-1.5 h-3 w-32 animate-pulse rounded bg-slate-100"></div>
					{:else}
						<div class="font-mono text-3xl font-bold tracking-tight text-primary-600">
							{data.cacheHitRate.toFixed(2)}%
						</div>
						<p class="mt-0.5 font-mono text-xs text-slate-400">
							Average P99: {data.cacheP99ms}ms
						</p>
					{/if}
				</div>

				<!-- Bot Shield Status -->
				<div class="px-5 py-5 sm:px-6">
					<div class="mb-2 flex items-center justify-between">
						<span class="font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase"
							>Bot Shield Status</span
						>
						<div class="rounded bg-emerald-50 p-1">
							<ShieldCheck class="h-3.5 w-3.5 text-accent-emerald" />
						</div>
					</div>
					{#if loading || !data}
						<div class="h-8 w-24 animate-pulse rounded bg-slate-100"></div>
						<div class="mt-1.5 h-3 w-40 animate-pulse rounded bg-slate-100"></div>
					{:else}
						<div class="font-sans text-3xl font-bold tracking-tight text-slate-900">Filtered</div>
						<p class="mt-0.5 font-mono text-xs text-slate-400">
							{fmtNum(data.botsBlocked)} crawlers discarded
						</p>
					{/if}
				</div>
			</div>

			<!-- ─── Charts Row ─────────────────────────────────────────────── -->
			<div
				class="grid grid-cols-1 divide-y divide-slate-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
			>
				<!-- Hourly Click Distribution (2/3 width) -->
				<div class="col-span-1 px-5 py-5 sm:px-6 lg:col-span-2">
					<div class="mb-4 flex items-center justify-between">
						<span
							class="font-mono text-[11px] font-semibold tracking-widest text-slate-400 uppercase"
							>Hourly Click Distribution</span
						>
						<span class="font-mono text-[11px] text-slate-300">Timezone UTC</span>
					</div>

					{#if loading || !data}
						<!-- Skeleton bars -->
						<div class="flex h-28 items-end gap-0.5">
							{#each hours as _h (_h)}
								<div
									class="flex-1 animate-pulse rounded-t bg-slate-100"
									style="height: {20 + Math.floor(Math.random() * 60)}%"
								></div>
							{/each}
						</div>
					{:else}
						<div class="group relative flex h-28 items-end gap-px">
							{#each hours as h (h)}
								{@const pct = barHeight(data.hourlyBars[h])}
								{@const isPeak = h === peakHour}
								<button
									type="button"
									class="relative flex-1 cursor-default rounded-t transition-colors duration-100 {isPeak
										? 'bg-primary-600'
										: 'bg-primary-fixed hover:bg-primary-container'}"
									style="height: {pct}%"
									onmouseenter={() => (hoveredBar = h)}
									onmouseleave={() => (hoveredBar = null)}
									aria-label="Hour {h.toString().padStart(2, '0')}:00 — {fmtNum(
										data.hourlyBars[h]
									)} clicks"
								>
									<!-- Tooltip -->
									{#if hoveredBar === h}
										<div
											class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 whitespace-nowrap shadow-lg"
										>
											<p class="font-mono text-[10px] font-semibold text-slate-900">
												{h.toString().padStart(2, '0')}:00{isPeak ? ' (Peak)' : ''}
											</p>
											<p class="font-mono text-[10px] text-primary-600">
												{fmtNum(data.hourlyBars[h])} clicks
											</p>
										</div>
									{/if}
								</button>
							{/each}
						</div>

						<!-- X-axis labels -->
						<div class="mt-1.5 flex justify-between">
							<span class="font-mono text-[10px] text-slate-300">00:00</span>
							<span class="font-mono text-[10px] text-slate-400"
								>{peakHour.toString().padStart(2, '0')}:00 (Peak)</span
							>
							<span class="font-mono text-[10px] text-slate-300">23:59</span>
						</div>
					{/if}
				</div>

				<!-- Geographic Origins (1/3 width) -->
				<div class="col-span-1 px-5 py-5 sm:px-6">
					<span
						class="mb-4 block font-mono text-[11px] font-semibold tracking-widest text-slate-400 uppercase"
						>Geographic Origins</span
					>

					{#if loading || !data}
						<div class="space-y-4">
							{#each [1, 2, 3] as _k (_k)}
								<div>
									<div class="mb-1 flex justify-between">
										<div class="h-3 w-28 animate-pulse rounded bg-slate-100"></div>
										<div class="h-3 w-8 animate-pulse rounded bg-slate-100"></div>
									</div>
									<div class="h-1.5 w-full animate-pulse rounded-full bg-slate-100"></div>
								</div>
							{/each}
						</div>
					{:else}
						<div class="space-y-4">
							{#each data.geo as region (region.code)}
								<div>
									<div class="mb-1.5 flex items-center justify-between">
										<span class="font-sans text-xs text-slate-700">
											<span class="mr-1 font-mono text-[10px] text-slate-400">{region.code}</span>
											{region.flag}
											{region.label}
										</span>
										<span
											class="font-mono text-xs font-semibold {region.color === 'emerald'
												? 'text-accent-emerald'
												: 'text-primary-600'}"
										>
											{region.pct}%
										</span>
									</div>
									<div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
										<div
											class="h-full rounded-full transition-all duration-700 {region.color ===
											'emerald'
												? 'bg-accent-emerald'
												: 'bg-primary-600'}"
											style="width: {region.pct}%"
										></div>
									</div>
								</div>
							{/each}

							<!-- P99 Edge Latency -->
							<div class="mt-5 border-t border-slate-100 pt-4">
								<div class="flex items-center justify-between">
									<span class="font-mono text-[11px] text-slate-400">P99 Edge Latency</span>
									<span
										class="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-teal-700"
									>
										{data.p99LatencyMs}ms
									</span>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- ─── No-Prometheus Banner ───────────────────────────────────── -->
			{#if !hasPrometheus}
				<div class="border-t border-slate-100 bg-amber-50/60 px-5 py-3 sm:px-6">
					<p class="font-mono text-[11px] text-amber-700">
						⚡ Set <code class="rounded bg-amber-100 px-1 py-0.5 text-amber-800"
							>PUBLIC_PROMETHEUS_URL</code
						>
						in your <code class="rounded bg-amber-100 px-1 py-0.5 text-amber-800">.env</code> to connect
						real telemetry data.
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
