<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight, Terminal, Link2, Share2, Copy, QrCode, Zap, Check } from 'lucide-svelte';
	import { env } from '$env/dynamic/public';

	const DEFAULT_URL =
		'https://github.com/sveltejs/kit/tree/master/packages/kit/src/runtime/server/page';

	let inputUrl = $state(DEFAULT_URL);
	let shortenedLink = $state('linkpulse.io/s/svk-demo');
	let targetSnippet = $state('github.com/sveltejs/kit/.../page');
	let shortened = $state(true);
	let loading = $state(false);
	let copied = $state(false);
	let showQrPanel = $state(false);

	const loginUrl: string = env.PUBLIC_LOGIN_URL || '#';

	async function shorten() {
		if (!inputUrl.trim()) return;
		loading = true;
		await new Promise((r) => setTimeout(r, 400));

		try {
			const parsed = new URL(inputUrl);
			targetSnippet = parsed.hostname + parsed.pathname.slice(0, 18) + '...';
		} catch {
			targetSnippet = inputUrl.slice(0, 25) + '...';
		}

		const randomHash = Math.random().toString(36).substring(2, 7);
		shortenedLink = `linkpulse.io/s/${randomHash}`;
		loading = false;
		shortened = true;
	}

	async function copyLink() {
		await navigator.clipboard.writeText(`https://${shortenedLink}`).catch(() => {});
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function toggleQr() {
		showQrPanel = !showQrPanel;
	}
</script>

<section class="relative w-full overflow-hidden bg-surface">
	<!-- Ambient Radial Glow Behind Main Focal Area -->
	<div
		class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-130 w-180 -translate-x-1/2 bg-linear-to-b from-primary-fixed/40 via-surface-variant/20 to-transparent blur-3xl"
	></div>

	<!-- Micro-dot background pattern -->
	<div
		class="pointer-events-none absolute inset-0 -z-20 opacity-40"
		style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;"
	></div>

	<div
		class="mx-auto flex max-w-300 flex-col items-center px-4 pt-10 pb-16 text-center sm:px-8 lg:px-8 lg:pt-14 lg:pb-20"
	>
		<!-- Pill Badge -->
		<div
			class="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm sm:mb-8"
		>
			<span class="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent-emerald"
			></span>
			<span class="font-mono text-xs font-medium text-slate-800 sm:text-sm">
				✨ High-performance URL shortener with sub-millisecond redirects
			</span>
		</div>

		<!-- Headline -->
		<h1
			class="max-w-4xl font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
			style="line-height: 1.1; letter-spacing: -0.035em;"
		>
			Short Links.
			<span
				class="bg-linear-to-r from-primary-600 via-primary-500 to-accent-purple bg-clip-text text-transparent"
			>
				Smart Tracking.
			</span>
		</h1>

		<!-- Description -->
		<p
			class="mt-4 max-w-2xl font-sans text-base text-slate-600 sm:mt-6 sm:text-lg"
			style="line-height: 1.6; letter-spacing: -0.01em;"
		>
			Create powerful short URLs, monitor clicks in real time, and manage every link with
			sub-millisecond routing from a simple, deterministic platform.
		</p>

		<!-- CTA Group -->
		<div
			class="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
		>
			<a
				href={loginUrl}
				class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-container px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-150 hover:bg-primary-600 active:scale-95 sm:w-auto"
			>
				<span>Get Started</span>
				<ArrowRight class="h-4 w-4" />
			</a>
			<a
				href={resolve('/about')}
				class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-surface-container-lowest px-7 py-3 text-sm font-medium text-slate-800 shadow-sm transition-all duration-150 hover:bg-slate-100 sm:w-auto"
			>
				<Terminal class="h-4 w-4 text-slate-500" />
				<span>Learn More</span>
			</a>
		</div>

		<!-- ─── Interactive Live Edge Simulator Widget ─── -->
		<div
			class="mt-12 w-full max-w-3xl rounded-xl border border-slate-200 bg-surface-container-lowest p-4 text-left shadow-xl sm:p-6"
		>
			<!-- Header / Traffic lights -->
			<div class="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
				<div class="flex items-center gap-2">
					<span class="bg-accent-rose h-3 w-3 rounded-full"></span>
					<span class="h-3 w-3 rounded-full bg-warning"></span>
					<span class="h-3 w-3 rounded-full bg-accent-emerald"></span>
					<span
						class="ml-2 font-mono text-[11px] font-medium tracking-wider text-slate-400 uppercase"
					>
						Live Edge Simulator
					</span>
				</div>
				<div
					class="flex items-center gap-1.5 rounded bg-emerald-50 px-2 py-0.5 font-mono text-xs font-medium text-accent-emerald"
				>
					<Zap class="h-3.5 w-3.5" />
					<span>Redis Cache Active</span>
				</div>
			</div>

			<!-- URL Form -->
			<form
				onsubmit={(e) => {
					e.preventDefault();
					shorten();
				}}
				class="flex flex-col gap-2 rounded-xl bg-slate-50 p-1.5 shadow-inner sm:flex-row sm:gap-3"
			>
				<div
					class="flex flex-1 items-center rounded-lg bg-surface-container-lowest px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-600/20"
				>
					<Link2 class="mr-2 h-5 w-5 shrink-0 rotate-45 text-slate-400" />
					<input
						bind:value={inputUrl}
						type="url"
						required
						placeholder="Paste destination link (e.g. https://github.com/...)"
						class="w-full truncate bg-transparent font-mono text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-sm"
					/>
				</div>
				<button
					type="submit"
					disabled={loading}
					class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 font-sans text-xs font-medium whitespace-nowrap text-white shadow-sm transition-colors hover:bg-primary-700 disabled:opacity-75 sm:text-sm"
				>
					<span>{loading ? 'Routing...' : 'Shorten URL'}</span>
					<Zap class="h-4 w-4" />
				</button>
			</form>

			<!-- Result Card -->
			{#if shortened}
				<div
					class="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl bg-surface-container-low p-4 transition-all sm:flex-row sm:items-center"
				>
					<div class="flex min-w-0 items-center gap-3">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary-600 shadow-sm"
						>
							<Share2 class="h-5 w-5" />
						</div>
						<div class="min-w-0">
							<div class="flex items-center gap-2">
								<span class="truncate font-mono text-xs font-semibold text-slate-900 sm:text-sm">
									{shortenedLink}
								</span>
								<span
									class="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700"
								>
									Deterministic
								</span>
							</div>
							<p class="mt-0.5 truncate font-mono text-xs text-slate-500">
								Targets: {targetSnippet}
							</p>
						</div>
					</div>
					<div class="flex shrink-0 items-center gap-2 self-end sm:self-center">
						<button
							type="button"
							onclick={copyLink}
							class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-surface-container-lowest px-3 py-1.5 font-mono text-xs text-slate-700 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900"
						>
							{#if copied}
								<Check class="h-4 w-4 text-emerald-600" />
								<span class="font-semibold text-emerald-600">Copied!</span>
							{:else}
								<Copy class="h-4 w-4 text-slate-500" />
								<span>Copy</span>
							{/if}
						</button>
						<button
							type="button"
							onclick={toggleQr}
							title="Toggle QR Code preview"
							class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-surface-container-lowest px-3 py-1.5 font-mono text-xs text-slate-700 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900"
						>
							<QrCode class="h-4 w-4 text-slate-500" />
							<span>QR</span>
						</button>
					</div>
				</div>
			{/if}

			<!-- Expandable Inline QR Code Panel -->
			{#if showQrPanel}
				<div
					class="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-surface-container-lowest p-4 shadow-md"
				>
					<div class="space-y-1">
						<h4 class="font-sans text-sm font-semibold text-slate-900">QR Code Vector</h4>
						<p class="text-xs text-slate-500">
							Scan to invoke sub-millisecond edge redirection directly.
						</p>
						<div class="font-mono text-xs font-medium text-primary-600">
							Target: https://{shortenedLink}
						</div>
					</div>
					<div
						class="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-slate-950 p-2 shadow"
					>
						<svg class="h-full w-full text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm2 10h2v2h-2v-2zm-2 2h2v4h-2v-4zm4 0h2v2h-2v-2zm-2 4h4v2h-4v-2zm4-4h2v2h-2v-2zM6 6h2v2H6V6zm0 12h2v2H6v-2zm12-12h2v2h-2V6z"
							/>
						</svg>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
