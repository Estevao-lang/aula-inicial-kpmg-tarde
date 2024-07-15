import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Importe a store Vuex

const app = createApp(App);

app.use(router);
app.use(store);  // Use a store Vuex

app.mount('#app');
