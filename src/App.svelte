<script>
	export let name = 'Anthony';
</script>

<main>
	<h1>Coucou <span class="bold">{name}</span> !</h1>
	<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
		<strong class="font-bold">Attention !</strong>
		<span class="block sm:inline">Application en cours de développement.</span>
	</div>
</main>

<style type="text/scss"> 
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;

		.bold {
			font-weight: bold;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>