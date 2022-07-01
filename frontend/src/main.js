import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

require("./assets/js/main");

const app = createApp(App)

app.use(Router)

app.mount('#app')
