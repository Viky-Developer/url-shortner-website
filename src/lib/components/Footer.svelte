<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2 } from 'lucide-svelte';
</script>

<footer class="border-t border-neutral-800/80 bg-neutral-950 py-12 text-neutral-400 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 md:grid-cols-5">
			<!-- Brand Column -->
			<div class="col-span-2">
				<a
					href={resolve('/')}
					class="flex items-center gap-2.5 focus:outline-none"
					aria-label="ShortLink Home"
				>
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm"
					>
						<Link2 class="h-4 w-4 rotate-45" />
					</div>
					<span class="text-base font-bold tracking-tight text-white">
						Short<span class="text-indigo-400">Link</span>
					</span>
				</a>

				<p class="mt-4 max-w-sm text-xs leading-relaxed text-neutral-400">
					Enterprise-grade URL shortening, branded link domains, and real-time edge analytics
					engineered for high-performance marketing and development teams.
				</p>

				<div class="mt-6 flex items-center gap-4 text-neutral-400">
					<a
						href="https://github.com/Viky-Developer/url-shortner-website"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-white"
						aria-label="GitHub Repository"
					>
						<!-- GitHub SVG -->
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-white"
						aria-label="Twitter Profile"
					>
						<!-- X / Twitter SVG -->
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						class="transition hover:text-white"
						aria-label="LinkedIn Profile"
					>
						<!-- LinkedIn SVG -->
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Product Links -->
			<div>
				<h4 class="text-xs font-semibold tracking-wider text-neutral-200 uppercase">Product</h4>
				<ul class="mt-4 space-y-2.5 text-xs">
					<li>
						<a href={resolve('/features')} class="transition hover:text-white"> Features </a>
					</li>
					<li>
						<a href={resolve('/pricing')} class="transition hover:text-white"> Pricing </a>
					</li>
					<li>
						<a href={resolve('/features')} class="transition hover:text-white"> Branded Domains </a>
					</li>
					<li>
						<a href={resolve('/features')} class="transition hover:text-white">
							Dynamic QR Codes
						</a>
					</li>
				</ul>
			</div>

			<!-- Resources Links -->
			<div>
				<h4 class="text-xs font-semibold tracking-wider text-neutral-200 uppercase">Resources</h4>
				<ul class="mt-4 space-y-2.5 text-xs">
					<li>
						<a href={resolve('/faq')} class="transition hover:text-white"> Help & FAQ </a>
					</li>
					<li>
						<a
							href="https://github.com/Viky-Developer/url-shortner-website"
							target="_blank"
							rel="noreferrer"
							class="transition hover:text-white"
						>
							API Docs
						</a>
					</li>
					<li>
						<a href={resolve('/faq')} class="transition hover:text-white"> Security & GDPR </a>
					</li>
				</ul>
			</div>

			<!-- Company & Legal Links -->
			<div>
				<h4 class="text-xs font-semibold tracking-wider text-neutral-200 uppercase">Company</h4>
				<ul class="mt-4 space-y-2.5 text-xs">
					<li>
						<a href={resolve('/pricing')} class="transition hover:text-white"> Contact Sales </a>
					</li>
					<li>
						<a href={resolve('/faq')} class="transition hover:text-white"> Privacy Policy </a>
					</li>
					<li>
						<a href={resolve('/faq')} class="transition hover:text-white"> Terms of Service </a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Footer Bottom Bar -->
		<div
			class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/80 pt-8 text-xs text-neutral-500 sm:flex-row"
		>
			<p>© {new Date().getFullYear()} ShortLink. All rights reserved.</p>
			<div class="flex items-center gap-2">
				<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
				<span class="text-neutral-400">All edge nodes operational (99.99%)</span>
			</div>
		</div>
	</div>
</footer>
