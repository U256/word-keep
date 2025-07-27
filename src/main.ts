import { createApp } from 'vue'
import App from './App.vue'
import router from './views/router'
import { globalState, STORE_NAME } from '@/modules/uiShared/store';

const app = createApp(App)

app.use(router)

app.provide(STORE_NAME, globalState)

app.config.errorHandler = (err) => {
	console.log('Unhadled error: ', err)
}
// app.component('GloballyDefinedComponent', GloballyDefinedComponent)
app.mount('#app')
