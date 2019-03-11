<template>
	<button type="button" class="formButton" v-on:click="remover">Remover</button>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "DeletarContato",
		props: {
			id: {
				required: true,
				default: 0
			}
		},

		methods: {
			...mapActions({
				remove: "removerContato"
			}),
			remover: function() {
				this.remove(this.id);
			}
		}
	}
</script>