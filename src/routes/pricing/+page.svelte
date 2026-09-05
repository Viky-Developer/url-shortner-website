<script lang="ts">
	import Pricing from '$lib/components/Pricing.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import { Check, X } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pricing Plans — ShortLink</title>
</svelte:head>

<div class="py-12">
	<Pricing />

	<!-- Feature Matrix Comparison Table -->
	<section class="border-t border-neutral-800 bg-neutral-950 py-16">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h3 class="text-2xl font-bold text-white sm:text-3xl">Detailed Feature Comparison</h3>
				<p class="mt-2 text-sm text-neutral-400">Compare what is included in each tier</p>
			</div>

			<div class="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/40">
				<table class="w-full text-left text-xs sm:text-sm">
					<thead>
						<tr class="border-b border-neutral-800 bg-neutral-900/80 text-neutral-300">
							<th class="px-6 py-4 font-semibold">Feature</th>
							<th class="px-6 py-4 font-semibold">Starter</th>
							<th class="px-6 py-4 font-semibold text-indigo-400">Pro</th>
							<th class="px-6 py-4 font-semibold">Enterprise</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-800 text-neutral-400">
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Monthly Link Limit</td>
							<td class="px-6 py-3.5">1,000 links</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">Unlimited</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">Unlimited</td>
						</tr>
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Custom Branded Domains</td>
							<td class="px-6 py-3.5">None</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">3 Domains</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">Unlimited</td>
						</tr>
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Analytics History</td>
							<td class="px-6 py-3.5">30 Days</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">Forever</td>
							<td class="px-6 py-3.5 font-semibold text-neutral-200">Forever + Export</td>
						</tr>
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Dynamic Vector QR Codes</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
						</tr>
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Password & Link Expiry</td>
							<td class="px-6 py-3.5 text-neutral-600">
								<X class="h-4 w-4 text-neutral-600" />
							</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
						</tr>
						<tr>
							<td class="px-6 py-3.5 font-medium text-white">Single Sign-On (SSO)</td>
							<td class="px-6 py-3.5 text-neutral-600">
								<X class="h-4 w-4 text-neutral-600" />
							</td>
							<td class="px-6 py-3.5 text-neutral-600">
								<X class="h-4 w-4 text-neutral-600" />
							</td>
							<td class="px-6 py-3.5">
								<Check class="h-4 w-4 text-emerald-400" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<Faq />
	<CtaSection />
</div>
