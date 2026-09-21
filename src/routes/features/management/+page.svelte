<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		FolderCog,
		Tag,
		Globe2,
		Key,
		ArrowRight,
		ChevronRight,
		Sparkles,
		Search
	} from 'lucide-svelte';

	let searchQuery = $state('');
	let selectedTag = $state('All');

	const mockLinks = [
		{
			slug: 'launch-2026',
			domain: 'linkpulse.io',
			target: 'github.com/sveltejs/kit/...',
			tags: ['Marketing', 'Product'],
			clicks: '14,289',
			active: true
		},
		{
			slug: 'docs-api',
			domain: 'go.linkpulse.io',
			target: 'api.linkpulse.io/v1/swagger',
			tags: ['Engineering', 'Docs'],
			clicks: '8,410',
			active: true
		},
		{
			slug: 'spring-sale',
			domain: 'deal.linkpulse.io',
			target: 'store.linkpulse.io/promo',
			tags: ['Marketing'],
			clicks: '3,120',
			active: false
		}
	];

	const tags = ['All', 'Marketing', 'Product', 'Engineering', 'Docs'];

	let filteredLinks = $derived(
		mockLinks.filter((l) => {
			const matchesTag = selectedTag === 'All' || l.tags.includes(selectedTag);
			const matchesSearch =
				!searchQuery ||
				l.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
				l.target.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesTag && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Link Management &amp; Fleet Governance | LinkPulse</title>
	<meta
		name="description"
		content="Organize link tags, manage custom domains, search links in sub-millisecond intervals, and govern developer API keys with LinkPulse link management."
	/>
</svelte:head>

<div class="flex w-full flex-col bg-surface">
	<!-- Hero Header -->
	<section
		class="relative overflow-hidden border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20"
	>
		<div
			class="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-160 -translate-x-1/2 bg-linear-to-b from-amber-100/50 via-surface-variant/20 to-transparent blur-3xl"
		></div>

		<div class="mx-auto max-w-300 px-4 sm:px-8">
			<!-- Breadcrumb -->
			<nav
				class="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500"
				aria-label="Breadcrumb"
			>
				<a href={resolve('/')} class="transition hover:text-primary-600">Home</a>
				<ChevronRight class="h-3 w-3 text-slate-400" />
				<span class="text-slate-400">Features</span>
				<ChevronRight class="h-3 w-3 text-slate-400" />
				<span class="font-medium text-slate-900">Fleet Management</span>
			</nav>

			<div class="max-w-3xl space-y-4">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 font-mono text-xs font-semibold text-amber-800"
				>
					<Sparkles class="h-3.5 w-3.5 text-amber-600" />
					<span>Enterprise Link Governance</span>
				</div>
				<h1 class="font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
					Total control over every link, tag, and domain.
				</h1>
				<p class="text-base leading-relaxed text-slate-600 sm:text-lg">
					Organize marketing campaigns with flexible multi-tag taxonomy, search across millions of
					URLs in sub-millisecond intervals, and govern custom SSL vanity domains from a single pane
					of glass.
				</p>
			</div>
		</div>
	</section>

	<!-- Interactive Fleet Management Studio -->
	<section class="py-12 sm:py-16">
		<div class="mx-auto max-w-300 px-4 sm:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
				<!-- Left: Interactive Table & Tag Explorer -->
				<div class="space-y-6 lg:col-span-8">
					<div class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
						<div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div class="flex items-center gap-2.5">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-800"
								>
									<FolderCog class="h-4 w-4" />
								</div>
								<h2 class="font-sans text-base font-semibold text-slate-900">
									Link Explorer &amp; Tag Filter
								</h2>
							</div>

							<!-- Search Bar -->
							<div
								class="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 focus-within:border-primary-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-600/20"
							>
								<Search class="mr-2 h-3.5 w-3.5 text-slate-400" />
								<input
									type="text"
									bind:value={searchQuery}
									placeholder="Search slugs or targets..."
									class="w-36 bg-transparent font-mono text-xs text-slate-900 focus:outline-hidden sm:w-48"
								/>
							</div>
						</div>

						<!-- Tag Chips -->
						<div class="mb-4 flex flex-wrap items-center gap-2">
							{#each tags as tag (tag)}
								<button
									type="button"
									onclick={() => (selectedTag = tag)}
									class="cursor-pointer rounded-lg border px-3 py-1 font-mono text-xs font-medium transition {selectedTag ===
									tag
										? 'border-amber-400 bg-amber-50 text-amber-900 shadow-2xs'
										: 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'}"
								>
									{tag}
								</button>
							{/each}
						</div>

						<!-- Link Table -->
						<div class="overflow-x-auto rounded-xl border border-slate-200/80">
							<table class="w-full text-left font-mono text-xs">
								<thead class="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase">
									<tr>
										<th class="px-4 py-2.5 font-semibold">Short Slug</th>
										<th class="px-4 py-2.5 font-semibold">Destination</th>
										<th class="px-4 py-2.5 font-semibold">Tags</th>
										<th class="px-4 py-2.5 text-right font-semibold">Clicks</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-slate-100">
									{#each filteredLinks as item (item.slug)}
										<tr class="transition hover:bg-slate-50/70">
											<td class="px-4 py-3 font-semibold text-slate-900">
												<span class="text-slate-400">{item.domain}/s/</span>{item.slug}
											</td>
											<td class="max-w-40 truncate px-4 py-3 text-slate-500">
												{item.target}
											</td>
											<td class="px-4 py-3">
												<div class="flex flex-wrap gap-1">
													{#each item.tags as t (t)}
														<span
															class="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-700"
														>
															{t}
														</span>
													{/each}
												</div>
											</td>
											<td class="px-4 py-3 text-right font-bold text-primary-600">
												{item.clicks}
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<!-- Right: Management Pillars -->
				<div class="space-y-5 lg:col-span-4">
					<div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
						<h3 class="font-sans text-base font-bold text-slate-900">Fleet Features</h3>
						<div class="mt-4 space-y-4">
							<div class="flex items-start gap-3">
								<Globe2 class="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Custom Vanity Domains
									</h4>
									<p class="text-xs text-slate-500">
										Automated Let's Encrypt TLS provisioning for multiple company domains.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<Tag class="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Multi-Tag Hierarchies
									</h4>
									<p class="text-xs text-slate-500">
										Group links by department, campaign, and lifecycle status.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-3">
								<Key class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
								<div>
									<h4 class="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
										Scoped API Keys
									</h4>
									<p class="text-xs text-slate-500">
										Read-only, write-only, and domain-restricted API tokens.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer Navigation -->
	<section class="border-t border-slate-200/80 bg-slate-50 py-12">
		<div
			class="mx-auto flex max-w-300 flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8"
		>
			<a
				href={resolve('/features/routing')}
				class="inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary-600 transition hover:text-primary-700"
			>
				<ArrowRight class="h-4 w-4 rotate-180" />
				<span>Back to URL Routing</span>
			</a>
			<a
				href={resolve('/')}
				class="font-mono text-xs text-slate-500 transition hover:text-slate-900"
			>
				Back to Home &rarr;
			</a>
		</div>
	</section>
</div>
