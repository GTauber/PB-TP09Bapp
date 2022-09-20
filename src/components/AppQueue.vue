<template>
    <div>
        <button @click="empurra">click</button>
        <h1>{{ lista.length }}</h1>
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
        }, 1000);
    },  
    methods: {
        empurra() {
            this.lista.push("");
        }
    }
}

</script>

<style scoped>

</style>