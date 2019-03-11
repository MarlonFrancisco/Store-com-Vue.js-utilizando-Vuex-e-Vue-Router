<template>
	<div class="listar">
		<h1>Contatos {{ lista }}</h1>
		<ul>
			<li v-for="contato in contatos">
				<div v-if="contato != false">
					{{ contato | transformJson }}
					<DeletarContato :id="contato.id"></DeletarContato>
					<AtualizarContato :id="contato.id"></AtualizarContato>
				</div>

				<div v-if="contato == false">
					Lista de contatos Vazia!
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import DeletarContato from "./DeletarContato.vue";
	import AtualizarContato from "./AtualizarContato.vue";

	import {mapState} from "vuex";
	import {mapGetters} from "vuex";

	export default {
		name: "listarAgenda",
		components: {DeletarContato, AtualizarContato},
		data() {
			return {

			}
		},

		computed: {
			...mapGetters({
				contatos: 'listarContatos'
			}),

			...mapState(['listarContatos'])
		},

		filters: {
			transformJson(valor) {
				return `Nome: ${valor.nome} - Id: ${valor.id}`;
			}
		}
	}
</script>

<style lang="sass">
	.listar	
		width: 100%
		display: flex
		justify-content: center
		flex-direction: column
		align-items: center

		h1
			margin-bottom: 20px
		ul
			li
				list-style: none
				margin-bottom: 40px
				button
					padding: 10px
					margin: 0 10px

				&:first-child
					margin-right: 10px

</style>