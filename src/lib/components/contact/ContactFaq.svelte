<script lang="ts">
	import { HelpCircle, ChevronDown } from 'lucide-svelte';

	const FAQ_ITEMS = [
		{
			dotColor: 'bg-primary-600',
			question: 'Looking for freelance or consulting?',
			answer:
				'We accept selective high-throughput distributed architecture audits, Redis cache optimizations, and custom URL router build-outs with quick turnarounds.'
		},
		{
			dotColor: 'bg-accent-rose',
			question: 'Reporting an urgent redirect vulnerability?',
			answer:
				'Mark your message as "Bug Report & Issues" or email security@linkpulse.dev with our PGP key. Triage turnaround is under 6 hours.'
		},
		{
			dotColor: 'bg-accent-purple',
			question: 'Custom API limits & vanity domains?',
			answer:
				'Custom rate tiers (100k+ requests/sec) and enterprise SSL edge termination for dedicated custom domains can be provisioned via Platform Collaboration.'
		}
	];
</script>

<div
	class="space-y-4 rounded-2xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-100 pb-3">
		<div class="flex items-center gap-2">
			<HelpCircle class="h-4 w-4 text-slate-500" />
			<span class="font-mono text-xs font-semibold tracking-wider text-slate-700 uppercase">
				Frequently Asked Topics
			</span>
		</div>
		<span class="font-mono text-[11px] text-slate-400">FAQ Preview</span>
	</div>

	<!-- FAQ Items -->
	<div class="space-y-2">
		{#each FAQ_ITEMS as item (item.question)}
			<details
				class="group rounded-xl border border-slate-200/80 bg-slate-50/70 transition-colors open:border-primary-600/40 open:bg-surface-container-lowest"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between p-3 font-sans text-xs font-medium text-slate-800 transition-colors select-none hover:text-primary-600 sm:text-sm"
				>
					<span class="flex items-center gap-2.5 text-left">
						<span class="h-1.5 w-1.5 shrink-0 rounded-full {item.dotColor}"></span>
						<span>{item.question}</span>
					</span>
					<ChevronDown
						class="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180"
					/>
				</summary>
				<div
					class="border-t border-slate-100 px-3.5 pt-2 pb-3 text-xs leading-relaxed text-slate-600"
				>
					{item.answer}
				</div>
			</details>
		{/each}
	</div>
</div>
