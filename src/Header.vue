<template>
	<header>
		<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/agenda">Agenda</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="sass">
	header
		display: flex
		border-bottom: 1px solid lightgray
		justify-content: center
		nav ul
			display: flex

			li
				list-style: none
				transition: .5s
				padding: 10px
				a
					text-decoration: none
					color: #000
					cursor: pointer
					text-transform: uppercase

				&:hover
					background: rgba(150, 200, 256,0.2)

					a
						color: #fff
</style>