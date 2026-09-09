<script lang="ts">
	import { Zap, Clock, Key, Download, Check } from 'lucide-svelte';

	let copiedKey = $state(false);

	const PGP_KEY_BLOCK = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: LinkPulse Core Security v1.0
Key-ID: 7DF1E894
Fingerprint: 4E8B 91F3 AC02 7DF1 5A21 99BC 00A1 4C58 E894

mQGNBF8...LinkPulse Core Security Key (RSA 4096-bit)...
-----END PGP PUBLIC KEY BLOCK-----`;

	async function downloadOrCopyKey() {
		try {
			await navigator.clipboard.writeText(PGP_KEY_BLOCK);
			copiedKey = true;
			setTimeout(() => {
				copiedKey = false;
			}, 2000);
		} catch {
			const blob = new Blob([PGP_KEY_BLOCK], { type: 'text/plain' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'linkpulse-security-pgp.asc';
			a.click();
			URL.revokeObjectURL(url);
		}
	}
</script>

<div
	class="space-y-4 rounded-2xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-100 pb-3">
		<div class="flex items-center gap-2">
			<Zap class="h-4 w-4 text-primary-600" />
			<span class="font-mono text-xs font-semibold tracking-wider text-slate-700 uppercase">
				Support &amp; Response SLA
			</span>
		</div>
		<span
			class="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-emerald"
		>
			Live SLA
		</span>
	</div>

	<!-- Response Time Matrix Card -->
	<div class="space-y-1.5 rounded-xl border border-slate-200/70 bg-slate-50 p-3.5">
		<div class="flex items-center justify-between">
			<span class="text-xs font-semibold text-slate-700 sm:text-sm">Response Time Matrix</span>
			<span class="font-mono text-[11px] font-semibold text-accent-emerald">High Priority</span>
		</div>
		<p class="text-xs leading-relaxed text-slate-600">
			Average response: <span class="font-semibold text-slate-900">&lt; 6 hours</span> for bug
			reports &amp; security vulnerabilities;
			<span class="font-semibold text-slate-900">&lt; 12 hours</span> for inquiries.
		</p>
	</div>

	<!-- Timezone & Availability -->
	<div class="space-y-2 pt-1">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-1.5 text-slate-500">
				<Clock class="h-3.5 w-3.5" />
				<span class="font-mono text-[11px] font-semibold text-slate-600 uppercase">
					TIMEZONE / AVAILABILITY
				</span>
			</div>
			<span class="font-mono text-[11px] font-medium text-accent-emerald">
				UTC-8 / Pacific &amp; Remote Sync
			</span>
		</div>

		<div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
			<div class="h-full w-4/5 rounded-full bg-accent-emerald"></div>
		</div>

		<p class="text-[11px] text-slate-500">
			Core overlap: 08:00–18:00 PST. Asynchronous queues monitored 24/7.
		</p>
	</div>

	<!-- PGP Encrypted Key Section -->
	<div
		class="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-slate-600"
	>
		<div class="flex min-w-0 items-center gap-2">
			<Key class="h-4 w-4 shrink-0 text-slate-400" />
			<div class="min-w-0">
				<div class="font-mono text-[10px] leading-none text-slate-400 uppercase">
					PGP Fingerprint
				</div>
				<div class="truncate font-mono text-xs text-slate-700">4E8B 91F3 AC02 7DF1 ... E894</div>
			</div>
		</div>

		<button
			type="button"
			onclick={downloadOrCopyKey}
			class="inline-flex shrink-0 cursor-pointer items-center gap-1 font-mono text-xs font-medium text-primary-600 transition-colors hover:text-primary-700"
		>
			{#if copiedKey}
				<Check class="h-3.5 w-3.5 text-emerald-600" />
				<span class="text-emerald-600">Copied Key</span>
			{:else}
				<span>Download Key</span>
				<Download class="h-3.5 w-3.5" />
			{/if}
		</button>
	</div>
</div>
