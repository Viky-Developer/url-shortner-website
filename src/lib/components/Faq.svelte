<script lang="ts">
	import { FAQS } from '$lib/data/websiteData';
	import { ChevronDown } from 'lucide-svelte';

	let openId = $state<string | null>('what-is-shortener');

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="border-t border-neutral-800 bg-neutral-900/40 py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-14 text-center">
			<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
				Frequently Asked Questions
			</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
				Got questions? We've got answers
			</h2>
			<p class="mt-3 text-sm text-neutral-400">
				Learn more about how ShortLink works, custom domains, and edge infrastructure.
			</p>
		</div>

		<div class="space-y-4">
			{#each FAQS as faq (faq.id)}
				{@const isOpen = openId === faq.id}
				<div
					class="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/70 transition hover:border-neutral-700"
				>
					<button
						type="button"
						onclick={() => toggle(faq.id)}
						class="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-semibold text-white focus:outline-none"
						aria-expanded={isOpen}
					>
						<span>{faq.question}</span>
						<ChevronDown
							class="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 {isOpen
								? 'rotate-180 text-indigo-400'
								: ''}"
						/>
					</button>

					{#if isOpen}
						<div
							class="border-t border-neutral-900 px-5 pt-3 pb-5 text-xs leading-relaxed text-neutral-400 sm:text-sm"
						>
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
