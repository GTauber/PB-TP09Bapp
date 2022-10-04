<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Login/Register</h1>
        <login-comps></login-comps>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComps from "@/components/loginComps";

export default {
  name: "LoginView",
  components: {
    LoginComps
  }

}
</script>

<style scoped>

</style>