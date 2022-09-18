<template>
    <div class="card w-75">
        <div class="card-body d-flex justify-content-around">
            <div class="py-3">
                <h5 class="card-title">Credit Card</h5>
                <form action="submit" class="d-flex flex-md-column align-items-center">
                    <label for="fName" class="lb">Name</label>
                    <input type="text" name="fname" id="fName">
                    <label for="fCardNumber" class="lb">Número</label>
                    <input type="text" name="fCardNumber" id="fCardNumber">
                    <label for="fCardCVV" class="lb">CVV</label>
                    <input type="text" name="fCardCVV" id="fCardCVV">
                    <label for="fDate" class="lb">Data</label>
                    <input type="date" id="fDate" name="fDate" placeholder="Data">
                </form>
            </div>
            <i class="fa-regular fa-credit-card mt-3"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsComp'
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
    width: 50vw;
    border-radius: 50px;
    background-color: rgb(146, 146, 146);
    border: none;
    height: 5vh;
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