// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      address: {}
    };
  },
  mutations: {
    setAddress(state, address) {
      state.address = address;
    }
  },
  actions: {
    async fetchCep({ commit }, cep) {
      try {
        const response = await axios.get(`http://localhost/vue-cep-search/api/index.php?cep=${cep}`);
        commit('setAddress', response.data);
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
      }
    }
  }
});

export default store;
