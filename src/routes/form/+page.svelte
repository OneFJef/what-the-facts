<script>
	let fact = '';
</script>

<div class="flex justify-center">
	<form method="POST" action="?/submitFact" class="grid gap-2 w-4/5">
		<h1 class="">Submit a fact.</h1>
		<input
			type="number"
			name="year"
			placeholder="Enter the year..."
			required
			class="input input-bordered"
		/>
		<textarea
			class="textarea textarea-bordered min-h-64"
			bind:value={fact}
			type="text"
			name="fact"
			placeholder="Enter a single fact..."
			required
		></textarea>
		<button class="btn" type="submit">Submit</button>
	</form>
</div>
