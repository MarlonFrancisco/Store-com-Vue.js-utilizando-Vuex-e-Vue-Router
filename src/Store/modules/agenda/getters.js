export default {
	listarContatos: estado => {
		return estado.contatos.length == 0 ? [false] : estado.contatos;
	}
}