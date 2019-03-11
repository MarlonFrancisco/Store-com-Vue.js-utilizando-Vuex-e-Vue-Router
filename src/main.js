import Vue from 'vue'
import App from './App.vue'
import store from "./Store/index"
import vueRouter from "vue-router"
import Agenda from "./Agenda.vue"
import Index from './Index.vue'

Vue.use(vueRouter)

const router = new vueRouter({
	mode: "history",
	routes: [
		{path: "/", 				component: Index},
		{path: "/agenda", 			component: Agenda}
	]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
