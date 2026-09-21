<script lang="ts">
	import { Zap, ShieldCheck, Radio, Code2 } from 'lucide-svelte';

	interface FeatureItem {
		id: string;
		title: string;
		description: string;
		tag: string;
		icon: typeof Zap;
		iconColor: string;
		iconBg: string;
		iconHoverBg: string;
		borderHover: string;
		gradient: string;
		tagColor: string;
	}

	const features: FeatureItem[] = [
		{
			id: 'fast-redirects',
			title: 'Fast redirects',
			description:
				'< 2ms response times powered by an ultra-lean Go engine and an in-memory distributed Redis cache tier.',
			tag: 'P99 SLA: 14ms',
			icon: Zap,
			iconColor: 'text-primary-600',
			iconBg: 'bg-primary-50 border-primary-100',
			iconHoverBg:
				'group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600',
			borderHover: 'hover:border-primary-300 hover:shadow-primary-100/50',
			gradient: 'from-primary-500 to-indigo-600',
			tagColor: 'text-primary-700 bg-primary-50/80 border-primary-200/60'
		},
		{
			id: 'secure-auth',
			title: 'Secure authentication',
			description:
				'JWT-backed session governance, automated device concurrency limits, and enterprise-grade MFA support.',
			tag: 'Zero-trust tokens',
			icon: ShieldCheck,
			iconColor: 'text-purple-600',
			iconBg: 'bg-purple-50 border-purple-100',
			iconHoverBg: 'group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
			borderHover: 'hover:border-purple-300 hover:shadow-purple-100/50',
			gradient: 'from-purple-500 to-fuchsia-600',
			tagColor: 'text-purple-700 bg-purple-50/80 border-purple-200/60'
		},
		{
			id: 'realtime-tracking',
			title: 'Real-time click tracking',
			description:
				'Asynchronous event streaming ingests clicks without slowing down the initial user HTTP redirect handshake.',
			tag: 'Non-blocking queues',
			icon: Radio,
			iconColor: 'text-emerald-600',
			iconBg: 'bg-emerald-50 border-emerald-100',
			iconHoverBg:
				'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
			borderHover: 'hover:border-emerald-300 hover:shadow-emerald-100/50',
			gradient: 'from-emerald-500 to-teal-600',
			tagColor: 'text-emerald-700 bg-emerald-50/80 border-emerald-200/60'
		},
		{
			id: 'dev-api',
			title: 'Developer-friendly API',
			description:
				'Clean, programmatic REST APIs with scoped keys, rate limiter headers, OpenAPI schemas, and SDKs.',
			tag: 'REST + Webhooks',
			icon: Code2,
			iconColor: 'text-amber-600',
			iconBg: 'bg-amber-50 border-amber-100',
			iconHoverBg: 'group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
			borderHover: 'hover:border-amber-300 hover:shadow-amber-100/50',
			gradient: 'from-amber-500 to-orange-600',
			tagColor: 'text-amber-700 bg-amber-50/80 border-amber-200/60'
		}
	];
</script>

<section
	id="about"
	class="w-full scroll-mt-16 border-t border-slate-200/60 bg-surface-container-lowest py-16 sm:py-24"
>
	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<!-- Header -->
		<div class="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div class="space-y-2">
				<div
					class="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-primary-600 uppercase"
				>
					<span class="inline-block h-2 w-2 rounded-full bg-primary-600"></span>
					Why LinkPulse
				</div>
				<h2 class="font-sans text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Speed is not a feature, it is the product.
				</h2>
			</div>
			<p class="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
				Built from the ground up using Go and Redis to replace sluggish redirect chains with pure
				execution speed.
			</p>
		</div>

		<!-- Animated Cards Grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature, i (feature.id)}
				<div
					class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl {feature.borderHover}"
					style="transition-delay: {i * 40}ms;"
				>
					<!-- Top Accent Gradient Line on Hover -->
					<div
						class="absolute inset-x-0 top-0 h-1 bg-linear-to-r {feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>

					<div>
						<!-- Icon container with interactive hover scale and color fill -->
						<div
							class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border {feature.iconBg} {feature.iconColor} shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 {feature.iconHoverBg}"
						>
							<feature.icon class="h-6 w-6 transition-transform duration-300" />
						</div>

						<h3
							class="mb-2 font-sans text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-slate-950"
						>
							{feature.title}
						</h3>

						<p class="text-xs leading-relaxed text-slate-600">
							{feature.description}
						</p>
					</div>

					<!-- Bottom Tag Badge -->
					<div class="mt-6 pt-2">
						<span
							class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium transition-transform duration-200 group-hover:scale-105 {feature.tagColor}"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-current opacity-70"></span>
							{feature.tag}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
