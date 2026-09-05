<script lang="ts">
	import { ArrowRight, Copy, Link2, Check } from 'lucide-svelte';
	import { Badge, Button, Card, Checkbox, Input, UrlInput } from '$lib/components/ui';

	let subscription = $state(false);
	let terms = $state(true);
	let slug = $state('git-repo');

	// Button interaction state
	let toast = $state('');
	let clickCount = $state(0);
	let copied = $state(false);

	function showToast(message: string) {
		toast = message;
		setTimeout(() => (toast = ''), 2000);
	}

	function handlePrimaryClick() {
		clickCount += 1;
		showToast(`Primary clicked ${clickCount} time${clickCount > 1 ? 's' : ''}`);
	}

	function handleSecondaryClick() {
		showToast('Secondary button clicked');
	}

	function handleDestructiveClick() {
		showToast('Destructive action triggered!');
	}

	function handleCopySlug() {
		copied = true;
		showToast('Slug copied to clipboard!');
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>UI Components Demo — ShortLink</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-12 sm:px-10">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold tracking-tight text-on-surface">
			UI Components <span class="text-primary-600">Library</span>
		</h1>
		<p class="mt-3 text-lg text-slate-600">
			"Modern Hyperlink Engine" design system — click to interact
		</p>
	</header>

	<!-- Toast -->
	{#if toast}
		<div
			class="fixed right-6 bottom-6 z-50 rounded-lg bg-on-surface px-4 py-3 text-sm font-medium text-inverse-on-surface shadow-modal transition-all duration-200"
		>
			{toast}
		</div>
	{/if}

	<div class="space-y-8">
		<!-- Button -->
		<section class="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
			<h2 class="mb-4 font-mono text-sm font-medium tracking-wider text-slate-500 uppercase">
				Button
			</h2>
			<div class="flex flex-wrap items-center gap-3">
				<Button onclick={handlePrimaryClick}
					>Primary {clickCount > 0 ? `(${clickCount})` : ''}</Button
				>
				<Button class="cursor-pointer" variant="secondary" onclick={handleSecondaryClick}
					>Secondary</Button
				>
				<Button variant="ghost" onclick={() => showToast('Ghost clicked')}>Ghost</Button>
				<Button variant="destructive" onclick={handleDestructiveClick}>Destructive</Button>
				<Button variant="link" onclick={() => showToast('Link clicked')}>Link</Button>
				<Button size="sm" onclick={() => showToast('Small button')}>Small</Button>
				<Button size="lg" onclick={() => showToast('Large button')}>Large</Button>
				<Button size="icon" aria-label="Arrow right" onclick={() => showToast('Icon clicked')}
					><ArrowRight class="h-4 w-4" /></Button
				>
				<Button disabled>Disabled</Button>
			</div>
			<p class="mt-3 text-xs text-slate-400">Click any button above to see feedback</p>
		</section>

		<!-- Badge -->
		<section class="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
			<h2 class="mb-4 font-mono text-sm font-medium tracking-wider text-slate-500 uppercase">
				Badge
			</h2>
			<div class="flex flex-wrap items-center gap-3">
				<Badge>Default</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="outline">Outline</Badge>
				<Badge variant="active">Active</Badge>
				<Badge variant="inactive">Inactive</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="destructive">Destructive</Badge>
			</div>
		</section>

		<!-- Input & UrlInput -->
		<section class="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
			<h2 class="mb-4 font-mono text-sm font-medium tracking-wider text-slate-500 uppercase">
				Input & URL Input
			</h2>
			<div class="grid gap-6 sm:grid-cols-2">
				<div>
					<label for="demo-input" class="mb-2 block text-sm font-medium text-slate-700">
						Standard input
					</label>
					<Input
						id="demo-input"
						placeholder="your-email@example.com"
						type="email"
						oninput={(e: Event) => {
							const val = (e.target as HTMLInputElement).value;
							if (val.includes('@')) showToast(`Typed: ${val}`);
						}}
					/>
				</div>
				<div>
					<span class="mb-2 block text-sm font-medium text-slate-700">Short link slug</span>
					<div class="flex gap-2">
						<div class="flex-1">
							<UrlInput bind:value={slug} placeholder="your-link" />
						</div>
						<Button size="icon" variant="secondary" onclick={handleCopySlug}>
							{#if copied}
								<Check class="h-4 w-4 text-success" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</div>
			</div>
		</section>

		<!-- Card -->
		<section class="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
			<h2 class="mb-4 font-mono text-sm font-medium tracking-wider text-slate-500 uppercase">
				Card
			</h2>
			<Card class="max-w-sm">
				<div class="flex flex-col gap-3 p-5">
					<div class="flex items-center gap-2">
						<div
							class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white"
						>
							<Link2 class="h-4 w-4 rotate-45" />
						</div>
						<div class="font-mono text-sm text-slate-700">short.link/{slug || 'slug'}</div>
					</div>
					<div class="text-slate-500">Created just now • 0 clicks</div>
					<div class="flex items-center gap-2">
						<Button
							size="sm"
							variant="secondary"
							onclick={() => showToast(`Copied: short.link/${slug || 'slug'}`)}
						>
							<Copy class="h-3.5 w-3.5" />
							Copy
						</Button>
						<Badge variant="active">Active</Badge>
					</div>
				</div>
			</Card>
		</section>

		<!-- Checkbox -->
		<section class="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
			<h2 class="mb-4 font-mono text-sm font-medium tracking-wider text-slate-500 uppercase">
				Checkbox
			</h2>
			<div class="flex flex-col gap-4">
				<Checkbox bind:checked={subscription} label="Email me product updates" />
				<Checkbox bind:checked={terms} label="Accept terms and conditions" />
				<Checkbox checked={false} disabled label="Disabled option" />
			</div>
			<p class="mt-4 text-sm text-slate-500">
				Subscription: <span class="font-medium text-on-surface">{subscription ? 'on' : 'off'}</span>
				— Terms:
				<span class="font-medium text-on-surface">{terms ? 'accepted' : 'not accepted'}</span>
			</p>
		</section>
	</div>
</div>
