<template>
	<div>
		<AdicionarContato></AdicionarContato>
		<ListarAgenda></ListarAgenda>
	</div>
</template>

<script>
	import ListarAgenda from "./listarAgenda.vue";
	import AdicionarContato from "./AdicionarContato.vue";

	export default {
		name: "agenda",
		components: {
			ListarAgenda,
			AdicionarContato
		}
	}
</script>

<style lang="sass">
</style>