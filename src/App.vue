<template>
  <header-comp/>
  <router-view/>
  <mapaSite></mapaSite>
</template>

<script>
import HeaderComp from "@/components/HeaderComp";
import mapaSite from "@/components/mapaSite";

export default {
  components: {
    HeaderComp,
    mapaSite
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

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
