<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		prefix = 'dub.sh/',
		class: className = '',
		value = $bindable(''),
		placeholder = 'your-link',
		...rest
	}: {
		prefix?: string;
		class?: string;
		value?: string;
		placeholder?: string;
		[key: string]: unknown;
	} = $props();

	let input = $state<HTMLInputElement>();

	export function focus() {
		input?.focus();
	}
</script>

<div
	class={cn(
		'flex h-11 w-full overflow-hidden rounded-md border border-slate-200 bg-surface-container-lowest transition-[border-color,box-shadow] focus-within:border-primary-600 focus-within:ring-2 focus-within:ring-primary-600/20',
		className
	)}
>
	<span
		class="flex items-center border-r border-slate-200 bg-slate-100 px-3 font-mono text-sm text-slate-500"
	>
		{prefix}
	</span>
	<input
		bind:this={input}
		bind:value
		{placeholder}
		type="text"
		class="h-full min-w-0 flex-1 bg-transparent px-3 py-2 font-mono text-sm text-on-surface placeholder:text-slate-500 focus:outline-none"
		{...rest}
	/>
</div>
