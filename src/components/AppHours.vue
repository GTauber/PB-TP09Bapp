<template>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger" disabled>16:00</button>
        <button type="button" class="btn btn-danger" disabled>16:30</button>
        <button type="button" class="btn btn-success" @click="agenda">17:00</button>
        <button type="button" class="btn btn-danger" disabled>17:30</button>
    </div>
</template>

<script>
    export default {
    name: 'AppHours',
    data() {
        return {
            fila: []
        }
    },
    methods: {
        agenda() {
            this.fila.push(1);
            alert("Horario agendado com sucesso")
            
        }
    },
}
</script>

<style scoped>

</style>