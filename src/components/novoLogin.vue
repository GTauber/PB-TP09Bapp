<template>
     
    <main>

      

        <section id="signIn">
           
            <h3>Nova Conta</h3><br>
       

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                <input type="text" class="form-control" placeholder="Digite seu nome completo" aria-label="Nome do Usuário" aria-describedby="basic-addon1"  v-model="input_nome">
            </div>
            
            <div class="alert" v-if="!isValid.nome">
              <p>Nome inválido! {{mensagem.nome}}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-sharp fa-solid fa-at"></i></span>
                <input type="text" class="form-control" placeholder="Digite seu email" aria-label="Email" aria-describedby="basic-addon1"  v-model="input_email">
            </div>

            <div class="alert" v-if="!isValid.email" >
              <p>Email inválido! {{mensagem.email}}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
                <input type="text" class="form-control" placeholder="Digite o nº do celular" aria-label="Celular" aria-describedby="basic-addon1"  v-model="input_telefone">
            </div>

            <div class="alert" v-if="!isValid.telefone" >
              <p>Número de telefone inválido! {{mensagem.telefone}}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" class="form-control" placeholder="Digite sua senha" aria-label="Senha" aria-describedby="basic-addon1"  v-model="input_password">
            </div>

            <div class="alert" v-if="!isValid.password" >
              <p>Senha inválida! {{mensagem.password}}</p>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" class="form-control" placeholder="Confirme a sua senha" aria-label="Senha" aria-describedby="basic-addon1"  v-model="input_passwordAgain">
            </div>

            <div class="alert" v-if="!isValid.passwordAgain" >
              <p>Senha inválida! {{mensagem.passwordAgain}}</p>
            </div>

     </section>
    
     <div class="botoes-form">
        <button type="button" class="btn btn-outline-warning" id="enviar" @click="cadastrarDados">Cadastrar</button>
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
                passwordAgain:"",
              
              },
              // ADDED IN CODE REVIEW
              users: [],
            }
          },
          methods: {
            cadastrarDados(){
              this.isValid.nome=selfFunctions.toNameValidation(this.input_nome);
              this.mensagem.nome = selfFunctions.msg;

              this.isValid.email=selfFunctions.toEmailValidation(this.input_email);
              this.mensagem.email = selfFunctions.msg;

              // this.isValid.telefone=selfFunctions.toTelValidation(this.input_telefone);
              // this.mensagem.telefone = selfFunctions.msg;

              this.isValid.password=selfFunctions.toPassValidation(this.input_password);
              this.mensagem.password = selfFunctions.msg;

              // this.isValid.passwordAgain=selfFunctions.toPassAgainValid(this.input_password,this.passwordAgain);
              // this.mensagem.passwordAgain = selfFunctions.msg;

              if (this.isValid.nome && this.isValid.email && this.isValid.telefone && this.isValid.password && this.isValid.passwordAgain){
                this.saveUser();
              }

            },

            //Start code review
            saveUser() {
              const user = {
                nome: this.input_nome,
                email: this.input_email,
                telefone: this.input_telefone,
                password: this.input_password,
                passwordAgain: this.input_passwordAgain
              }
              console.log(`User ${sessionStorage.getItem('users')}`);
              if ( sessionStorage.getItem('users') == null ) {
                this.users.push(user);
                sessionStorage.setItem('users', JSON.stringify(this.users));
                alert("Usuário cadastrado com sucesso!");
                this.limparDados();
              } else {
                this.users = JSON.parse(sessionStorage.getItem('users'));
                console.log(`Users in storage ${JSON.stringify(this.users)}`);
                this.users.forEach((user) => {
                  if (user.email === this.input_email) {
                    alert("Usuário já cadastrado!");
                  } else {
                    this.users.push(user);
                    sessionStorage.setItem('users', JSON.stringify(this.users));
                    alert("Usuário cadastrado com sucesso!");
                    this.limparDados();
                  }
                });
              }
            },
            // End code review
            limparDados(){
              this.isValid.email = true;
              this.isValid.password = true;
              this.isValid.passwordAgain = true;
              this.isValid.nome=true;
              this.isValid.telefone=true;
              this.input_email = "";
              this.input_password = "";
              this.input_nome="";
              this.input_telefone="";
              this.input_passwordAgain="";
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