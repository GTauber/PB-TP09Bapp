<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h4>A gende seu corte:</h4>
        <AppHours></AppHours>
      </div>
      <div class="row">
        <div class="col d-flex flex-column align-items-md-center">
          <h4 class="mt-5">Ou, entre na fila</h4>
          <AppQueue></AppQueue>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppHours from '../components/AppHours.vue'
import AppQueue from '../components/AppQueue.vue'
export default {
  name: "ServicesView",
  components: {
    AppHours,
    AppQueue
  }

}
</script>

<style scoped>
h4 {
  color: yellow;
}
</style>