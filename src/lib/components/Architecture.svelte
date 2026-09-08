<script lang="ts">
	import { Network } from 'lucide-svelte';
</script>

<section class="w-full bg-surface-container-low py-16 sm:py-24">
	<div class="mx-auto max-w-300 px-4 sm:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
			<!-- Text Content -->
			<div class="space-y-6 lg:col-span-5">
				<div
					class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider text-primary-600 uppercase"
				>
					<Network class="h-4 w-4" />
					<span>Global Edge Fabric</span>
				</div>
				<h2 class="font-sans text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Constructed for modern low-latency infrastructure.
				</h2>
				<p class="text-sm leading-relaxed text-slate-600 sm:text-base">
					Every shortened link is propagated instantaneously to distributed memory caches across 35
					edge regions. Whether invoked through automated CI pipelines or production mobile apps,
					redirects fire under 2 milliseconds.
				</p>
				<div class="grid grid-cols-2 gap-4 pt-2">
					<div class="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
						<div class="font-mono text-2xl font-bold text-primary-600">35+</div>
						<div class="mt-1 text-xs text-slate-600">Edge PoPs Globally</div>
					</div>
					<div class="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
						<div class="font-mono text-2xl font-bold text-primary-600">&lt; 2ms</div>
						<div class="mt-1 text-xs text-slate-600">Median Redirect Time</div>
					</div>
				</div>
			</div>

			<!-- Image Graphic -->
			<div class="relative lg:col-span-7">
				<div class="overflow-hidden rounded-xl bg-surface-container-lowest p-1 shadow-xl">
					<img
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKh9oQvWUDMRH9J3g-Ijt1I9z1LGr79Bzpk56AIf0XbJY9JPbkOKX1fhAZRf1kd4tTIJNMrHaNGgyPNgVBmDGExOnGF1NvOftUJqwbFHASYJzMMCVNfSXXq2Oeogx75PeqiyxAmkqhqzjBB8a9SA6LAj4fYAxbfvyqaXVEwqkYyBW7m7VTpOsk9YY2nRyM48Ov2_zmjHiAPjoG3Lvjx48JZ8LCtuiHW3lX7ajFL_hstbA_tgKKWFdKA"
						alt="Modern server infrastructure and optical fiber network in a high-tech data center with indigo and purple ambient illumination"
						class="h-80 w-full rounded-lg object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
