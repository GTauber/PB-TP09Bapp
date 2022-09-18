<template>
    <HeaderComp></HeaderComp>
    <logSingIn/>
    <mapa/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import logSingIn from './components/loginComps.vue'
import mapa from './components/mapaSite.vue'
export default {

  name: 'App',
  components: {
    HeaderComp,
    logSingIn,
    mapa
  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
 background-image: url("./assets/fundoBarbearia.png") ;
}
main{
 text-align:center;
}

</style>
