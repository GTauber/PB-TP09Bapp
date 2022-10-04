<template>
  <div class="card">
    <div class="card-body d-flex justify-content-around">
      <div class="py-3 d-flex flex-column w-75">
        <h5 class="card-title">Credit Card</h5>
        <form action="submit" class="d-flex flex-md-column align-items-center">
          <label for="fName" class="lb">Name</label>
          <input type="text" name="fname" id="fName" v-model="name">
          <label for="fCardNumber" class="lb">Número</label>
          <input type="number" name="fCardNumber" id="fCardNumber" v-model="cardNumber">
          <label for="fCardCVV" class="lb">CVV</label>
          <input type="number" name="fCardCVV" id="fCardCVV" v-model="cvv">
          <label for="fDate" class="lb">Data</label>
          <input type="date" id="fDate" name="fDate" placeholder="Data" v-model="date">
        </form>
        <div class="d-flex justify-content-around mt-3">
          <button class="btn btn-danger" @click="$router.push('/');">Cancelar</button>
          <button class="btn btn-primary" @click="register()">Registrar</button>
        </div>
      </div>
      <i class="fa-regular fa-credit-card mt-3"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsComp',
  data() {
    return {
      name: '',
      cardNumber: Number,
      cvv: Number,
      date: null
    }
  },
  methods: {
    register() {
      if(this.$store.state.loggedClient) {
        this.$store.commit('addPayment', {
          name: this.name,
          cardNumber: this.cardNumber,
          cvv: this.cvv,
          date: this.date
        });
      }
      }
    }
}
</script>

<style scoped>
.lb {
  font-size: 2rem;

}

input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 50px;
  background-color: rgb(146, 146, 146);
  border: none;
  height: 5vh;
  padding: 15px;
  color: white;
  font-weight: bold;
}


#fDate {
  padding: 15px 35px;
}

.fa-credit-card {
  font-size: 8rem;
  color: black
}

.card {
  border-radius: 30px;
}

.card-title {
  font-size: 3rem;
}

</style>