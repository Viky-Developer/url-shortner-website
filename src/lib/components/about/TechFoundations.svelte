<script lang="ts">
	import { Database, Cpu, Terminal, KeyRound, LayoutTemplate } from 'lucide-svelte';

	interface TechCard {
		title: string;
		badge: string;
		description: string;
		iconType: 'text' | 'lucide';
		textIcon?: string;
		iconComponent?: typeof Database;
	}

	const techStack: TechCard[] = [
		{
			title: 'Go HTTP Engine',
			badge: 'Service Core',
			description:
				'Zero-alloc router handling concurrent connection spikes with ultra-compact memory footprint and sub-millisecond P99 HTTP lifecycle execution.',
			iconType: 'text',
			textIcon: 'Go'
		},
		{
			title: 'PostgreSQL',
			badge: 'Persistence',
			description:
				'Rock-solid relational isolation with strict foreign keys, indexing for base62 tokens, and atomic transaction semantics.',
			iconType: 'lucide',
			iconComponent: Database
		},
		{
			title: 'Redis In-Memory',
			badge: 'Cache Layer',
			description:
				'Sub-millisecond redirect routing, distributed sliding-window rate limiters, and atomic write-back counters for high-velocity links.',
			iconType: 'lucide',
			iconComponent: Cpu
		},
		{
			title: 'SQLC Query Generator',
			badge: 'Type Safety',
			description:
				'Pure SQL compiled directly into idiomatic, typed Go structs. Eliminates ORM latency and guarantees compile-time schema verification.',
			iconType: 'lucide',
			iconComponent: Terminal
		},
		{
			title: 'Cryptographic JWT',
			badge: 'Security',
			description:
				'Stateless, cryptographically signed claims with short-lived tokens, immediate revocation blacklists, and secure HTTP-only cookies.',
			iconType: 'lucide',
			iconComponent: KeyRound
		},
		{
			title: 'SvelteKit 5 + Tailwind',
			badge: 'Frontend SSR',
			description:
				'Minimal client hydration bundle size, modern reactive runes, and instantaneous dashboard telemetry updates without framework weight.',
			iconType: 'lucide',
			iconComponent: LayoutTemplate
		}
	];
</script>

<section class="w-full border-y border-slate-200/80 bg-slate-50/80 py-16 sm:py-24">
	<div class="mx-auto max-w-300 space-y-12 px-4 sm:px-8">
		<!-- Header -->
		<div class="max-w-2xl space-y-3">
			<span class="font-mono text-xs font-semibold tracking-widest text-primary-600 uppercase"
				>Technology Foundations</span
			>
			<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
				Engineered with Intentional Simplicity
			</h2>
			<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
				Every layer of the LinkPulse architecture was chosen for deterministic latency, zero magic
				runtime dependencies, and strict memory safety.
			</p>
		</div>

		<!-- 3-Column Cards Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each techStack as item (item.title)}
				<div
					class="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<div
								class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white"
							>
								{#if item.iconType === 'text'}
									<span class="font-mono text-sm font-bold">{item.textIcon}</span>
								{:else if item.iconComponent}
									{@const Icon = item.iconComponent}
									<Icon class="h-5 w-5" />
								{/if}
							</div>
							<span
								class="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 font-mono text-xs font-medium text-slate-700"
							>
								{item.badge}
							</span>
						</div>

						<h3 class="text-lg font-bold text-slate-900">
							{item.title}
						</h3>

						<p class="text-sm leading-relaxed text-slate-600">
							{item.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
