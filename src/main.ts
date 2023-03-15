import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HelloWorld from './components/HelloWorld.vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('HelloWorld', HelloWorld)

app.mount('#app')
