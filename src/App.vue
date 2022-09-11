<template>
    <HeaderComp></HeaderComp>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
export default {


  name: 'App',
  components: {
    HeaderComp
  }
}
</script>

<style>

* {
  outline: 1px solid rgba(132, 255, 142, 0.6);
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
