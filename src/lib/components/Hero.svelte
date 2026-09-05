<script lang="ts">
	import { ArrowRight, Terminal, Link2, Share2, Copy, QrCode, Zap } from 'lucide-svelte';

	const DEMO_URL = 'https://github.com/sveltejs/kit/tree/master/packages/kit/src/runtime/server/';
	const SHORT_LINK = 'Linkpulse.io/s/svk-demo';
	const SHORT_TARGET = 'github.com/sveltejs/kit/.../page';

	let inputUrl = $state(DEMO_URL);
	let shortened = $state(true); // show result card by default (demo state)
	let loading = $state(false);
	let copied = $state(false);

	async function shorten() {
		if (!inputUrl.trim()) return;
		loading = true;
		shortened = false;
		await new Promise((r) => setTimeout(r, 700));
		loading = false;
		shortened = true;
	}

	async function copyLink() {
		await navigator.clipboard.writeText(`https://${SHORT_LINK}`).catch(() => {});
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<section class="relative w-full overflow-hidden">
	<div
		class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[32rem] w-[72rem] -translate-x-1/2 blur-3xl"
		style="background: radial-gradient(ellipse at center, rgba(226,223,255,0.45) 0%, rgba(211,228,254,0.2) 50%, transparent 80%);"
	></div>

	<div
		class="pointer-events-none absolute inset-0 -z-20"
		style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px; opacity: 0.5;"
	></div>

	<div
		class="mx-auto flex max-w-[75rem] flex-col items-center px-4 pt-10 pb-16 text-center sm:px-8 lg:px-8 lg:pt-14 lg:pb-20"
	>
		<div
			class="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-left shadow-sm sm:mb-8 sm:px-4 sm:py-1.5"
		>
			<span class="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#10b981]"></span>
			<span class="font-mono text-[11px] leading-snug text-slate-700 sm:text-[13px]">
				✨ High-performance URL shortener with sub-millisecond redirects
			</span>
		</div>

		<h1
			class="max-w-4xl text-slate-900"
			style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.035em;"
		>
			Short Links.
			<span
				style="background: linear-gradient(to right, #3525cd, #4f46e5, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
			>
				Smart Tracking.
			</span>
		</h1>

		<p
			class="mt-4 max-w-2xl text-sm text-slate-600 sm:mt-6 sm:text-base md:text-lg"
			style="font-weight: 400; line-height: 1.6; letter-spacing: -0.01em;"
		>
			Create powerful short URLs, monitor clicks in real time, and manage every link with
			sub-millisecond routing from a simple, deterministic platform.
		</p>

		<!-- CTA group -->
		<div
			class="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
		>
			<!-- Primary -->
			<a
				href="/register"
				class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-medium text-white transition-all duration-150 active:scale-[0.97] sm:w-auto"
				style="background: #4f46e5; box-shadow: 0 1px 3px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.2);"
				onmouseenter={(e) => (e.currentTarget.style.background = '#4338ca')}
				onmouseleave={(e) => (e.currentTarget.style.background = '#4f46e5')}
			>
				<span>Get Started Free</span>
				<ArrowRight class="h-4 w-4" />
			</a>

			<a
				href="/about"
				class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-800 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.97] sm:w-auto"
				style="box-shadow: 0 1px 2px rgba(15,23,42,0.04);"
			>
				<Terminal class="h-4 w-4 text-slate-500" />
				<span>Learn More</span>
			</a>
		</div>

		<!-- ─── Live Edge Simulator ─── -->
		<div class="mt-10 w-full max-w-2xl px-1 sm:mt-14 sm:px-0">
			<!-- Card -->
			<div
				class="overflow-hidden rounded-xl border border-slate-200 bg-white text-left"
				style="box-shadow: 0 4px 24px -4px rgba(15,23,42,0.10), 0 1px 2px 0 rgba(15,23,42,0.04);"
			>
				<!-- Browser-chrome header -->
				<div
					class="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3"
				>
					<div class="flex shrink-0 items-center gap-2 sm:gap-3">
						<!-- Traffic-light dots -->
						<div class="flex items-center gap-1.5">
							<span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3"></span>
							<span class="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3"></span>
							<span class="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3"></span>
						</div>
						<span
							class="font-mono whitespace-nowrap text-slate-500"
							style="font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;"
						>
							Live Edge Simulator
						</span>
					</div>
					<!-- Redis Cache Active badge -->
					<div class="flex shrink-0 items-center gap-1 sm:gap-1.5">
						<Zap class="h-3 w-3 text-[#4f46e5]" />
						<span
							class="font-mono text-[11px] whitespace-nowrap text-[#4f46e5] sm:text-xs"
							style="font-weight: 500; letter-spacing: 0.02em;"
						>
							Redis Cache Active
						</span>
					</div>
				</div>

				<!-- URL input row: stacks on mobile, inline on sm+ -->
				<div
					class="flex flex-col items-stretch gap-2.5 p-3 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-4"
				>
					<!-- Input with link icon prefix -->
					<div
						class="flex flex-1 items-center overflow-hidden rounded-md border border-slate-200 transition-[border-color,box-shadow] focus-within:border-[#4f46e5] focus-within:ring-2 focus-within:ring-[#4f46e5]/20"
					>
						<span
							class="flex shrink-0 items-center border-r border-slate-200 bg-slate-50 px-2.5 py-2 sm:px-3 sm:py-2.5"
						>
							<Link2 class="h-4 w-4 rotate-45 text-slate-400" />
						</span>
						<input
							bind:value={inputUrl}
							type="url"
							placeholder="Paste a long URL to shorten…"
							class="h-full min-w-0 flex-1 bg-white px-2.5 py-2 font-mono text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none sm:px-3 sm:py-2.5 sm:text-sm"
							onkeydown={(e) => e.key === 'Enter' && shorten()}
						/>
					</div>

					<!-- Shorten URL button: full width on mobile -->
					<button
						type="button"
						onclick={shorten}
						disabled={loading}
						class="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-medium text-white transition-all duration-150 disabled:opacity-70 sm:w-auto sm:py-2.5 sm:text-sm"
						style="background: #4f46e5; box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);"
						onmouseenter={(e) => !loading && (e.currentTarget.style.background = '#4338ca')}
						onmouseleave={(e) => (e.currentTarget.style.background = '#4f46e5')}
					>
						{#if loading}
							<svg
								class="h-4 w-4 animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								></path>
							</svg>
							<span>Shortening…</span>
						{:else}
							<span>Shorten URL</span>
							<Zap class="h-3.5 w-3.5" />
						{/if}
					</button>
				</div>

				<!-- Result row (shown after shortening): stacks on mobile, inline on sm+ -->
				{#if shortened}
					<div class="border-t border-slate-100 p-3 sm:px-4 sm:py-3">
						<div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
							<!-- Left: share icon + link details -->
							<div class="flex w-full min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
								<div
									class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 sm:mt-0"
								>
									<Share2 class="h-4 w-4 text-slate-500" />
								</div>
								<div class="min-w-0 flex-1">
									<div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
										<a
											href="https://{SHORT_LINK}"
											target="_blank"
											rel="noreferrer"
											class="font-mono text-xs font-medium break-all text-slate-900 hover:text-[#4f46e5] sm:text-sm sm:break-normal"
										>
											{SHORT_LINK}
										</a>
										<!-- Deterministic badge -->
										<span
											class="shrink-0 rounded px-1.5 py-0.5 font-mono"
											style="font-size: 0.6rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;"
										>
											Deterministic
										</span>
									</div>
									<p class="mt-0.5 truncate font-mono text-[11px] text-slate-400 sm:text-xs">
										Targets: {SHORT_TARGET}
									</p>
								</div>
							</div>

							<!-- Right: Copy + QR actions -->
							<div
								class="flex w-full items-center justify-end gap-2 border-t border-slate-100 pt-2 sm:w-auto sm:border-0 sm:pt-0"
							>
								<button
									type="button"
									onclick={copyLink}
									class="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 sm:flex-initial"
								>
									<Copy class="h-3.5 w-3.5" />
									{copied ? 'Copied!' : 'Copy'}
								</button>
								<button
									type="button"
									class="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 sm:flex-initial"
								>
									<QrCode class="h-3.5 w-3.5" />
									QR
								</button>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
