<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2, ArrowRight, User, Menu, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui';
	import { PUBLIC_GITHUB_URL, PUBLIC_LOGIN_URL } from '$env/static/public';

	let mobileOpen = $state(false);

	function toggle() {
		mobileOpen = !mobileOpen;
	}

	function close() {
		mobileOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-slate-200 bg-surface-container-lowest/80 backdrop-blur-md"
>
	<div class="mx-auto flex h-14 max-w-[75rem] items-center justify-between px-4 sm:px-8">
		<!-- Brand + Status -->
		<div class="flex items-center gap-4">
			<a
				href={resolve('/')}
				class="group flex items-center gap-2.5 transition focus:outline-none"
				aria-label="LinkPulse Home"
			>
				<div
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-md shadow-primary-600/20 transition group-hover:scale-105"
				>
					<Link2 class="h-4 w-4 rotate-45" />
				</div>
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
				<a href={resolve('/demo')} class="transition hover:text-on-surface">Components</a>
				<a href="/#about" class="transition hover:text-on-surface">About</a>
				<a href="/#contact" class="transition hover:text-on-surface">Contact</a>
				<a
					href={PUBLIC_GITHUB_URL}
					target="_blank"
					rel="noreferrer"
					class="transition hover:text-on-surface"
				>
					GitHub
				</a>
			</nav>

			<div class="flex items-center gap-2">
				<a
					href={PUBLIC_LOGIN_URL}
					class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-on-surface"
				>
					<User class="h-4 w-4" />
					Log in
				</a>
				<Button size="sm">
					Get Started
					<ArrowRight class="h-3.5 w-3.5" />
				</Button>
			</div>
		</div>

		<!-- Mobile: login icon + hamburger -->
		<div class="flex items-center gap-2 md:hidden">
			<a
				href={PUBLIC_LOGIN_URL}
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
				<a
					href={resolve('/demo')}
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					Components
				</a>
				<a
					href="/#about"
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					About
				</a>
				<a
					href="/#contact"
					onclick={close}
					class="rounded-md px-3 py-2 text-sm font-medium text-on-surface hover:bg-slate-100"
				>
					Contact
				</a>
				<a
					href={PUBLIC_GITHUB_URL}
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
