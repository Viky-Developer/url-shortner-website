<script lang="ts">
	import { Hash, Gauge, BarChart3, Laptop } from 'lucide-svelte';
</script>

<section class="w-full py-16 sm:py-24">
	<div class="mx-auto max-w-300 space-y-12 px-4 sm:px-8">
		<!-- Section Header -->
		<div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
			<div class="max-w-xl space-y-2">
				<span class="font-mono text-xs font-semibold tracking-widest text-primary-600 uppercase"
					>Core Capabilities</span
				>
				<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Deterministic Link Engineering
				</h2>
			</div>
			<div class="font-mono text-xs text-slate-500">
				System Protocol v1.4.0 • Zero-Downtime Migration
			</div>
		</div>

		<!-- 4 Asymmetric Cards Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
			<!-- Feature 1: Base62 Tokenization (7 cols) -->
			<div
				class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-primary-300 sm:p-8 md:col-span-7"
			>
				<div class="space-y-4">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600"
					>
						<Hash class="h-5 w-5" />
					</div>
					<h3 class="text-xl font-bold text-slate-900">Base62 Collision-Resistant Tokenization</h3>
					<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
						Rather than relying on naive pseudo-random strings, LinkPulse computes monotonic
						distributed sequences converted to base62 alphabet (<code
							class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800"
							>[0-9a-zA-Z]</code
						>). Guarantees uniform URL lengths, prevents enumeration attacks, and avoids database
						unique index collision churn.
					</p>
				</div>

				<!-- Code Block Preview -->
				<div
					class="space-y-2 rounded-xl border border-slate-200/80 bg-slate-50 p-4 font-mono text-xs text-slate-800"
				>
					<div class="text-[11px] text-slate-400">// Base62 Encoding Primitive</div>
					<div class="flex flex-wrap items-center justify-between gap-2">
						<span class="font-semibold text-primary-700">encode(10892348123)</span>
						<span class="font-semibold text-accent-emerald">→ "x9A7qZ" (6 chars)</span>
					</div>
				</div>
			</div>

			<!-- Feature 2: Sub-5ms P99 Routing (5 cols) -->
			<div
				class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-primary-300 sm:p-8 md:col-span-5"
			>
				<div class="space-y-4">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-accent-emerald"
					>
						<Gauge class="h-5 w-5" />
					</div>
					<h3 class="text-xl font-bold text-slate-900">Sub-5ms P99 Routing API</h3>
					<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
						HTTP handlers are kept completely allocation-free along the hot redirect path. Every
						request serves direct redirects from Redis cache without waiting on database locks.
					</p>
				</div>

				<!-- Telemetry Status Box -->
				<div
					class="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4"
				>
					<span class="relative flex h-3 w-3 shrink-0">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
						></span>
						<span class="relative inline-flex h-3 w-3 rounded-full bg-accent-emerald"></span>
					</span>
					<div class="font-mono text-xs text-slate-700">
						Average P99: <span class="font-bold text-slate-900">1.82ms</span> under 50k req/sec
					</div>
				</div>
			</div>

			<!-- Feature 3: Non-Blocking Telemetry (6 cols) -->
			<div
				class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-primary-300 sm:p-8 md:col-span-6"
			>
				<div class="space-y-4">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600"
					>
						<BarChart3 class="h-5 w-5" />
					</div>
					<h3 class="text-xl font-bold text-slate-900">Non-Blocking Click Telemetry</h3>
					<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
						User-agent decomposition, country level IP resolution, and UTM parameter capture are
						offloaded to background Go routines. Telemetry ingestion never delays the visitor
						redirect response.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 pt-2">
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						City / Country Geolocation
					</span>
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						Referrer Source
					</span>
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						Device Category
					</span>
				</div>
			</div>

			<!-- Feature 4: Multi-Device Sessions (6 cols) -->
			<div
				class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-primary-300 sm:p-8 md:col-span-6"
			>
				<div class="space-y-4">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600"
					>
						<Laptop class="h-5 w-5" />
					</div>
					<h3 class="text-xl font-bold text-slate-900">Multi-Device &amp; Conflict Mitigation</h3>
					<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
						Session synchronization incorporates optimistic concurrency control with HTTP 409
						Conflict mitigation. Prevents race conditions during simultaneous vanity slug creation
						across multiple team windows.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 pt-2">
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						Atomic CAS Operations
					</span>
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						Multi-Session Invalidation
					</span>
					<span
						class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700"
					>
						Audit Logging
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
