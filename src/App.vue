<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./Header.vue";

  export default {
    name: "app",
    components: {
      Header
    }
  }
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box
    font-size: 100%
    font-family: sans-serif

  body, #app
    width: 100vw
    height: 100vh

  
  button
    margin-left: 10px
    border: none
    background: #eaf4ff
    padding: 10px
    transition: .5s
    color: #fff
    &:hover
      cursor: pointer
      transform: scale(1.5) translateX(20%)

  input
    border: none
    border-bottom: 3px solid #eaf4ff
    outline: none
</style>