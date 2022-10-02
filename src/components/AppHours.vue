<template>
      
  <div class="btn-group d-flex" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger" v-for="(horario, index) in horarios"  
    @click="marcarHora(index)" :key="index" >
        {{horario}}
      </button>
 

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
      clicked: false,
      horarios: ["09:00",
      "09:30","10:00","10:30",
      "11:00","11:30","13:00",
      "13:30","14:30","15:00",
      "15:30","16:00","16:30",
      "17:00","17:30","18:00",
      "18:30","19:00","19:30",
      "20:00"]
    }
  },
  methods: {
    agenda() {
      this.clicked = true;
      this.fila.push(1);
      this.$store.commit('storageQueue', this.fila);
    },
    marcarHora(i){
      let ask = confirm(`Deseja realmente marcar para ${this.horarios[i]}, sr(a). ${this.$store.state.nameLog} ?`);
      if (ask){
        alert(`Horário marcado para ${this.horarios[i]}`);
        document.getElementsByTagName("button")[i+1].style.background = "green";
        
        for(let j = 1; j <= this.horarios.length; j++){
          document.getElementsByTagName("button")[j].disabled=true;
        }
    }
    else{
      alert(`Horario cancelado!`);
    }
  
  }
}
}

</script>

<style scoped>
  button{
    margin-right: 10px;
    
  }
</style>