<template>
     
    
    <main>
        
        <section id="signIn">
        
       <div class="cliente">
        <h3>SING IN</h3><br>
         <div class="input-group flex-nowrap">
           <div class="input-group-prepend">
             <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-user"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="Nome do cliente" aria-label="Nome do Usuário" v-model="input_nome"
             aria-describedby="addon-wrapping" id="nome-cliente" required />
         </div>
       </div>
    
       <div class="cliente">
         <div class="input-group flex-nowrap">
           <div class="input-group-prepend">
             <span class="input-group-text" id="addon-wrapping"><i class="fa-sharp fa-solid fa-at"></i></span>
           </div>
           <input type="email" class="form-control" placeholder="Email" aria-label="Email" v-model="input_email"
             aria-describedby="addon-wrapping" id="email-cliente"  required />
         </div>
       </div>
    
       <div class="cliente">
         <div class="input-group flex-nowrap">
           <div class="input-group-prepend">
             <span class="input-group-text" id="addon-wrapping">
               <i class="fa-solid fa-phone"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="Celular " aria-label="Telefone celular" v-model="input_telefone"
             aria-describedby="addon-wrapping" id="telefone-cliente"  required />
         </div>
       </div>

       <div class="cliente">
         <div class="input-group flex-nowrap">
           <div class="input-group-prepend">
             <span class="input-group-text" id="addon-wrapping">
              <i class="fa-solid fa-key"></i>
              </span>
           </div>
           <input type="password" class="form-control" placeholder="Digite a senha desejada" aria-label="Senha" v-model="input_password"
             aria-describedby="addon-wrapping" id="senha"  required />
         </div>
       </div>

       <div class="cliente">
         <div class="input-group flex-nowrap">
           <div class="input-group-prepend">
             <span class="input-group-text" id="addon-wrapping">
              <i class="fa-solid fa-key"></i>
              </span>
           </div>
           <input type="password" class="form-control" placeholder="Digite a senha desejada novamente" aria-label="Senha de novo" v-model="input_passwordAgain"
             aria-describedby="addon-wrapping" id="senha2"  required />
         </div>
       </div>

     </section>
    
     <div class="botoes-form">
      <button type="button" class="btn btn-outline-warning" id="enviar" @click="cadastrar">Cadastrar</button>
      <button type="button" class="btn btn-outline-warning" id="limpar" @click="limpar">Limpar</button>
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
              input_nome:"",
              input_telefone:"",
              input_passwordAgain:"",
              isValid:{
                email:true,
                password:true,
                nome:true,
                telefone:true,
                passwordAgain:true
              },
              mensagem:{
                email:"",
                password:"",
                nome:"",
                telefone:"",
                passwordAgain:""}
            }
          },
          methods: {
            validarDados(){
              this.isValid.email = selfFunctions.voidValidation(this.input_email);
              this.mensagem.email = selfFunctions.msg;
              this.isValid.password = selfFunctions.voidValidation(this.input_password);
              this.mensagem.password = selfFunctions.msg;
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
      .botoes-form {
        margin-top: 45px;
        text-align:center;
      }
      button {
        margin-left:15px;
        margin-bottom:20px;
        font-weight: bold;
      }
      button:active {
        transform:scale(0.9);
      }
      .cliente {
        margin:5px 0;
      }
      #signIn {
        border: 5px solid var(--cor-terc);
        padding: 20px;
        margin-top:25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 20px;
        border-left:1px solid var(--cor-terc);
        border-top:1px solid var(--cor-terc);
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