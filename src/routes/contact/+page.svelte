<script lang="ts">
	import {
		ContactHero,
		ContactForm,
		ContactChannels,
		ContactSla,
		ContactFaq
	} from '$lib/components/contact';
</script>

<svelte:head>
	<title>Contact | LinkPulse — Developer Inquiry Gateway</title>
	<meta
		name="description"
		content="Direct message gateway, support SLA matrices, PGP security coordinates, and engineering collaboration channels for LinkPulse."
	/>
</svelte:head>

<section class="relative w-full overflow-hidden bg-surface py-12 sm:py-16">
	<!-- Ambient Background Glows -->
	<div
		class="pointer-events-none absolute inset-0 -z-20 opacity-40"
		style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;"
	></div>
	<div
		class="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-primary-600/5 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 -right-40 -z-10 h-120 w-120 rounded-full bg-primary-container/5 blur-3xl"
	></div>

	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<!-- Hero Section -->
		<ContactHero />

		<!-- 12-Column Responsive Grid -->
		<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
			<!-- Left Column: Form -->
			<div class="lg:col-span-7">
				<ContactForm />
			</div>

			<!-- Right Column: Developer Coordinates & SLA -->
			<div class="space-y-6 lg:col-span-5">
				<ContactChannels />
				<ContactSla />
				<ContactFaq />
			</div>
		</div>
	</div>
</section>
