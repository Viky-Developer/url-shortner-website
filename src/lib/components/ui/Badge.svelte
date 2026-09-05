<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		variant = 'default',
		class: className = '',
		children,
		...rest
	}: {
		variant?:
			'default' | 'secondary' | 'outline' | 'active' | 'inactive' | 'success' | 'destructive';
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	} = $props();

	const variants: Record<string, string> = {
		default: 'bg-primary-100 text-primary-800 border border-primary-200',
		secondary: 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200',
		outline: 'bg-transparent text-slate-600 border border-slate-200',
		active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
		inactive: 'bg-slate-50 text-slate-500 border border-slate-200',
		success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
		destructive: 'bg-rose-50 text-rose-600 border border-rose-100'
	};
</script>

<span
	class={cn(
		'inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[0.6875rem] font-medium tracking-wider whitespace-nowrap uppercase',
		variants[variant],
		className
	)}
	{...rest}
>
	{@render children?.()}
</span>
