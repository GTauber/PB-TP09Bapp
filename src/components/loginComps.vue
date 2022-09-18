<template>

    <main>
        <div class="container">
            <div class="row">
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-primary" id="btnNovoCadastro" @click.prevent="chamaFormulario(si)">Cadastrar conta</button>
                    <button type="button" class="btn btn-secondary" id="btnLogarConta" @click.prevent="chamaFormulario(li)">Entrar na conta</button>
             

        <section class="d-flex justify-content-center">
            <div v-if="escolha===si" class="caixa">
                <novo></novo>
            </div>
            <div v-else-if="escolha===li" class="caixa">
                <entrar></entrar>
            </div>
            <div v-else class="caixa"></div> 
        </section>
        
             </div>
        </div>
    </div>

    
    </main>
    
    </template>
    
    <script>
       
    import novoUsuario from './novoLogin.vue'
     
    import loginConta from './acessarLogin.vue'
    
    export default {
        methods: {
            chamaFormulario(tipo) {
                this.escolha = tipo;
            }
        },
        data(){
            return{
                si:"SingIn",
                li:"LogIn",
                escolha: ""
            }
        },
        components:{
            novo: novoUsuario,
            entrar: loginConta
        }
    }
    </script>
    
    <style scoped>
    #btnNovoCadastro, #btnLogarConta{
        background:var(--cor-sec);
        color:white;
        font-weight: bold;
        margin-top:15px;
        border-radius:20px;
        border: none;
    }
    #btnNovoCadastro:hover, #btnLogarConta:hover{
        background:var(--cor-terc);
        box-shadow: 0px 0px 10px 2px var(--cor-terc);
        color:var(--cor-sec);
        font-weight: bold;
        border: none;
    }
    #btnNovoCadastro:active, #btnLogarConta:active{
        transform:scale(0.85);
        border: none;
    }
    .caixa{
        position:relative;
        width:100%;
        animation: caixa 1s linear;
    }
    
    .container {
	animation: container 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

    @keyframes container {
  0% {
    transform: translateY(0) translateX(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(50px);
    transform-origin: 50% 50%;
  }
}

  @keyframes caixa {
  0% {
    opacity:0;
  }
  25%{
    opacity:0.1;
  }
  100% {
    opacity:1;
  }




}

    
    </style>
    
    
    