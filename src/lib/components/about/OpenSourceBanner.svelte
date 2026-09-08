<script lang="ts">
	import { resolve } from '$app/paths';
	import { env } from '$env/dynamic/public';
	import {
		Star,
		GitFork,
		ShieldCheck,
		GitCommitHorizontal,
		ExternalLink,
		ChevronRight
	} from 'lucide-svelte';

	const githubUrl = env.PUBLIC_GITHUB_URL || '#';
</script>

<section class="w-full py-16 sm:py-24">
	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<div
			class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl sm:p-12"
		>
			<!-- Ambient Indigo Flare -->
			<div
				class="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl"
			></div>

			<div class="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
				<!-- Left Content -->
				<div class="space-y-6 lg:col-span-8">
					<div
						class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 font-mono text-xs font-semibold text-accent-emerald"
					>
						<span class="h-2 w-2 rounded-full bg-accent-emerald"></span>
						<span>100% Free &amp; Open Source Software</span>
					</div>

					<h2 class="text-2xl font-bold tracking-tight text-white sm:text-4xl">
						Inspect the Code. Fork the Architecture.
					</h2>

					<p class="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
						LinkPulse is built in public under the permissive MIT license. Self-host with a single
						docker-compose manifest, contribute PRs, or deploy our bare-metal Go binary directly to
						your own infrastructure edge.
					</p>

					<!-- Stats Counter Row -->
					<div
						class="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-slate-300 sm:gap-8 sm:text-sm"
					>
						<div class="flex items-center gap-1.5">
							<Star class="h-4 w-4 fill-amber-400 text-amber-400" />
							<span class="font-bold text-white">0</span>
							<span class="text-slate-400">Stars</span>
						</div>
						<div class="flex items-center gap-1.5">
							<GitFork class="h-4 w-4 text-slate-400" />
							<span class="font-bold text-white">0</span>
							<span class="text-slate-400">Forks</span>
						</div>
						<div class="flex items-center gap-1.5">
							<ShieldCheck class="h-4 w-4 text-accent-emerald" />
							<span class="font-bold text-white">MIT</span>
							<span class="text-slate-400">License</span>
						</div>
						<div class="flex items-center gap-1.5">
							<GitCommitHorizontal class="h-4 w-4 text-primary-400" />
							<span class="font-bold text-white">30</span>
							<span class="text-slate-400">Commits</span>
						</div>
					</div>
				</div>

				<!-- Right CTAs -->
				<div class="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-primary-500 hover:shadow-primary-500/25 active:scale-95"
					>
						<svg aria-hidden="true" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							></path>
						</svg>
						<span>View Source Code</span>
						<ExternalLink class="h-4 w-4" />
					</a>

					<a
						href={resolve('/')}
						class="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white sm:text-sm"
					>
						<span>Have custom infra requirements? Contact us</span>
						<ChevronRight class="h-3.5 w-3.5" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
