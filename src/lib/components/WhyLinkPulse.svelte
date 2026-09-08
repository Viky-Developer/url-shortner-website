<script lang="ts">
	import { Zap, ShieldCheck, Radio, Code2 } from 'lucide-svelte';
</script>

<section class="w-full border-t border-slate-200/60 bg-surface-container-lowest py-16 sm:py-24">
	<div class="mx-auto max-w-[75rem] px-4 sm:px-8">
		<div class="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<div class="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
					Why LinkPulse
				</div>
				<h2 class="mt-2 font-sans text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Speed is not a feature, it is the product.
				</h2>
			</div>
			<p class="max-w-md text-sm text-slate-600 sm:text-base">
				Built from the ground up using Go and Redis to replace sluggish redirect chains with pure
				execution speed.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Benefit 1 -->
			<div class="rounded-xl border border-slate-200/60 bg-surface-container-low p-6 shadow-sm">
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest text-primary-600 shadow-sm"
				>
					<Zap class="h-5 w-5" />
				</div>
				<h4 class="mb-1.5 font-sans text-base font-semibold text-slate-900">Fast redirects</h4>
				<p class="text-xs leading-relaxed text-slate-600">
					&lt; 2ms response times powered by an ultra-lean Go engine and an in-memory distributed
					Redis cache tier.
				</p>
				<div class="mt-4 pt-2 font-mono text-[11px] text-slate-500">P99 SLA: 14ms</div>
			</div>

			<!-- Benefit 2 -->
			<div class="rounded-xl border border-slate-200/60 bg-surface-container-low p-6 shadow-sm">
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest text-accent-purple shadow-sm"
				>
					<ShieldCheck class="h-5 w-5" />
				</div>
				<h4 class="mb-1.5 font-sans text-base font-semibold text-slate-900">
					Secure authentication
				</h4>
				<p class="text-xs leading-relaxed text-slate-600">
					JWT-backed session governance, automated device concurrency limits, and enterprise-grade
					MFA support.
				</p>
				<div class="mt-4 pt-2 font-mono text-[11px] text-slate-500">Zero-trust tokens</div>
			</div>

			<!-- Benefit 3 -->
			<div class="rounded-xl border border-slate-200/60 bg-surface-container-low p-6 shadow-sm">
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest text-accent-emerald shadow-sm"
				>
					<Radio class="h-5 w-5" />
				</div>
				<h4 class="mb-1.5 font-sans text-base font-semibold text-slate-900">
					Real-time click tracking
				</h4>
				<p class="text-xs leading-relaxed text-slate-600">
					Asynchronous event streaming ingests clicks without slowing down the initial user HTTP
					redirect handshake.
				</p>
				<div class="mt-4 pt-2 font-mono text-[11px] text-slate-500">Non-blocking queues</div>
			</div>

			<!-- Benefit 4 -->
			<div class="rounded-xl border border-slate-200/60 bg-surface-container-low p-6 shadow-sm">
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest text-amber-700 shadow-sm"
				>
					<Code2 class="h-5 w-5" />
				</div>
				<h4 class="mb-1.5 font-sans text-base font-semibold text-slate-900">
					Developer-friendly API
				</h4>
				<p class="text-xs leading-relaxed text-slate-600">
					Clean, programmatic REST APIs with scoped keys, rate limiter headers, OpenAPI schemas, and
					SDKs.
				</p>
				<div class="mt-4 pt-2 font-mono text-[11px] text-slate-500">REST + Webhooks</div>
			</div>
		</div>
	</div>
</section>
