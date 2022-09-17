<template>
    <HeaderComp></HeaderComp>
    <logSingIn/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import logSingIn from './components/loginComps.vue'
export default {

  name: 'App',
  components: {
    HeaderComp,
    logSingIn: logSingIn
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
