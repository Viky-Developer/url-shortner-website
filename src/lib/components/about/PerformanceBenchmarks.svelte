<script lang="ts">
</script>

<section class="w-full border-y border-slate-200/80 bg-slate-50/80 py-16 sm:py-24">
	<div class="mx-auto max-w-300 space-y-12 px-4 sm:px-8">
		<!-- Section Header -->
		<div class="space-y-3">
			<span class="font-mono text-xs font-semibold tracking-widest text-primary-600 uppercase"
				>Deterministic Performance</span
			>
			<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
				Real Benchmark Telemetry
			</h2>
			<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
				Benchmarked using <code
					class="rounded bg-slate-200/60 px-1.5 py-0.5 font-mono text-xs text-slate-800">wrk</code
				>
				with 10,000 concurrent HTTP keep-alive connections on standard c6i.xlarge instances.
			</p>
		</div>

		<!-- Benchmark Card Container -->
		<div
			class="space-y-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"
		>
			<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
				<!-- Left Column: Comparative Bar Chart (8 cols) -->
				<div class="space-y-6 lg:col-span-8">
					<!-- Item 1: LinkPulse -->
					<div class="space-y-2">
						<div class="flex items-center justify-between text-sm">
							<span class="flex items-center gap-2 font-bold text-slate-900">
								<span class="h-2.5 w-2.5 rounded-full bg-primary-600"></span>
								LinkPulse (Go + Redis Engine)
							</span>
							<span class="font-mono text-sm font-bold text-primary-600">1.8 ms</span>
						</div>
						<div class="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
							<div
								class="h-full rounded-full bg-primary-600 transition-all duration-500"
								style="width: 5%; min-width: 2.5rem;"
							></div>
						</div>
						<div class="font-mono text-xs text-slate-500">
							Sub-millisecond memory cache resolution with asynchronous hit logging
						</div>
					</div>

					<!-- Item 2: Node.js Express -->
					<div class="space-y-2">
						<div class="flex items-center justify-between text-sm">
							<span class="flex items-center gap-2 font-medium text-slate-700">
								<span class="h-2.5 w-2.5 rounded-full bg-slate-400"></span>
								Node.js / Express Shortener (Standard Setup)
							</span>
							<span class="font-mono text-sm font-medium text-slate-700">28.4 ms</span>
						</div>
						<div class="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
							<div
								class="h-full rounded-full bg-slate-400 transition-all duration-500"
								style="width: 48%;"
							></div>
						</div>
						<div class="font-mono text-xs text-slate-500">
							Middleware overhead, synchronous connection pooling delay
						</div>
					</div>

					<!-- Item 3: Commercial Legacy SaaS -->
					<div class="space-y-2">
						<div class="flex items-center justify-between text-sm">
							<span class="flex items-center gap-2 font-medium text-slate-700">
								<span class="bg-accent-rose h-2.5 w-2.5 rounded-full"></span>
								Industry Legacy Commercial Tools (Cloudflare / Edge Proxy)
							</span>
							<span class="font-mono text-sm font-medium text-slate-700">48.2 ms</span>
						</div>
						<div class="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
							<div
								class="bg-accent-rose/70 h-full rounded-full transition-all duration-500"
								style="width: 85%;"
							></div>
						</div>
						<div class="font-mono text-xs text-slate-500">
							Bloated tracking scripts, multiple intermediate redirect chains, ad-tech cookies
						</div>
					</div>
				</div>

				<!-- Right Column: Highlight Stats Box (4 cols) -->
				<div
					class="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 sm:p-8 lg:col-span-4"
				>
					<div class="space-y-1">
						<span class="font-mono text-xs tracking-wider text-slate-500 uppercase"
							>Speed Advantage</span
						>
						<div class="font-mono text-4xl font-extrabold text-slate-900 sm:text-5xl">26.7x</div>
						<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
							faster response time compared to traditional marketing redirect SaaS.
						</p>
					</div>

					<div class="space-y-3 border-t border-slate-200 pt-4 font-mono text-xs">
						<div class="flex items-center justify-between text-slate-600">
							<span>Memory footprint</span>
							<span class="font-bold text-slate-900">18.4 MB</span>
						</div>
						<div class="flex items-center justify-between text-slate-600">
							<span>Throughput peak</span>
							<span class="font-bold text-slate-900">92k req/s</span>
						</div>
						<div class="flex items-center justify-between text-slate-600">
							<span>GC Pause P99</span>
							<span class="font-bold text-accent-emerald">&lt; 120μs</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
