<template>
	<div class="updatecontato">
		<button type="button" v-on:click="showCaixa">Atualizar Contato</button>

		<div class="caixa_update">
			<input type="text" v-model="nome">
			<button type="button" @click="update">Atualizar</button>
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "updateContato",

		props: ['id'],

		data() {
			return {
				nome: "",
				open: false
			}
		},

		methods: {

			...mapActions({
				atualizar: "atualizarContato"
			}),

			showCaixa() {
				this.estadoCaixa();
			},

			estadoCaixa() {

				let caixa = document.querySelector(".caixa_update");
				this.open = !this.open;

				caixa.style.display = this.open ? 'block' : "none";
				caixa.style.opacity = this.open ? '1' : '0';

			},

			update() {
				this.estadoCaixa();
				this.atualizar({id: this.id, nome: this.nome});
			}
		}
	}
</script>

<style lang="sass">
	.updatecontato
		margin: 10px
		display: flex
		align-items: center
		justify-content: center
	.caixa_update
		display: none
		opacity: 0
		transition: .5s
</style>