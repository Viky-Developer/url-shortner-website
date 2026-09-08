<script lang="ts">
	import { resolve } from '$app/paths';
	import { env } from '$env/dynamic/public';

	const logoUrl = env.PUBLIC_LOGO_URL || '/logo.svg';
	const githubUrl = env.PUBLIC_GITHUB_URL || '#';
</script>

<footer class="w-full border-t border-slate-200 bg-surface-container-lowest font-sans">
	<div class="mx-auto max-w-300 px-4 py-12 sm:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-10 md:grid-cols-12">
			<!-- Brand + Stack Tags -->
			<div class="space-y-4 md:col-span-5">
				<a
					href={resolve('/')}
					class="flex items-center gap-2 focus:outline-none"
					aria-label="LinkPulse Home"
				>
					<img src={logoUrl} alt="LinkPulse Logo" class="h-7 w-7 rounded-lg object-contain" />
					<span class="text-base font-bold tracking-tight text-slate-900">
						Link<span class="text-primary-600">Pulse</span>
					</span>
				</a>
				<p class="max-w-sm text-xs leading-relaxed text-slate-600 sm:text-sm">
					High-performance link infrastructure and telemetry for modern engineering teams. Real-time
					click stream processing, deterministic vanity routing, and custom domain edges.
				</p>
				<div class="flex flex-wrap items-center gap-1.5 pt-2">
					<span
						class="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
					>
						Built with Go
					</span>
					<span
						class="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
					>
						PostgreSQL
					</span>
					<span
						class="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
					>
						Redis
					</span>
					<span
						class="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
					>
						SvelteKit 5
					</span>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="space-y-3 md:col-span-3 md:col-start-7">
				<div class="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
					Navigation
				</div>
				<ul class="space-y-2 text-xs text-slate-600 sm:text-sm">
					<li>
						<a href={resolve('/')} class="transition hover:text-slate-900">Home</a>
					</li>
					<li>
						<a href={resolve('/about')} class="transition hover:text-slate-900">About</a>
					</li>
					<li>
						<a href="/#contact" class="transition hover:text-slate-900">Contact</a>
					</li>
					<li>
						<a
							href={githubUrl}
							target="_blank"
							rel="noreferrer"
							class="transition hover:text-slate-900"
						>
							GitHub
						</a>
					</li>
				</ul>
			</div>

			<!-- Platform Health Widget -->
			<div class="space-y-3 md:col-span-3">
				<div class="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
					Platform Health
				</div>
				<div class="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
					<div class="flex items-center justify-between">
						<span class="text-slate-600">Edge Network</span>
						<span class="font-mono font-medium text-accent-emerald">Operational</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-slate-600">Redirect P99</span>
						<span class="font-mono font-semibold text-slate-900">14ms</span>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-slate-600">Availability</span>
						<span class="font-mono font-semibold text-slate-900">99.99%</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright Footer Bar -->
		<div
			class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-600 sm:flex-row"
		>
			<div>© {new Date().getFullYear()} LinkPulse URL Shortener. All rights reserved.</div>
			<div class="font-mono text-[11px] text-slate-400">v1.0.4-prod (rev 7f94c2e)</div>
		</div>
	</div>
</footer>
