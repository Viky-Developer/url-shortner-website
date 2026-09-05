<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let {
		variant = 'primary',
		size = 'default',
		type = 'button',
		class: className = '',
		children,
		...rest
	}: {
		variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'link';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	} = $props();

	const variants: Record<string, string> = {
		primary:
			'bg-primary-600 text-white font-medium shadow-sm hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:outline-none [box-shadow:inset_0_1px_0_rgba(255,255,255,0.2)]',
		secondary:
			'border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:outline-none',
		ghost:
			'text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:outline-none',
		destructive:
			'bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:outline-none',
		link: 'text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none'
	};

	const sizes: Record<string, string> = {
		default: 'h-10 px-4 py-2 text-sm',
		sm: 'h-8 rounded-md px-3 text-sm',
		lg: 'h-11 rounded-lg px-8 text-base',
		icon: 'h-10 w-10 rounded-md'
	};
</script>

<button
	{type}
	class={cn(
		'inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-150 hover:scale-[1.03] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100',
		variants[variant],
		sizes[size],
		className
	)}
	{...rest}
>
	{@render children?.()}
</button>
