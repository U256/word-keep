import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './views/router'

const app = createApp(App)

app.use(router)

// app.component('GloballyDefinedComponent', GloballyDefinedComponent)
app.mount('#app')
