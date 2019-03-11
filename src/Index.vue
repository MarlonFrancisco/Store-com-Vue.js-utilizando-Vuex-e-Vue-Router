<template>
	<div id="index">
		<h1>Pequena aplicação ultilizando o Framework Vue.js</h1>

		<p>
			Crud ultilizando Store da biblioteca Vuex, em conjunto com a biblioteca de rotas vue-router do vue
		</p>
	</div>
</template>

<script></script>

<style lang='sass'>
	#index
		width: 100%
		height: 60%
		display: flex
		justify-content: center
		align-items: center
		flex-direction: column

		h1
			position: relative
			color: #c0dbf9
			font-size: 2rem
			animation: opacit 2s linear

		p
			margin-top: 35px
			font-size: 1.2rem

	@keyframes opacit
		0%
			top: -70%
			opacity: 0
		60%
			top: 0
		100%
			opacity: 1
</style>