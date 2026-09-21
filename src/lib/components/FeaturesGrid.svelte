<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2, BarChart2, FolderCog, ArrowRight } from 'lucide-svelte';

	interface CapabilityCard {
		id: string;
		href: string;
		title: string;
		description: string;
		cta: string;
		icon: typeof Link2;
		iconBg: string;
		iconHoverBg: string;
		iconColor: string;
		borderHover: string;
	}

	const capabilities: CapabilityCard[] = [
		{
			id: 'routing',
			href: resolve('/features/routing'),
			title: 'Create Short URLs',
			description:
				'Generate clean, shareable short links instantly with custom vanity slugs, UTM parameter presets, and automatic timestamp expiration.',
			cta: 'Explore Routing',
			icon: Link2,
			iconBg: 'bg-primary-fixed',
			iconHoverBg: 'group-hover:bg-primary-600 group-hover:text-white',
			iconColor: 'text-primary-600',
			borderHover: 'hover:border-primary-300'
		},
		{
			id: 'analytics',
			href: resolve('/features/analytics'),
			title: 'Track Analytics',
			description:
				'Monitor real-time clicks, referrers, device architectures, operating systems, and campaign engagement across all your distributed endpoints.',
			cta: 'Explore Analytics',
			icon: BarChart2,
			iconBg: 'bg-slate-100',
			iconHoverBg: 'group-hover:bg-slate-900 group-hover:text-white',
			iconColor: 'text-slate-700',
			borderHover: 'hover:border-indigo-300'
		},
		{
			id: 'management',
			href: resolve('/features/management'),
			title: 'Manage Links',
			description:
				'Organize tags, search in millisecond intervals, batch disable old campaigns, and administrate multiple custom vanity domains from one central dashboard.',
			cta: 'Explore Management',
			icon: FolderCog,
			iconBg: 'bg-amber-100',
			iconHoverBg: 'group-hover:bg-amber-700 group-hover:text-white',
			iconColor: 'text-amber-800',
			borderHover: 'hover:border-amber-300'
		}
	];
</script>

<section class="w-full bg-surface py-16 sm:py-24">
	<div class="mx-auto max-w-300 px-4 sm:px-8">
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
			{#each capabilities as item (item.id)}
				<a
					href={item.href}
					class="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-xl {item.borderHover}"
				>
					<div>
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl {item.iconBg} {item.iconColor} transition-colors {item.iconHoverBg}"
						>
							<item.icon class="h-6 w-6 {item.id === 'routing' ? 'rotate-45' : ''}" />
						</div>
						<h3 class="mb-2 font-sans text-lg font-semibold text-slate-900">
							{item.title}
						</h3>
						<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
							{item.description}
						</p>
					</div>
					<div
						class="mt-6 flex items-center gap-1.5 pt-4 text-xs font-medium text-primary-600 transition-transform group-hover:translate-x-1 sm:text-sm"
					>
						<span>{item.cta}</span>
						<ArrowRight class="h-4 w-4" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
