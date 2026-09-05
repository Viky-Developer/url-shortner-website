<script lang="ts">
	import { FEATURES } from '$lib/data/websiteData';
	import { Zap, BarChart3, Globe, QrCode, Shield, Code, ArrowUpRight } from 'lucide-svelte';

	const iconMap: Record<string, typeof Zap> = {
		zap: Zap,
		chart: BarChart3,
		globe: Globe,
		qr: QrCode,
		shield: Shield,
		code: Code
	};
</script>

<section id="features" class="relative bg-neutral-950 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
				Built for Scale & Reliability
			</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
				Everything you need to control and optimize your traffic
			</h2>
			<p class="mt-4 text-base text-neutral-400">
				From personal social media links to enterprise advertising campaigns, ShortLink provides the
				fastest and most secure link management toolkit.
			</p>
		</div>

		<!-- Feature Cards Grid -->
		<div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each FEATURES as feature (feature.id)}
				{@const IconComponent = iconMap[feature.icon] || Zap}
				<div
					class="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/80 hover:shadow-xl hover:shadow-indigo-500/5"
				>
					<div>
						<div class="flex items-center justify-between">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-indigo-400 transition group-hover:bg-indigo-600 group-hover:text-white"
							>
								<IconComponent class="h-6 w-6" />
							</div>
							{#if feature.badge}
								<span
									class="rounded-full border border-neutral-700/80 bg-neutral-800/60 px-2.5 py-0.5 text-[11px] font-medium text-neutral-300"
								>
									{feature.badge}
								</span>
							{/if}
						</div>

						<h3 class="mt-6 text-lg font-bold text-white transition group-hover:text-indigo-300">
							{feature.title}
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-neutral-400">
							{feature.description}
						</p>
					</div>

					<div
						class="mt-6 flex items-center gap-1 text-xs font-medium text-indigo-400 opacity-0 transition group-hover:opacity-100"
					>
						<span>Learn technical details</span>
						<ArrowUpRight class="h-3.5 w-3.5" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
