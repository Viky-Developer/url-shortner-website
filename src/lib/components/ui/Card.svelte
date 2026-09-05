<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		class: className = '',
		children,
		...rest
	}: {
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	} = $props();
</script>

<div
	class={cn(
		'rounded-lg border border-slate-200 bg-surface-container-lowest text-on-surface shadow-card transition-shadow',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
