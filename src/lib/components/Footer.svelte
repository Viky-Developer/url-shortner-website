<script lang="ts">
	import { resolve } from '$app/paths';
	import { Link2 } from 'lucide-svelte';
</script>

<footer class="border-t border-slate-200 bg-surface-container-lowest py-10 text-slate-500 sm:py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
			<a
				href={resolve('/')}
				class="flex items-center gap-2 focus:outline-none"
				aria-label="ShortLink Home"
			>
				<div class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-white">
					<Link2 class="h-3.5 w-3.5 rotate-45" />
				</div>
				<span class="text-sm font-bold tracking-tight text-on-surface">
					Short<span class="text-primary-600">Link</span>
				</span>
			</a>

			<div class="flex items-center gap-4 text-xs">
				<span>© {new Date().getFullYear()} ShortLink</span>
				<span class="h-2 w-2 animate-pulse rounded-full bg-success"></span>
				<span>All edge nodes operational</span>
			</div>
		</div>
	</div>
</footer>
