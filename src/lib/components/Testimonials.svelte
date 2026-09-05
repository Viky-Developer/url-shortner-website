<script lang="ts">
	import { TESTIMONIALS } from '$lib/data/websiteData';
	import { Star } from 'lucide-svelte';
</script>

<section class="bg-neutral-950 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-14 max-w-2xl text-center">
			<span class="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
				Trusted by Creators & Teams
			</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
				Loved by fast-moving modern marketers
			</h2>
			<p class="mt-3 text-sm text-neutral-400">
				See how our link management infrastructure powers campaigns for high-growth businesses.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each TESTIMONIALS as item (item.id)}
				<div
					class="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-700 hover:bg-neutral-900/70"
				>
					<div>
						<!-- 5 Stars -->
						<div class="mb-4 flex items-center gap-1 text-amber-400">
							{#each Array(item.rating) as _}
								<Star class="h-4 w-4 fill-amber-400" />
							{/each}
						</div>

						<p class="text-xs leading-relaxed text-neutral-300 italic sm:text-sm">
							"{item.content}"
						</p>
					</div>

					<div class="mt-6 flex items-center gap-3 border-t border-neutral-800/80 pt-4">
						<img
							src={item.avatar}
							alt={item.name}
							class="h-10 w-10 rounded-full border border-neutral-700 object-cover"
							loading="lazy"
						/>
						<div>
							<h4 class="text-xs font-bold text-white">{item.name}</h4>
							<p class="text-[11px] text-neutral-400">{item.role} at {item.company}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
