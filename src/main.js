import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import'./assets/scss/main.scss'
import store from './store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

// createApp(App).use(router).use(store).mount('#app') // Или так 