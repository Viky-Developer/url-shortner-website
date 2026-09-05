<script lang="ts">
	import { resolve } from '$app/paths';
	import { PRICING_PLANS } from '$lib/data/websiteData';
	import { Check, Sparkles, ArrowRight } from 'lucide-svelte';

	let isAnnual = $state(true);
</script>

<section id="pricing" class="bg-neutral-950 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto max-w-3xl text-center">
			<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
				Simple & Transparent Pricing
			</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
				Scale your links without hidden limits
			</h2>
			<p class="mt-4 text-base text-neutral-400">
				Choose the plan tailored for your traffic. Switch or cancel anytime with zero lock-in.
			</p>

			<!-- Billing Toggle (Monthly / Annual) -->
			<div
				class="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/80 p-1.5 backdrop-blur-md"
			>
				<button
					type="button"
					onclick={() => (isAnnual = false)}
					class="cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition {!isAnnual
						? 'bg-neutral-800 text-white shadow'
						: 'text-neutral-400 hover:text-white'}"
				>
					Monthly Billing
				</button>
				<button
					type="button"
					onclick={() => (isAnnual = true)}
					class="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition {isAnnual
						? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
						: 'text-neutral-400 hover:text-white'}"
				>
					<span>Annual Billing</span>
					<span
						class="rounded-full border border-indigo-400/30 bg-indigo-950/80 px-1.5 py-0.5 text-[10px] font-bold text-indigo-200"
					>
						Save 20%
					</span>
				</button>
			</div>
		</div>

		<!-- Pricing Cards Grid -->
		<div class="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
			{#each PRICING_PLANS as plan (plan.id)}
				{@const price = isAnnual ? plan.annualPrice : plan.monthlyPrice}
				<div
					class="relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-200 {plan.highlighted
						? 'border-indigo-500/80 bg-neutral-900/90 shadow-2xl shadow-indigo-500/10 lg:-translate-y-2'
						: 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'}"
				>
					{#if plan.highlighted}
						<div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
							<span
								class="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3.5 py-0.5 text-xs font-bold text-white shadow-md"
							>
								<Sparkles class="h-3 w-3" />
								Most Popular
							</span>
						</div>
					{/if}

					<div>
						<h3 class="text-xl font-bold text-white">{plan.name}</h3>
						<p class="mt-2 min-h-[36px] text-xs text-neutral-400">{plan.description}</p>

						<!-- Price Display -->
						<div class="mt-6 flex items-baseline gap-1">
							<span class="text-4xl font-extrabold text-white">
								${price}
							</span>
							<span class="text-xs text-neutral-400">
								/ month {isAnnual && price > 0 ? '(billed annually)' : ''}
							</span>
						</div>

						<!-- Feature Checklist -->
						<ul class="mt-8 space-y-3 border-t border-neutral-800 pt-6">
							{#each plan.features as feature}
								<li class="flex items-start gap-3 text-xs text-neutral-300">
									<div
										class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"
									>
										<Check class="h-3 w-3" />
									</div>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-8 pt-4">
						<a
							href={resolve('/pricing')}
							class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-semibold transition {plan.highlighted
								? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500'
								: 'border border-neutral-700 bg-neutral-800/80 text-white hover:bg-neutral-700'}"
						>
							<span>{plan.ctaText}</span>
							<ArrowRight class="h-4 w-4" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
