<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { env } from '$env/dynamic/public';

	const loginUrl: string = env.PUBLIC_LOGIN_URL || '#';
</script>

<section class="w-full bg-surface py-16 sm:py-24">
	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<div
			class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 via-primary-600 to-slate-900 p-8 text-center text-white shadow-2xl sm:p-14 lg:p-20"
		>
			<!-- Ambient Dot Overlay -->
			<div
				class="pointer-events-none absolute inset-0 opacity-10"
				style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 16px 16px;"
			></div>

			<div class="relative z-10 mx-auto max-w-2xl space-y-6">
				<span
					class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 font-mono text-xs font-medium text-white backdrop-blur-sm"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-accent-emerald"></span>
					Instant setup in 60 seconds
				</span>

				<h2 class="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
					Start shortening links today.
				</h2>

				<p class="text-base text-slate-200 sm:text-lg">
					Join developers and modern teams creating smarter, faster, and deeply trackable links.
				</p>

				<div class="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
					<a
						href={loginUrl}
						class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-sans text-sm font-semibold text-slate-900 shadow-md transition-all hover:bg-slate-100 sm:w-auto"
					>
						<span>Create Account</span>
						<ArrowRight class="h-4 w-4" />
					</a>
					<a
						href="#contact"
						class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-sans text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
					>
						<span>Talk to Sales</span>
					</a>
				</div>

				<div class="pt-2 font-mono text-xs text-slate-300">
					Free forever for individual developers • No credit card required
				</div>
			</div>
		</div>
	</div>
</section>
