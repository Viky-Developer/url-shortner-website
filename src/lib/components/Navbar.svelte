<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2, Menu, X, ArrowRight, Sparkles } from 'lucide-svelte';

	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
		<!-- Brand Logo -->
		<a
			href={resolve('/')}
			class="group flex items-center gap-2.5 transition focus:outline-none"
			aria-label="ShortLink Home"
		>
			<div
				class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20 transition group-hover:scale-105"
			>
				<Link2 class="h-5 w-5 rotate-45" />
			</div>
			<div class="flex flex-col">
				<span class="text-base font-bold tracking-tight text-white sm:text-lg">
					Short<span class="text-indigo-400">Link</span>
				</span>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-8 md:flex">
			<a
				href={resolve('/features')}
				class="text-sm font-medium text-neutral-300 transition hover:text-white"
			>
				Features
			</a>
			<a
				href={resolve('/pricing')}
				class="text-sm font-medium text-neutral-300 transition hover:text-white"
			>
				Pricing
			</a>
			<a
				href={resolve('/faq')}
				class="text-sm font-medium text-neutral-300 transition hover:text-white"
			>
				FAQ
			</a>
			<a
				href="https://github.com/Viky-Developer/url-shortner-website"
				target="_blank"
				rel="noreferrer"
				class="text-sm font-medium text-neutral-400 transition hover:text-white"
			>
				GitHub
			</a>
		</nav>

		<!-- Desktop Action Buttons -->
		<div class="hidden items-center gap-3 md:flex">
			<a
				href={resolve('/pricing')}
				class="rounded-lg px-3.5 py-1.5 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800/60 hover:text-white"
			>
				Sign In
			</a>
			<a
				href={resolve('/pricing')}
				class="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
			>
				<span>Get Started</span>
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			type="button"
			onclick={toggleMenu}
			class="inline-flex items-center justify-center rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white md:hidden"
			aria-expanded={isMobileMenuOpen}
			aria-label="Toggle navigation menu"
		>
			{#if isMobileMenuOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isMobileMenuOpen}
		<div class="border-b border-neutral-800 bg-neutral-950 px-4 pt-2 pb-6 md:hidden">
			<div class="flex flex-col space-y-3">
				<a
					href={resolve('/features')}
					onclick={closeMenu}
					class="rounded-md px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900"
				>
					Features
				</a>
				<a
					href={resolve('/pricing')}
					onclick={closeMenu}
					class="rounded-md px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900"
				>
					Pricing
				</a>
				<a
					href={resolve('/faq')}
					onclick={closeMenu}
					class="rounded-md px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900"
				>
					FAQ
				</a>
				<a
					href="https://github.com/Viky-Developer/url-shortner-website"
					target="_blank"
					rel="noreferrer"
					class="rounded-md px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white"
				>
					GitHub Repo
				</a>
				<div class="pt-2">
					<a
						href={resolve('/pricing')}
						onclick={closeMenu}
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow"
					>
						<span>Get Started Free</span>
						<ArrowRight class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
