<script>
	/** @type {import('./$types').PageData} */
	import { goto } from '$app/navigation';
	
	export let data;

	function toYear(params) {
		const destination = params.target.value;
		goto(`/year/${destination}`);
	}
</script>

<div class="flex justify-center">
	<div class="grid w-4/5">
		<h3>What was tuaght is now disproven. A community curated site.</h3>
		<label class="form-control w-full max-w-xs mt-4">
			<div class="label">
				<span class="label-text">Select a year...</span>
			</div>
			<select on:change={toYear} class="select select-bordered w-full max-w-28">
				{#each data.uniqueDates as year}
					<option>
						{year.year}
					</option>
				{/each}
			</select>
		</label>
	</div>
</div>
