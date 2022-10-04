<template>
  <div class="container-xxl">
    
    <div class="row">
      <div class="col g-5">
        <AppHours></AppHours>
      </div>
    </div>

    <div class="row">
      <div class="col g-5">
        <AppQueue></AppQueue>
      </div>
    </div>

  </div>
</template>

<script>
import AppQueue from "@/components/AppQueue";
import AppHours from "@/components/AppHours";

export default {
  name: "QueueView",
  components: {
    AppQueue,
    AppHours,
  }

}
</script>

<style scoped>

</style>