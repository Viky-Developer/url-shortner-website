<script lang="ts">
	import { BarChart3, Globe, QrCode, Terminal, Check, Copy } from 'lucide-svelte';

	let activeTab = $state<'analytics' | 'domains' | 'qr' | 'api'>('analytics');
</script>

<section class="border-t border-neutral-800/80 bg-neutral-900/30 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-3xl text-center">
			<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
				Product Walkthrough
			</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
				Powerful tools designed for speed & precision
			</h2>
			<p class="mt-4 text-base text-neutral-400">
				Explore the tools and dashboard capabilities that help modern teams grow their reach.
			</p>
		</div>

		<!-- Tab Navigation Buttons -->
		<div class="mb-10 flex flex-wrap items-center justify-center gap-2">
			<button
				type="button"
				onclick={() => (activeTab = 'analytics')}
				class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition {activeTab ===
				'analytics'
					? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
					: 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}"
			>
				<BarChart3 class="h-4 w-4" />
				<span>Live Analytics</span>
			</button>

			<button
				type="button"
				onclick={() => (activeTab = 'domains')}
				class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition {activeTab ===
				'domains'
					? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
					: 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}"
			>
				<Globe class="h-4 w-4" />
				<span>Branded Domains</span>
			</button>

			<button
				type="button"
				onclick={() => (activeTab = 'qr')}
				class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition {activeTab ===
				'qr'
					? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
					: 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}"
			>
				<QrCode class="h-4 w-4" />
				<span>Dynamic QR Codes</span>
			</button>

			<button
				type="button"
				onclick={() => (activeTab = 'api')}
				class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition {activeTab ===
				'api'
					? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
					: 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}"
			>
				<Terminal class="h-4 w-4" />
				<span>REST API</span>
			</button>
		</div>

		<!-- Mockup Container -->
		<div
			class="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl sm:p-10"
		>
			{#if activeTab === 'analytics'}
				<div class="space-y-6">
					<div
						class="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-5"
					>
						<div>
							<h3 class="text-lg font-bold text-white">Campaign Performance: Summer Launch</h3>
							<p class="font-mono text-xs text-neutral-400">short.link/summer-2026</p>
						</div>
						<div class="flex items-center gap-2">
							<span
								class="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
							>
								● Active Campaign
							</span>
							<span
								class="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-300"
							>
								42,891 Total Clicks
							</span>
						</div>
					</div>

					<!-- Visual Bar Chart Mock -->
					<div class="space-y-3">
						<span class="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
							Hourly Click Velocity (Last 24 Hours)
						</span>
						<div class="flex h-36 items-end gap-1.5 pt-4 sm:gap-2.5">
							{#each [18, 35, 48, 62, 40, 85, 95, 120, 75, 110, 140, 130, 90, 80, 105, 115, 88, 70, 92, 110, 125, 98, 85, 130] as val, i}
								<div class="group flex flex-1 flex-col items-center gap-1">
									<div
										class="w-full rounded-t-sm bg-gradient-to-t from-indigo-600 to-violet-400 transition group-hover:from-indigo-400 group-hover:to-pink-400"
										style="height: {val}px;"
									></div>
									<span class="hidden text-[9px] text-neutral-600 sm:inline">{i}h</span>
								</div>
							{/each}
						</div>
					</div>

					<!-- Analytics Breakdown Grid -->
					<div class="grid grid-cols-1 gap-4 border-t border-neutral-800 pt-4 sm:grid-cols-3">
						<div class="rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-4">
							<span class="text-xs font-medium text-neutral-400">Top Geographies</span>
							<ul class="mt-2 space-y-1.5 text-xs">
								<li class="flex justify-between text-neutral-300">
									<span>🇺🇸 United States</span>
									<span class="font-mono font-semibold text-indigo-400">46%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>🇬🇧 United Kingdom</span>
									<span class="font-mono font-semibold text-indigo-400">22%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>🇩🇪 Germany</span>
									<span class="font-mono font-semibold text-indigo-400">14%</span>
								</li>
							</ul>
						</div>

						<div class="rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-4">
							<span class="text-xs font-medium text-neutral-400">Device Distribution</span>
							<ul class="mt-2 space-y-1.5 text-xs">
								<li class="flex justify-between text-neutral-300">
									<span>📱 Mobile (iOS / Android)</span>
									<span class="font-mono font-semibold text-indigo-400">68%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>💻 Desktop (macOS / Windows)</span>
									<span class="font-mono font-semibold text-indigo-400">29%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>📟 Tablet</span>
									<span class="font-mono font-semibold text-indigo-400">3%</span>
								</li>
							</ul>
						</div>

						<div class="rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-4">
							<span class="text-xs font-medium text-neutral-400">Top Referrers</span>
							<ul class="mt-2 space-y-1.5 text-xs">
								<li class="flex justify-between text-neutral-300">
									<span>X / Twitter</span>
									<span class="font-mono font-semibold text-indigo-400">39%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>LinkedIn</span>
									<span class="font-mono font-semibold text-indigo-400">31%</span>
								</li>
								<li class="flex justify-between text-neutral-300">
									<span>Email Newsletters</span>
									<span class="font-mono font-semibold text-indigo-400">18%</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			{:else if activeTab === 'domains'}
				<div class="space-y-6">
					<div class="flex items-center justify-between border-b border-neutral-800 pb-4">
						<div>
							<h3 class="text-lg font-bold text-white">Custom Branded Domains</h3>
							<p class="text-xs text-neutral-400">
								Increase trust and CTR with fully branded short domains
							</p>
						</div>
						<span
							class="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400"
						>
							Auto SSL Provisioned
						</span>
					</div>

					<div class="space-y-3">
						<div
							class="flex flex-col items-start justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 sm:flex-row sm:items-center"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
								>
									<Check class="h-5 w-5" />
								</div>
								<div>
									<p class="text-sm font-bold text-white">go.acmesaas.com</p>
									<p class="text-xs text-neutral-400">CNAME target: edge.shortlink.net</p>
								</div>
							</div>
							<span
								class="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400"
							>
								Active & Verified
							</span>
						</div>

						<div
							class="flex flex-col items-start justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 sm:flex-row sm:items-center"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
								>
									<Check class="h-5 w-5" />
								</div>
								<div>
									<p class="text-sm font-bold text-white">link.techflow.io</p>
									<p class="text-xs text-neutral-400">CNAME target: edge.shortlink.net</p>
								</div>
							</div>
							<span
								class="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400"
							>
								Active & Verified
							</span>
						</div>
					</div>
				</div>
			{:else if activeTab === 'qr'}
				<div class="flex flex-col items-center justify-between gap-8 sm:flex-row">
					<div class="max-w-md space-y-4">
						<h3 class="text-lg font-bold text-white">Custom Styled Dynamic QR Codes</h3>
						<p class="text-sm text-neutral-400">
							Update the destination URL anytime without reprinting physical QR codes. Perfect for
							menus, packaging, billboards, and conferences.
						</p>
						<ul class="space-y-2 text-xs text-neutral-300">
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-indigo-400" />
								<span>Export in SVG vector or ultra-high res PNG</span>
							</li>
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-indigo-400" />
								<span>Scan tracking separated from web click analytics</span>
							</li>
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-indigo-400" />
								<span>Brand color customization and logo embed</span>
							</li>
						</ul>
					</div>

					<div
						class="flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center"
					>
						<div class="rounded-xl bg-white p-4 shadow-xl">
							<svg class="h-36 w-36 text-neutral-900" viewBox="0 0 100 100" fill="currentColor">
								<rect
									x="5"
									y="5"
									width="30"
									height="30"
									fill="none"
									stroke="currentColor"
									stroke-width="6"
								/>
								<rect x="13" y="13" width="14" height="14" />
								<rect
									x="65"
									y="5"
									width="30"
									height="30"
									fill="none"
									stroke="currentColor"
									stroke-width="6"
								/>
								<rect x="73" y="13" width="14" height="14" />
								<rect
									x="5"
									y="65"
									width="30"
									height="30"
									fill="none"
									stroke="currentColor"
									stroke-width="6"
								/>
								<rect x="13" y="73" width="14" height="14" />
								<rect x="42" y="12" width="12" height="12" />
								<rect x="42" y="32" width="16" height="10" />
								<rect x="25" y="42" width="14" height="14" />
								<rect x="65" y="45" width="15" height="15" />
								<rect x="42" y="65" width="18" height="14" />
								<rect x="70" y="70" width="15" height="15" />
							</svg>
						</div>
						<span class="mt-3 font-mono text-xs font-semibold text-indigo-400"
							>short.link/qr-scan</span
						>
					</div>
				</div>
			{:else if activeTab === 'api'}
				<div class="space-y-4">
					<div class="flex items-center justify-between border-b border-neutral-800 pb-3">
						<h3 class="font-mono text-sm font-bold text-white">
							POST https://api.shortlink.net/v1/links
						</h3>
						<span class="rounded bg-neutral-800 px-2 py-0.5 font-mono text-xs text-neutral-300">
							cURL / TypeScript
						</span>
					</div>

					<pre
						class="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/90 p-4 font-mono text-xs text-neutral-200">{@html `<code>curl -X POST https://api.shortlink.net/v1/links \\
  -H "Authorization: Bearer sec_live_9a87f..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://myapp.com/onboarding?campaign=q3",
    "custom_slug": "q3-launch",
    "domain": "go.mybrand.com"
  }'</code>`}</pre>

					<div class="flex items-center gap-2 text-xs text-neutral-400">
						<span class="font-semibold text-emerald-400">Response 201 Created:</span>
						<span class="font-mono text-neutral-300"
							>{'{"id": "lnk_92", "short_url": "https://go.mybrand.com/q3-launch"}'}</span
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
