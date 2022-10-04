<template>
    <header>
        <nav class="navbar navbar-expand-lg fixedtop text-pop-up-tr">
            <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                Barbe & Ria 
            </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item te">
                          <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/services" class="nav-link">Serviços</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link" >Sobre</router-link>
                        </li>
                        <li class="nav-item" disabled> 
                        <router-link to="/queue" class="nav-link fila">Fila</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/credit" class="nav-link">Pagamentos</router-link>
                      </li>
                      <li class="nav-item">
                            <router-link to="/contact" class="nav-link">Contatos</router-link>
                        </li>
                    </ul>
                   
                    <div class="navbar-text">
                        <div class="search-box">
                          <router-link to="/"><i class="fa-solid fa-magnifying-glass search"></i></router-link>
                        </div>
                        <div class="profile-box">
                            <router-link to="/login"><i class="fa-solid fa-user user-profile"></i></router-link>
                        </div>
                      <h1 style="color: white">Seja bem vindo {{$store.state.nameLog}}</h1>
                       
                    </div>
                    
                </div>
               
            </div>
            
        </nav>
    </header>
    <div class="container" id="funcionamento">
                        <div class="row"> 
                            <div class="col" v-if="funcionamento" :style="{'color':'green'} ">
                            <h4>Aberto</h4>
                            <p>Aberto de 8 às 22 horas</p>
                            </div>
                            <div class="col" :style="{'color':'red'}" v-else>
                               <h4> Fechado </h4>
                               <p>Aberto de 8 às 22 horas</p>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
      return {
        
      }
    },
    computed: {
      name() {
        if (this.$store.state.clients[1]) {
          return this.$store.state.clients[1].nome;
        }
        return this.$store.state.clients[0].nome;
      },
      funcionamento (){
        let date = new Date();
        let hour = date.getHours();
        return !(hour > 22 || hour < 8);
      }
    }

}

</script>

<style scoped>

.navbar-brand {
    border-radius: 100px;
    font-weight: bold;
    background-color: rgba(202, 202, 202, 0.414);
    padding: 0.3rem 1rem;
}
    
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin-right: 20px;
    border-radius: 15px;
    width: 40px;
}

.profile-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    margin-right: 20px;
    border-radius: 15px;
    width: 25px;
}


.search {
    color: white;
}

.navbar-text {
    display: flex;
    justify-content: flex-end;

}

.nav-item a {
    margin: 0 1vw;
    color: rgb(0, 0, 0);
    border-radius: 100px;
    background-color: rgba(202, 202, 202, 0.414);
}

.nav-item a:hover {
    color: rgb(138, 49, 11);
}

#users{
    color:white;
}
p{color:white;}

#funcionamento{
    width: 150px;
    
    text-align: center;
    margin:0 auto;
    opacity: 0.75;
    text-shadow: 1px 1px 4px rgb(128, 126, 126);
}

.user-profile {
  color: white;
}

.fila {
  pointer-events: none;
}

</style>