<template>
	<div id="adicionarContato">
		<input type="text" v-model="nome"><br>
		<button type="button" class="btn" @click="cadastrar">Cadastrar</button>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "adicionarContato",
		data() {
			return {
				nome: ""
			}
		},

		methods: {
			...mapActions({
				add: "adicionarContato"
			}),
			cadastrar: function() {
				this.add(this.nome);
				this.nome = "";
			}
		},
	}
</script>

<style lang="sass">
	#adicionarContato
		width: 100%
		display: flex
		justify-content: center
		align-items: center
		margin: 40px 0
</style>