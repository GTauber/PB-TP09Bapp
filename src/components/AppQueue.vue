<template>
    <div class="d-flex flex-column">
        <button @click="empurra" class="btn btn-primary">Entre na fila</button>
        <h1>Sua posição na fila é: <br>{{ lista.length }}</h1>
    </div>
</template>

<script>
    export default {
    name: 'AppQueue',
    data() {
        return {
            lista: []
        }
    },
    created() {
        setInterval(() => {
            this.lista.pop()
        }, 5500);
    },  
    methods: {
        empurra() {
            this.lista.push(this.$store.state.nameLog);
        }
    }
}

</script>

<style scoped>
h1 {
  color: white;
}
</style>