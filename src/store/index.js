import { createStore } from 'vuex'

export default createStore({
  state: {
    clients:[{}]
  },
  getters: {
  },
  mutations: {
    storageClient(state,data){
    state.clients.push(data);
    }
  },
  actions: {
  },
  modules: {
  }
})
