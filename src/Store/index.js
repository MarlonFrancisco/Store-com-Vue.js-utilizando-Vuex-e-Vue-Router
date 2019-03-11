import Vue from "vue"
import Vuex from "vuex"
import Agenda from "./modules/agenda/index"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Agenda
	}
})