<template>
  <div class="home-container">
    <h1>Bem-vindo ao Busca CEP</h1>
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <router-link to="/search">
      <button class="search-button">Ir para Busca de CEP</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 30px;
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
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
