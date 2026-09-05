<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2, ArrowRight, User } from 'lucide-svelte';
	import { Button } from '$lib/components/ui';
	import { PUBLIC_GITHUB_URL, PUBLIC_LOGIN_URL } from '$env/static/public';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-slate-200 bg-surface-container-lowest/80 backdrop-blur-md"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<!-- Brand + Status -->
		<div class="flex items-center gap-4">
			<a
				href={resolve('/')}
				class="group flex items-center gap-2.5 transition focus:outline-none"
				aria-label="LinkPulse Home"
			>
				<div
					class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white shadow-md shadow-primary-600/20 transition group-hover:scale-105"
				>
					<Link2 class="h-5 w-5 rotate-45" />
				</div>
				<div class="flex items-center gap-2">
					<span class="text-base font-bold tracking-tight text-on-surface sm:text-lg">
						Link<span class="text-primary-600">Pulse</span>
					</span>
					<span
						class="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-slate-500"
					>
						v1.0
					</span>
				</div>
			</a>

			<!-- API Status -->
			<div class="hidden items-center gap-1.5 text-xs text-slate-500 sm:flex">
				<span class="h-1.5 w-1.5 rounded-full bg-success"></span>
				<span>API Online • 99.99% uptime</span>
			</div>
		</div>

		<!-- Nav + Actions -->
		<div class="flex items-center gap-6">
			<nav class="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
				<a href={resolve('/')} class="transition hover:text-on-surface"> Home </a>
				<a href={resolve('/demo')} class="transition hover:text-on-surface"> Components </a>
				<a href={resolve('/#about')} class="transition hover:text-on-surface"> About </a>
				<a href={resolve('/#contact')} class="transition hover:text-on-surface"> Contact </a>
				<a
					href={PUBLIC_GITHUB_URL}
					target="_blank"
					rel="noreferrer"
					class="transition hover:text-on-surface"
				>
					GitHub
				</a>
			</nav>

			<div class="flex items-center gap-3">
				<a
					href={PUBLIC_LOGIN_URL}
					class="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-on-surface sm:inline-flex"
				>
					<User class="h-4 w-4" />
					Log in
				</a>
				<Button size="sm" class="cursor-pointer">
					Get Started
					<ArrowRight class="h-3.5 w-3.5" />
				</Button>
			</div>
		</div>
	</div>
</header>
