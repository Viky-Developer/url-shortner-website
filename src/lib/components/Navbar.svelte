<script lang="ts">
	import { resolve } from '$app/paths';
	import { User, Menu, X, ChevronDown, Link2, BarChart2, FolderCog } from 'lucide-svelte';
	import { env } from '$env/dynamic/public';

	let mobileOpen = $state(false);
	let featuresMenuOpen = $state(false);

	function toggle() {
		mobileOpen = !mobileOpen;
	}

	function close() {
		mobileOpen = false;
		featuresMenuOpen = false;
	}

	const loginUrl: string = env.PUBLIC_LOGIN_URL || '#';
	const logoUrl = env.PUBLIC_LOGO_URL || '/logo.svg';
	const githubUrl = env.PUBLIC_GITHUB_URL || '#';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-slate-200 bg-surface-container-lowest/80 backdrop-blur-md"
>
	<div class="mx-auto flex h-14 max-w-300 items-center justify-between px-4 sm:px-8">
		<!-- Brand + Status -->
		<div class="flex items-center gap-4">
			<a
				href={resolve('/')}
				class="group flex items-center gap-2.5 transition focus:outline-hidden"
				aria-label="LinkPulse Home"
			>
				<img
					src={logoUrl}
					alt="LinkPulse Logo"
					class="h-8 w-8 rounded-lg object-contain transition group-hover:scale-105"
				/>
				<span class="text-sm font-bold tracking-tight text-on-surface sm:text-base">
					Link<span class="text-primary-600">Pulse</span>
				</span>
				<span
					class="hidden rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-medium text-slate-600 sm:inline-block"
				>
					v1.0
				</span>
			</a>

			<div class="hidden items-center gap-1.5 text-xs text-slate-500 xl:flex">
				<span class="h-2 w-2 rounded-full bg-success"></span>
				<span>API Online • 99.99% uptime</span>
			</div>
		</div>

		<!-- Desktop nav + actions -->
		<div class="hidden items-center gap-5 md:flex">
			<nav class="flex items-center gap-4 text-sm font-medium text-slate-600">
				<a href={resolve('/')} class="transition hover:text-on-surface">Home</a>

				<!-- Features Dropdown Menu -->
				<div
					class="relative py-2"
					role="group"
					aria-label="Features Navigation"
					onmouseenter={() => (featuresMenuOpen = true)}
					onmouseleave={() => (featuresMenuOpen = false)}
				>
					<button
						type="button"
						onclick={() => (featuresMenuOpen = !featuresMenuOpen)}
						class="inline-flex cursor-pointer items-center gap-1 transition hover:text-on-surface"
						aria-expanded={featuresMenuOpen}
					>
						<span>Features</span>
						<ChevronDown
							class="h-3.5 w-3.5 transition-transform duration-200 {featuresMenuOpen
								? 'rotate-180'
								: ''}"
						/>
					</button>

					{#if featuresMenuOpen}
						<div class="absolute top-full left-0 z-50 -ml-2 w-64 pt-2">
							<div
								class="rounded-xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-slate-900/5"
							>
								<a
									href={resolve('/features/routing')}
									onclick={() => (featuresMenuOpen = false)}
									class="flex items-start gap-2.5 rounded-lg p-2.5 transition hover:bg-slate-50"
								>
									<div
										class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary-600"
									>
										<Link2 class="h-4 w-4 rotate-45" />
									</div>
									<div>
										<div class="text-xs font-semibold text-slate-900">URL Routing</div>
										<div class="text-[11px] text-slate-500">Sub-2ms edge redirects &amp; QR</div>
									</div>
								</a>

								<a
									href={resolve('/features/analytics')}
									onclick={() => (featuresMenuOpen = false)}
									class="flex items-start gap-2.5 rounded-lg p-2.5 transition hover:bg-slate-50"
								>
									<div
										class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600"
									>
										<BarChart2 class="h-4 w-4" />
									</div>
									<div>
										<div class="text-xs font-semibold text-slate-900">
											Telemetry &amp; Analytics
										</div>
										<div class="text-[11px] text-slate-500">Real-time click streams &amp; geo</div>
									</div>
								</a>

								<a
									href={resolve('/features/management')}
									onclick={() => (featuresMenuOpen = false)}
									class="flex items-start gap-2.5 rounded-lg p-2.5 transition hover:bg-slate-50"
								>
									<div
										class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-800"
									>
										<FolderCog class="h-4 w-4" />
									</div>
									<div>
										<div class="text-xs font-semibold text-slate-900">Link Management</div>
										<div class="text-[11px] text-slate-500">Tags, domains &amp; API keys</div>
									</div>
								</a>
							</div>
						</div>
					{/if}
				</div>

				<a href={resolve('/about')} class="transition hover:text-on-surface">About</a>
				<a href={resolve('/contact')} class="transition hover:text-on-surface">Contact</a>
				<a
					href={githubUrl}
					target="_blank"
					rel="noreferrer"
					class="transition hover:text-on-surface"
				>
					GitHub
				</a>
			</nav>

			<div class="flex items-center gap-2">
				<a
					href={loginUrl}
					class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-on-surface"
				>
					<User class="h-4 w-4" />
					Log in
				</a>
			</div>
		</div>

		<!-- Mobile: login icon + hamburger -->
		<div class="flex items-center gap-2 md:hidden">
			<a
				href={loginUrl}
				class="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition hover:bg-slate-100 hover:text-on-surface"
				aria-label="Log in"
			>
				<User class="h-5 w-5" />
			</a>
			<button
				type="button"
				onclick={toggle}
				class="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-slate-600 transition hover:bg-slate-100 hover:text-on-surface"
				aria-label="Toggle menu"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile dropdown (absolute overlay) -->
	{#if mobileOpen}
		<div
			class="absolute inset-x-0 top-full z-50 border-b border-slate-200 bg-surface-container-lowest px-4 pt-3 pb-5 shadow-lg md:hidden"
		>
			<nav class="flex flex-col gap-1">
				<a
					href={resolve('/')}
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					Home
				</a>
				<div class="px-3 pt-2 pb-1 font-mono text-[10px] font-semibold text-slate-400 uppercase">
					Features
				</div>
				<a
					href={resolve('/features/routing')}
					onclick={close}
					class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
				>
					<Link2 class="h-4 w-4 rotate-45 text-primary-600" />
					<span>URL Routing</span>
				</a>
				<a
					href={resolve('/features/analytics')}
					onclick={close}
					class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
				>
					<BarChart2 class="h-4 w-4 text-indigo-600" />
					<span>Telemetry &amp; Analytics</span>
				</a>
				<a
					href={resolve('/features/management')}
					onclick={close}
					class="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
				>
					<FolderCog class="h-4 w-4 text-amber-800" />
					<span>Link Management</span>
				</a>

				<div class="my-1 border-t border-slate-100"></div>

				<a
					href={resolve('/about')}
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					About
				</a>
				<a
					href={resolve('/contact')}
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					Contact
				</a>
				<a
					href={githubUrl}
					target="_blank"
					rel="noreferrer"
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					GitHub
				</a>
			</nav>
		</div>
	{/if}
</header>
