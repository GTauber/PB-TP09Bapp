<template>
  <div class="btn-group d-flex" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger" disabled>16:00</button>
    <button type="button" class="btn btn-danger" disabled>16:30</button>
    <button type="button" class="btn btn-success" :class="{'btn-danger': clicked, 'btn-success': !clicked}" :disabled="clicked" @click="agenda()" data-bs-toggle="modal" data-bs-target="#modalSuccess" aria-label="Close">17:00</button>
    <button type="button" class="btn btn-danger" disabled>17:30</button>

    <!-- Modal -->
    <div class="modal fade" id="modalSuccess" tabindex="-1" aria-labelledby="Success" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Horário agendado com sucesso</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHours',
  data() {
    return {
      fila: [],
      clicked: false
    }
  },
  methods: {
    agenda() {
      this.clicked = true;
      this.fila.push(1);
      this.$store.commit('storageQueue', this.fila);
    },
    
  },
}
</script>