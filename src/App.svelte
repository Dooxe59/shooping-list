<script>
	export let name = 'Anthony';
</script>

<main>
	<h1>Coucou <span class="bold">{name}</span> !</h1>
	<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
		<strong class="font-bold">Attention !</strong>
		<span class="block sm:inline">Application en cours de développement.</span>
		<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
			<svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
		</span>
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