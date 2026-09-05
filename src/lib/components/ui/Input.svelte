<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		class: className = '',
		value = '',
		placeholder = '',
		type = 'text',
		...rest
	}: {
		class?: string;
		value?: string;
		placeholder?: string;
		type?: string;
		[key: string]: unknown;
	} = $props();

	let input = $state<HTMLInputElement>();

	export function focus() {
		input?.focus();
	}
</script>

<input
	bind:this={input}
	{type}
	{value}
	{placeholder}
	class={cn(
		'flex h-10 w-full rounded-md border border-slate-200 bg-surface-container-lowest px-3 py-2 text-sm text-on-surface transition-[border-color,box-shadow] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:border-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600/20 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
	{...rest}
/>
