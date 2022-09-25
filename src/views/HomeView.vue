<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <login-comps></login-comps>
      </div>
    </div>
  </div>
</template>

<script>
import loginComps from '../components/loginComps.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    loginComps
  }
}
</script>
