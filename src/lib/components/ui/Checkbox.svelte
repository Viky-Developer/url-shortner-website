<script lang="ts">
	import { Check } from 'lucide-svelte';
	import { cn } from '$lib/utils/cn';

	let {
		checked = $bindable(false),
		disabled = false,
		class: className = '',
		label = '',
		onchange,
		...rest
	}: {
		checked?: boolean;
		disabled?: boolean;
		class?: string;
		label?: string;
		onchange?: (checked: boolean) => void;
		[key: string]: unknown;
	} = $props();

	function handleChange(event: Event) {
		const target = event.currentTarget as HTMLInputElement;
		checked = target.checked;
		onchange?.(checked);
	}

	let indicatorClass = $derived(
		checked
			? 'border-primary-600 bg-primary-600 text-white'
			: 'border-slate-300 bg-white text-transparent'
	);
</script>

<label
	class={cn(
		'inline-flex cursor-pointer items-center gap-2',
		disabled && 'cursor-not-allowed opacity-50',
		className
	)}
>
	<input type="checkbox" {checked} {disabled} onchange={handleChange} class="sr-only" {...rest} />
	<span
		class={cn(
			'flex h-4 w-4 items-center justify-center rounded border transition-colors',
			indicatorClass
		)}
	>
		<Check class="h-3 w-3" />
	</span>
	{#if label}
		<span class="text-sm text-slate-700">{label}</span>
	{/if}
</label>
