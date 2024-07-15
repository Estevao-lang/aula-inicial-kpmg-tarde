<template>
  <div>
    <input v-model="cep" placeholder="Enter CEP" />
    <button @click="handleFetchCep">Buscar Endereço</button>
    <div v-if="address.logradouro">
      <p>{{ address.logradouro }}</p>
      <p>{{ address.bairro }}</p>
      <p>{{ address.localidade }} - {{ address.uf }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      cep: ''
    };
  },
  computed: {
    ...mapState(['address'])
  },
  methods: {
    ...mapActions(['fetchCep']),
    handleFetchCep() {
      this.fetchCep(this.cep);
    }
  }
};
</script>
<style >
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.cep-input {
  width: 300px;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.search-button:hover {
  background-color: #0056b3;
}

.address-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.address-line {
  margin: 5px 0;
  font-size: 1em;
  color: #333;
}
</style>
