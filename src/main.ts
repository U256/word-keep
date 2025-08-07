import { createApp } from 'vue'
import App from './App.vue'
import router from './views/router'
import { globalState, STORE_NAME } from '@/modules/uiShared/store'
import { parseError } from '@/shared/helpers/errorHelpers'

const app = createApp(App)

app.use(router)

app.provide(STORE_NAME, globalState)

app.config.errorHandler = (err) => {
	alert(`Unhadled error: ${parseError(err).message}`)
}
// app.component('GloballyDefinedComponent', GloballyDefinedComponent)
app.mount('#app')
