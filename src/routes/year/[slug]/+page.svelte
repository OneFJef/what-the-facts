<script>
	/** @type {import('./$types').PageData} */
	import { base } from '$app/paths';

	export let data;
</script>

<div class="flex justify-center">
	<div class="grid w-4/5">
		<div class="breadcrumbs text-sm mb-2">
			<ul>
				<li><a href="{base}/">Home</a></li>
				<li>{data.year}</li>
			</ul>
		</div>
		<ul class="list-disc">
			{#each data.facts as facts}
				<li class="my-1">{facts.fact}</li>
			{/each}
		</ul>
	</div>
</div>
