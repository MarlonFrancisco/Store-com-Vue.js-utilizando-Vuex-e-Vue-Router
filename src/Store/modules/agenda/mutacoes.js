export default {
	ADD_CONTATO: function(estado, valor) {

		let data = {};

		let maiorId = 0;

		estado.contatos.forEach(value => {
			maiorId = value.id > maiorId ? value.id : maiorId;
		});

		data["nome"] = valor;
		data["id"] = maiorId + 1;

		estado.contatos.push(data);
	},

	DEL_CONTATO: function(estado, valor) {
		let pos;

		estado.contatos.forEach((value, index) => {
			if(value.id == valor) {
				pos = index;
			}
		});

		estado.contatos.splice(pos, 1);
	},

	UPDATE_CONTATO: function(estado, valor) {
		estado.contatos.forEach((contato, index) => {
			if(valor.id == contato.id) {
				estado.contatos[index].nome = valor.nome;
				console.log('for');
			}
		});
	}
}