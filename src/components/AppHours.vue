<template>
      
  <div class="btn-group d-flex" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger" v-for="(horario, index) in horarios"  
    @click="marcarHora(index)" :key="index" >
        {{horario}}
      </button>
      <button @click="cancelarHorarios">Cancelar</button>
 

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
      horarios: ["08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00"],
                
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
        let date = new Date();
        let hour = date.getHours();
        if(hour-this.horarios[i] === 1){
          for(let j = 1; j <= this.horarios.length; j++){
          document.getElementsByTagName("button")[j].disabled=false;
          document.getElementsByTagName("button")[i+1].style.background = "red";
        }
      }
    }
    else{
      alert(`Horario cancelado!`);
    }
  },
  
  cancelarHorarios(){
    for(let j = 1; j <= this.horarios.length; j++){
          document.getElementsByTagName("button")[j].disabled=false;
          document.getElementsByTagName("button")[j].style.background = "red";
        }
  }
 }
}

</script>

<style scoped>
  button{
    margin-right: 10px; 
    border:none;
  }
  button:hover{
    box-shadow: 1px 1px 20px rgb(255, 255, 255);
  }
  button:active{
    transform:scale(0.9);
  }
</style>