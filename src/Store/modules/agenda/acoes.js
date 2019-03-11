export default {
	adicionarContato: function(contexto, valor) {
		contexto.commit('ADD_CONTATO', valor);
	},

	removerContato: function(contexto, valor) {
		contexto.commit("DEL_CONTATO", valor);
	},

	atualizarContato: function(contexto, valor) {
		contexto.commit("UPDATE_CONTATO", valor);
	}
}