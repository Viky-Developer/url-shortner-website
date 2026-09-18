<script lang="ts">
	import { Mail, Bug, MessageSquare, Briefcase, Copy, Check, ArrowUpRight } from 'lucide-svelte';
	import { env } from '$env/dynamic/public';

	const emailAddress = 'contact@linkpulse.dev';
	const githubUrl = env.PUBLIC_GITHUB_URL || '#';

	let copied = $state(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(emailAddress);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			window.location.href = `mailto:${emailAddress}`;
		}
	}
</script>

<div
	class="space-y-4 rounded-2xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-100 pb-3">
		<span class="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
			Direct Coordinates &amp; Channels
		</span>
		<span class="font-mono text-[11px] text-slate-500">v1.0 Router</span>
	</div>

	<!-- Channels List -->
	<div class="space-y-3">
		<!-- Email Card with Copy -->
		<div
			class="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-3 transition-colors hover:bg-slate-100/90"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary-600"
				>
					<Mail class="h-4 w-4" />
				</div>
				<div class="min-w-0">
					<div class="font-mono text-[10px] font-semibold text-slate-500 uppercase">
						Electronic Mail
					</div>
					<div class="truncate font-mono text-xs font-medium text-slate-900 sm:text-sm">
						{emailAddress}
					</div>
				</div>
			</div>

			<button
				type="button"
				onclick={copyEmail}
				title="Copy email address"
				class="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-200 bg-surface-container-lowest px-2.5 py-1.5 font-mono text-xs text-slate-700 shadow-xs transition-colors hover:bg-slate-100 hover:text-slate-900"
			>
				{#if copied}
					<Check class="h-3.5 w-3.5 text-emerald-600" />
					<span class="text-[11px] font-semibold text-emerald-600">Copied</span>
				{:else}
					<Copy class="h-3.5 w-3.5 text-slate-500" />
					<span class="hidden text-[11px] sm:inline">Copy</span>
				{/if}
			</button>
		</div>

		<!-- GitHub Issues & Discussions -->
		<a
			href={githubUrl}
			target="_blank"
			rel="noreferrer"
			class="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-3 transition-colors hover:bg-slate-100/90"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-800"
				>
					<Bug class="h-4 w-4" />
				</div>
				<div class="min-w-0">
					<div class="font-mono text-[10px] font-semibold text-slate-500 uppercase">
						GitHub Discussions / Issues
					</div>
					<div class="truncate font-mono text-xs font-medium text-slate-900 sm:text-sm">
						github.com/linkpulse/issues
					</div>
				</div>
			</div>
			<ArrowUpRight class="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-900" />
		</a>

		<!-- Community Discord & Slack -->
		<a
			href="https://discord.gg"
			target="_blank"
			rel="noreferrer"
			class="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-3 transition-colors hover:bg-slate-100/90"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div
					class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple"
				>
					<MessageSquare class="h-4 w-4" />
				</div>
				<div class="min-w-0">
					<div class="font-mono text-[10px] font-semibold text-slate-500 uppercase">
						Community Discord &amp; Slack
					</div>
					<div class="truncate font-mono text-xs font-medium text-slate-900 sm:text-sm">
						linkpulse.dev/community
					</div>
				</div>
			</div>
			<ArrowUpRight class="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-900" />
		</a>

		<!-- LinkedIn Profile -->
		<a
			href="https://linkedin.com"
			target="_blank"
			rel="noreferrer"
			class="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-3 transition-colors hover:bg-slate-100/90"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div
					class="bg-secondary-container flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-container"
				>
					<Briefcase class="h-4 w-4" />
				</div>
				<div class="min-w-0">
					<div class="font-mono text-[10px] font-semibold text-slate-500 uppercase">
						LinkedIn Profile
					</div>
					<div class="truncate font-mono text-xs font-medium text-slate-900 sm:text-sm">
						linkedin.com/in/developer-profile
					</div>
				</div>
			</div>
			<ArrowUpRight class="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-900" />
		</a>
	</div>
</div>
