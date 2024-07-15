<!-- Exemplo em App.vue -->
<template>
  <div id="app">
    <router-link to="/" class="inicio">Inicío</router-link>

    <router-view to="search"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app{
 background-color: #f0f0f0 ; 
}
.inicio{
  text-decoration: none;
  color: #000;
  font-size: 20px;
}


</style>