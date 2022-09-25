<template>

   
    <main>
      
            <section id="login" class="container">
        
          
             <h3>Acessar conta</h3><br>

            
             <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" v-model="input_email">
            </div>

            <div class="alert" v-if="!isValid.email" >
              <p>Email ou número de celular inválido! {{mensagem.email}}</p>
            </div>
       
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" v-model="input_password">
            </div>

              <div class="alert" v-if="!isValid.password">
                <p>Senha inválida! {{mensagem.password}} </p>
              </div>
            
            
         </section>
        
         <div>
          <button type="button" class="btn btn-outline-warning" id="enviar" @click="validarDados">Enviar</button>
          <button type="button" class="btn btn-outline-warning" id="limpar" @click="limparDados">Limpar</button>
         </div>
         
    
        </main>
      
        
        </template>
        
        <script>
           import selfFunctions from '../functions.js';
            export default {
              data(){
                return{
                  input_email:"",
                  input_password:"",
                  isValid:{
                    email:true,
                    password:true
                  },
                  mensagem:{
                    email:"",
                    password:""}
                }
              },
              methods: {
                validarDados(){
                  this.isValid.email = selfFunctions.voidValidation(this.input_email);
                  this.mensagem.email = selfFunctions.msg;
                  this.isValid.password = selfFunctions.voidValidation(this.input_password);
                  this.mensagem.password = selfFunctions.msg;
                  const inserts = {
                    email : this.input_email,
                    password: this.input_password
                  }
                  if (this.isValid.password && this.isValid.email){
                    this.$store.dispatch('checkLogin',inserts);
                  }
                },
                limparDados(){
                  this.isValid.email = true;
                  this.isValid.password = true;
                  this.input_email = "";
                  this.input_password = "";
                }
              },
            
            }
        </script>
        
        <style scoped>
    
          button {
            margin-left:15px;
            margin-bottom:20px;
            font-weight: bold;
           
          }
          button:active {
            transform:scale(0.9);
          }
          #login {
            border: 5px solid var(--cor-terc);
            padding: 20px;
            margin-top:50px;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 20px;
            border-right:1px solid var(--cor-terc);
            border-bottom:1px solid var(--cor-terc);
            margin-bottom:25px;
          }
          h3{
            color: var(--cor-terc);
          }
          
          p{
            color:red;
            font-weight: bold;
            font-size:16px;
            margin-top:-15px;
            
          }
          .alert{
            text-align:right;
            height:25px;
          }
          
        </style>