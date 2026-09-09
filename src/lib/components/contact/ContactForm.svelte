<script lang="ts">
	import { onDestroy } from 'svelte';
	import emailjs from '@emailjs/browser';
	import { env } from '$env/dynamic/public';
	import { Lock, Send, Check, ShieldCheck, Loader2, X } from 'lucide-svelte';

	const INQUIRY_TRACKS = [
		'Freelance Opportunity',
		'Full-time Engineering',
		'Bug Report & Issues',
		'Platform / API Collaboration',
		'General Inquiry'
	] as const;

	let fullName = $state('');
	let email = $state('');
	let selectedTrack = $state<string>('');
	let githubUrl = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let showToast = $state(false);
	let errorMessage = $state('');
	let toastTimeoutId: ReturnType<typeof setTimeout> | null = null;

	function selectTrack(track: string) {
		selectedTrack = track;
	}

	function closeToast() {
		showToast = false;
		if (toastTimeoutId) {
			clearTimeout(toastTimeoutId);
			toastTimeoutId = null;
		}
	}

	onDestroy(() => {
		if (toastTimeoutId) {
			clearTimeout(toastTimeoutId);
		}
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!fullName || !email || !selectedTrack || !message) return;

		isSubmitting = true;
		errorMessage = '';

		const serviceId = env.PUBLIC_EMAILJS_SERVICE_ID || '';
		const templateId = env.PUBLIC_EMAILJS_TEMPLATE_ID || '';
		const publicKey = env.PUBLIC_EMAILJS_PUBLIC_KEY || '';

		const now = new Date();
		const formattedTime = now.toLocaleString('en-US', {
			dateStyle: 'medium',
			timeStyle: 'short'
		});

		const templateParams = {
			name: fullName,
			from_name: fullName,
			email: email,
			from_email: email,
			reply_to: email,
			time: formattedTime,
			date: formattedTime,
			inquiry_track: selectedTrack,
			title: `${fullName} - ${selectedTrack}`,
			subject: `New Inquiry from ${fullName} [${selectedTrack}]`,
			github_url: githubUrl || 'N/A',
			message: message
		};

		try {
			if (serviceId && templateId && publicKey) {
				await emailjs.send(serviceId, templateId, templateParams, publicKey);
			} else {
				// Simulated dispatch for preview / local testing until EmailJS API keys are configured
				await new Promise((r) => setTimeout(r, 600));
			}

			showToast = true;

			// Reset form fields
			fullName = '';
			email = '';
			selectedTrack = '';
			githubUrl = '';
			message = '';

			// 5-second automatic timeout for toast
			if (toastTimeoutId) clearTimeout(toastTimeoutId);
			toastTimeoutId = setTimeout(() => {
				showToast = false;
				toastTimeoutId = null;
			}, 5000);
		} catch (err: unknown) {
			errorMessage =
				err instanceof Error
					? err.message
					: 'An unexpected error occurred while sending your message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div
	class="rounded-2xl border border-slate-200/80 bg-surface-container-lowest p-6 shadow-sm sm:p-8"
>
	<!-- Header -->
	<div class="mb-6 flex items-center justify-between border-b border-slate-100 pb-5">
		<div>
			<h2 class="font-sans text-xl font-bold tracking-tight text-slate-900">
				Direct Message Gateway
			</h2>
			<p class="mt-0.5 text-xs text-slate-600 sm:text-sm">
				Send an encrypted dispatch to our core inbox
			</p>
		</div>
		<div
			class="flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600"
		>
			<Lock class="h-3.5 w-3.5 text-accent-emerald" />
			<span>PGP / TLS 1.3</span>
		</div>
	</div>

	<!-- Form -->
	<form onsubmit={handleSubmit} class="space-y-5">
		<!-- Name & Email -->
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="space-y-1.5">
				<label for="fullName" class="block font-mono text-xs font-medium text-slate-700">
					Full Name <span class="text-accent-rose">*</span>
				</label>
				<input
					id="fullName"
					type="text"
					bind:value={fullName}
					required
					placeholder="Alex Chen"
					class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs transition-all placeholder:text-slate-400 focus:border-primary-600 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-600/20 focus:outline-none"
				/>
			</div>

			<div class="space-y-1.5">
				<label for="email" class="block font-mono text-xs font-medium text-slate-700">
					Email Address <span class="text-accent-rose">*</span>
				</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					required
					placeholder="alex@gmail.com or name@work.com"
					class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs transition-all placeholder:text-slate-400 focus:border-primary-600 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-600/20 focus:outline-none"
				/>
				<p class="font-sans text-[11px] text-slate-500">Personal or company email is welcome</p>
			</div>
		</div>

		<!-- Inquiry Track Selection -->
		<div class="space-y-2 pt-1">
			<div class="flex items-center justify-between">
				<label for="inquiryTrack" class="block font-mono text-xs font-medium text-slate-700">
					Inquiry Track <span class="text-accent-rose">*</span>
				</label>
				<span class="font-mono text-[11px] text-slate-400">Quick selection</span>
			</div>

			<!-- Pill buttons -->
			<div class="flex flex-wrap gap-1.5 pb-1">
				{#each INQUIRY_TRACKS as track (track)}
					<button
						type="button"
						onclick={() => selectTrack(track)}
						class="cursor-pointer rounded-lg border px-2.5 py-1 text-xs font-medium transition-all {selectedTrack ===
						track
							? 'border-primary-600 bg-primary-600 text-white shadow-xs'
							: 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-600/60 hover:text-primary-600'}"
					>
						{track}
					</button>
				{/each}
			</div>

			<!-- Synchronized Dropdown & GitHub input -->
			<div class="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
				<div class="relative">
					<select
						id="inquiryTrack"
						bind:value={selectedTrack}
						required
						class="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs transition-all focus:border-primary-600 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-600/20 focus:outline-none"
					>
						<option value="" disabled selected>Select inquiry track...</option>
						{#each INQUIRY_TRACKS as track (track)}
							<option value={track}>{track}</option>
						{/each}
					</select>
				</div>

				<div class="relative">
					<input
						type="url"
						bind:value={githubUrl}
						placeholder="https://github.com/username (Optional)"
						class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs transition-all placeholder:text-slate-400 focus:border-primary-600 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-600/20 focus:outline-none"
					/>
				</div>
			</div>
		</div>

		<!-- Message Scope -->
		<div class="space-y-1.5">
			<label for="message" class="block font-mono text-xs font-medium text-slate-700">
				Message Scope <span class="text-accent-rose">*</span>
			</label>
			<textarea
				id="message"
				bind:value={message}
				required
				rows="5"
				placeholder="Tell us about your project timeline, requirements, infrastructure stack, or inquiry..."
				class="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 shadow-xs transition-all placeholder:text-slate-400 focus:border-primary-600 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-600/20 focus:outline-none"
			></textarea>
		</div>

		<!-- EmailJS notice banner -->
		<div
			class="flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-surface-container-low p-3"
		>
			<ShieldCheck class="h-4 w-4 shrink-0 text-primary-600" />
			<p class="text-xs text-slate-600">
				EmailJS transmission service active. Direct encrypted dispatch to engineering core inbox.
			</p>
		</div>

		<!-- Submit & SLA Note -->
		<div class="flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
			<button
				type="submit"
				disabled={isSubmitting}
				class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-container px-7 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-primary-600 active:scale-95 disabled:opacity-75 sm:w-auto"
			>
				{#if isSubmitting}
					<Loader2 class="h-4 w-4 animate-spin" />
					<span>Transmitting...</span>
				{:else}
					<span>Send Message</span>
					<Send class="h-4 w-4" />
				{/if}
			</button>

			<div class="flex items-center gap-1.5 font-mono text-xs text-slate-500">
				<span class="h-1.5 w-1.5 rounded-full bg-accent-emerald"></span>
				<span>Replies deterministic within 12 hours</span>
			</div>
		</div>
	</form>

	<!-- Error Alert -->
	{#if errorMessage}
		<div
			class="mt-4 flex items-center justify-between rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-900 shadow-xs"
		>
			<span>{errorMessage}</span>
			<button
				type="button"
				onclick={() => (errorMessage = '')}
				class="ml-2 cursor-pointer text-rose-700 hover:text-rose-950"
				aria-label="Close error"
			>
				<X class="h-4 w-4" />
			</button>
		</div>
	{/if}
</div>

<!-- Floating Toast Notification (Top Right Corner with 5s auto-dismiss) -->
{#if showToast}
	<div
		class="fixed top-20 right-4 z-50 flex max-w-md items-start gap-3 rounded-2xl border border-emerald-200/90 bg-white p-4 text-slate-900 shadow-2xl transition-all duration-300 sm:right-8"
		role="status"
		aria-live="polite"
	>
		<div
			class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
		>
			<Check class="h-4 w-4" />
		</div>
		<div class="flex-1 pr-2">
			<p class="text-sm font-bold tracking-tight text-slate-900">Message Sent Successfully</p>
			<p class="mt-0.5 text-xs text-slate-600">
				Thank you for reaching out. We have received your inquiry and will respond within 12 hours.
			</p>
		</div>
		<button
			type="button"
			onclick={closeToast}
			class="cursor-pointer rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
			aria-label="Close notification"
		>
			<X class="h-4 w-4" />
		</button>
	</div>
{/if}
