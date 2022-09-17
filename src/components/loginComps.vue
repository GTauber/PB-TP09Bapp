<template>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-10">
                    <button type="button" class="btn btn-primary btn-lg btn-block" id="btnNovoCadastro" @click.prevent="chamaFormulario(si)">Cadastrar conta</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block" id="btnLogarConta" @click.prevent="chamaFormulario(li)">Entrar na conta</button>
                </div>
            </div>
        </div>
        <section class="d-flex justify-content-center">
            <div v-if="escolha===si">
                <novo></novo>
            </div>
            <div v-else-if="escolha===li">
                <entrar></entrar>
            </div>
            <div v-else></div>
        </section>
    
    
    
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
    
    <style>
    main{
        position:relative; /* temporário */
        top:100px; /* temporário */
    }
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
    
    
    
    </style>
    
    
    