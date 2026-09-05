<script lang="ts">
	import {
		isValidUrl,
		validateCustomSlug,
		formatDisplayUrl,
		generateMockShortLink
	} from '$lib/utils/urlValidator';
	import type { DemoShortenedLink } from '$lib/types';
	import {
		Link2,
		Copy,
		Check,
		QrCode,
		Sparkles,
		ExternalLink,
		SlidersHorizontal,
		BarChart3,
		Zap
	} from 'lucide-svelte';

	let inputUrl = $state('https://github.com/Viky-Developer/url-shortner-website');
	let customSlug = $state('');
	let showCustomSlug = $state(false);
	let isSubmitting = $state(false);
	let errorMessage = $state<string | null>(null);
	let copiedSlug = $state<string | null>(null);
	let showQrSlug = $state<string | null>(null);

	let recentLinks = $state<DemoShortenedLink[]>([
		{
			originalUrl: 'https://docs.svelte.dev/docs/kit/introduction',
			shortUrl: 'https://short.link/svelte-intro',
			slug: 'svelte-intro',
			createdAt: '10:14 AM',
			clicks: 142
		},
		{
			originalUrl: 'https://tailwindcss.com/docs/styling-with-utility-classes',
			shortUrl: 'https://short.link/tailwind-v4',
			slug: 'tailwind-v4',
			createdAt: 'Yesterday',
			clicks: 89
		}
	]);

	function handleShorten(event: SubmitEvent) {
		event.preventDefault();
		errorMessage = null;

		if (!isValidUrl(inputUrl)) {
			errorMessage = 'Please enter a valid URL starting with http:// or https://';
			return;
		}

		if (showCustomSlug && customSlug) {
			const slugValidation = validateCustomSlug(customSlug);
			if (!slugValidation.valid) {
				errorMessage = slugValidation.error || 'Invalid custom slug.';
				return;
			}
		}

		isSubmitting = true;
		setTimeout(() => {
			const newLink = generateMockShortLink(inputUrl, showCustomSlug ? customSlug : undefined);
			recentLinks = [newLink, ...recentLinks.slice(0, 4)];
			isSubmitting = false;
			customSlug = '';
		}, 300);
	}

	async function copyToClipboard(url: string, slug: string) {
		try {
			await navigator.clipboard.writeText(url);
			copiedSlug = slug;
			setTimeout(() => {
				if (copiedSlug === slug) copiedSlug = null;
			}, 2000);
		} catch {
			copiedSlug = slug;
			setTimeout(() => {
				if (copiedSlug === slug) copiedSlug = null;
			}, 2000);
		}
	}

	function toggleQr(slug: string) {
		showQrSlug = showQrSlug === slug ? null : slug;
	}
</script>

<div class="relative mx-auto w-full max-w-4xl">
	<!-- Glow effect background -->
	<div
		class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-75 blur-xl"
	></div>

	<!-- Main Card Container -->
	<div
		class="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
	>
		<div class="mb-6 flex items-center justify-between">
			<div class="flex items-center gap-2">
				<span class="flex h-3 w-3 animate-pulse rounded-full bg-emerald-500"></span>
				<span class="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
					Interactive Live Demo
				</span>
			</div>
			<div class="flex items-center gap-1.5 text-xs font-medium text-indigo-400">
				<Zap class="h-3.5 w-3.5" />
				<span>Sub-50ms Edge Redirect</span>
			</div>
		</div>

		<!-- Shortener Form -->
		<form onsubmit={handleShorten} class="space-y-4">
			<div class="flex flex-col gap-3 sm:flex-row">
				<div class="relative flex-1">
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-500"
					>
						<Link2 class="h-5 w-5" />
					</div>
					<input
						type="url"
						bind:value={inputUrl}
						placeholder="Paste your long link here (e.g. https://...)"
						required
						class="w-full rounded-xl border border-neutral-700 bg-neutral-950/80 py-3.5 pr-4 pl-11 text-sm text-neutral-100 placeholder-neutral-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-60"
				>
					{#if isSubmitting}
						<span
							class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
						></span>
						<span>Shortening...</span>
					{:else}
						<Sparkles class="h-4 w-4" />
						<span>Shorten Link</span>
					{/if}
				</button>
			</div>

			<!-- Optional Custom Alias Toggle -->
			<div class="flex flex-wrap items-center justify-between gap-2 text-xs">
				<button
					type="button"
					onclick={() => (showCustomSlug = !showCustomSlug)}
					class="inline-flex cursor-pointer items-center gap-1.5 text-neutral-400 transition hover:text-indigo-300 focus:outline-none"
				>
					<SlidersHorizontal class="h-3.5 w-3.5" />
					<span>{showCustomSlug ? 'Hide custom alias' : 'Add custom alias (optional)'}</span>
				</button>
				<span class="text-neutral-500">No credit card or account needed to test</span>
			</div>

			{#if showCustomSlug}
				<div class="rounded-xl border border-neutral-800 bg-neutral-950/60 p-3.5">
					<label for="custom-slug" class="mb-1.5 block text-xs font-medium text-neutral-300">
						Custom Link Alias
					</label>
					<div class="flex items-center">
						<span
							class="rounded-l-lg border border-r-0 border-neutral-700 bg-neutral-800/70 px-3 py-2 text-xs text-neutral-400"
						>
							short.link/
						</span>
						<input
							id="custom-slug"
							type="text"
							bind:value={customSlug}
							placeholder="my-campaign"
							class="w-full rounded-r-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none"
						/>
					</div>
				</div>
			{/if}

			{#if errorMessage}
				<div class="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
					{errorMessage}
				</div>
			{/if}
		</form>

		<!-- Recent / Demo Results Feed -->
		<div class="mt-8 border-t border-neutral-800/80 pt-6">
			<div class="mb-3 flex items-center justify-between">
				<h3 class="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
					Generated Links Preview
				</h3>
				<span class="text-xs text-neutral-500">{recentLinks.length} sample links active</span>
			</div>

			<div class="space-y-3">
				{#each recentLinks as link (link.slug)}
					<div
						class="flex flex-col gap-3 rounded-xl border border-neutral-800/90 bg-neutral-950/70 p-4 transition hover:border-neutral-700 sm:flex-row sm:items-center sm:justify-between"
					>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								<span class="font-mono text-sm font-semibold text-indigo-400">
									{link.shortUrl}
								</span>
								<span
									class="inline-flex items-center gap-1 rounded-md bg-neutral-800 px-2 py-0.5 text-[11px] font-medium text-neutral-300"
								>
									<BarChart3 class="h-3 w-3 text-indigo-400" />
									{link.clicks} clicks
								</span>
							</div>
							<p class="mt-1 truncate text-xs text-neutral-500" title={link.originalUrl}>
								Target: {formatDisplayUrl(link.originalUrl, 50)}
							</p>
						</div>

						<div class="flex items-center gap-2 self-end sm:self-center">
							<button
								type="button"
								onclick={() => copyToClipboard(link.shortUrl, link.slug)}
								class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs font-medium text-neutral-200 transition hover:bg-neutral-700 hover:text-white"
								aria-label="Copy shortened link"
							>
								{#if copiedSlug === link.slug}
									<Check class="h-3.5 w-3.5 text-emerald-400" />
									<span class="text-emerald-400">Copied!</span>
								{:else}
									<Copy class="h-3.5 w-3.5" />
									<span>Copy</span>
								{/if}
							</button>

							<button
								type="button"
								onclick={() => toggleQr(link.slug)}
								class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs font-medium text-neutral-200 transition hover:bg-neutral-700 hover:text-white"
								aria-label="Toggle QR code"
							>
								<QrCode class="h-3.5 w-3.5 text-neutral-400" />
								<span>QR Code</span>
							</button>
						</div>
					</div>

					<!-- QR Code Drawer Preview -->
					{#if showQrSlug === link.slug}
						<div
							class="flex flex-col items-center justify-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5 text-center"
						>
							<div class="rounded-xl bg-white p-3 shadow-md">
								<!-- Realistic Mock SVG QR Code -->
								<svg class="h-28 w-28 text-neutral-900" viewBox="0 0 100 100" fill="currentColor">
									<!-- Corners -->
									<rect
										x="5"
										y="5"
										width="30"
										height="30"
										fill="none"
										stroke="currentColor"
										stroke-width="6"
									/>
									<rect x="13" y="13" width="14" height="14" />
									<rect
										x="65"
										y="5"
										width="30"
										height="30"
										fill="none"
										stroke="currentColor"
										stroke-width="6"
									/>
									<rect x="73" y="13" width="14" height="14" />
									<rect
										x="5"
										y="65"
										width="30"
										height="30"
										fill="none"
										stroke="currentColor"
										stroke-width="6"
									/>
									<rect x="13" y="73" width="14" height="14" />
									<!-- Data modules -->
									<rect x="42" y="10" width="8" height="8" />
									<rect x="50" y="25" width="6" height="15" />
									<rect x="10" y="45" width="12" height="6" />
									<rect x="25" y="42" width="15" height="15" />
									<rect x="45" y="45" width="12" height="12" />
									<rect x="65" y="42" width="8" height="18" />
									<rect x="78" y="50" width="12" height="8" />
									<rect x="42" y="68" width="14" height="6" />
									<rect x="62" y="68" width="10" height="18" />
									<rect x="78" y="75" width="15" height="12" />
								</svg>
							</div>
							<div>
								<p class="text-xs font-semibold text-neutral-200">Dynamic QR for {link.shortUrl}</p>
								<p class="text-[11px] text-neutral-400">Scan with any smartphone camera</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
