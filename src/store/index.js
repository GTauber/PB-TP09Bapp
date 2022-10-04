
import { createStore } from 'vuex'

export default createStore({
  state: {
    clients:[{}],
    valid:false,
    loggedClient: {},
    idlog:0,
    nameLog:"",
    queue: [],
   
  },
  getters: {
  },
  mutations: {
    storageClient(state,data){
      state.clients.push(data);
        alert("Usuário inserido com sucesso");
      },
      storageQueue(state,data){
        state.queue.push(data);
      },
  },
  actions: {

    checkLogin(state,data)
    {
      let validEmail = false;
      let i = 1;
      for(i in this.state.clients)
      {
        if (this.state.clients[i].email === data.email)
        {
          this.idLog = this.state.clients[i].clientId;
          //auxPass = this.state.clients[i].password;
          this.nameLog = this.state.clients[i].nome;
          validEmail = true;
          if (this.state.clients[i].password === data.password)
          {
            alert(`Seja bem-vindo(a), ${this.nameLog}`);
            //12312312312
          }
          else 
          {
            alert("Senha inválida");
          }
          break;
        }      
     }
     if (!validEmail){
      alert("Email inválido");
     }
  },
 
  
}
})
