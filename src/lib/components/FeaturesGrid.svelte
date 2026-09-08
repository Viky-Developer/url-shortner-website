<script lang="ts">
	import { Link2, BarChart2, FolderCog, ArrowRight } from 'lucide-svelte';
</script>

<section class="w-full bg-surface py-16 sm:py-24">
	<div class="mx-auto max-w-[75rem] px-4 sm:px-8">
		<div class="mx-auto mb-16 max-w-2xl text-center">
			<div class="font-mono text-xs font-semibold tracking-wider text-primary-600 uppercase">
				Core Capabilities
			</div>
			<h2 class="mt-2 font-sans text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
				Everything required for modern link fleets.
			</h2>
			<p class="mt-3 text-sm text-slate-600 sm:text-base">
				Built to handle millions of redirects without missing a telemetry heartbeat.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- Card 1 -->
			<div
				class="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm transition-all duration-200 hover:shadow-xl"
			>
				<div>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white"
					>
						<Link2 class="h-6 w-6 rotate-45" />
					</div>
					<h3 class="mb-2 font-sans text-lg font-semibold text-slate-900">Create Short URLs</h3>
					<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
						Generate clean, shareable short links instantly with custom vanity slugs, UTM parameter
						presets, and automatic timestamp expiration.
					</p>
				</div>
				<div
					class="mt-6 flex items-center gap-1.5 pt-4 text-xs font-medium text-primary-600 transition-transform group-hover:translate-x-1 sm:text-sm"
				>
					<span>Explore Routing</span>
					<ArrowRight class="h-4 w-4" />
				</div>
			</div>

			<!-- Card 2 -->
			<div
				class="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm transition-all duration-200 hover:shadow-xl"
			>
				<div>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white"
					>
						<BarChart2 class="h-6 w-6" />
					</div>
					<h3 class="mb-2 font-sans text-lg font-semibold text-slate-900">Track Analytics</h3>
					<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
						Monitor real-time clicks, referrers, device architectures, operating systems, and
						campaign engagement across all your distributed endpoints.
					</p>
				</div>
				<div
					class="mt-6 flex items-center gap-1.5 pt-4 text-xs font-medium text-primary-600 transition-transform group-hover:translate-x-1 sm:text-sm"
				>
					<span>Explore Analytics</span>
					<ArrowRight class="h-4 w-4" />
				</div>
			</div>

			<!-- Card 3 -->
			<div
				class="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm transition-all duration-200 hover:shadow-xl"
			>
				<div>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800 transition-colors group-hover:bg-amber-700 group-hover:text-white"
					>
						<FolderCog class="h-6 w-6" />
					</div>
					<h3 class="mb-2 font-sans text-lg font-semibold text-slate-900">Manage Links</h3>
					<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
						Organize tags, search in millisecond intervals, batch disable old campaigns, and
						administrate multiple custom vanity domains from one central dashboard.
					</p>
				</div>
				<div
					class="mt-6 flex items-center gap-1.5 pt-4 text-xs font-medium text-primary-600 transition-transform group-hover:translate-x-1 sm:text-sm"
				>
					<span>Explore Management</span>
					<ArrowRight class="h-4 w-4" />
				</div>
			</div>
		</div>
	</div>
</section>
