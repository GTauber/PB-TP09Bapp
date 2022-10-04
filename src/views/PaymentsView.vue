<template>
  <div class="d-flex justify-content-center">
    <div class="w-50">
      <payments-comp></payments-comp>
    </div>
  </div>
</template>

<script>
import PaymentsComp from "@/components/PaymentsComp";

export default {
  name: "PaymentsView",
  components: {
    PaymentsComp
  }

}
</script>

<style scoped>

</style>