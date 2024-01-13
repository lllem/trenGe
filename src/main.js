import './assets/styles/main.scss'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import titleEl from './components/elements/titleEl.vue'
import btnEl from './components/elements/btnEl.vue'
import contentWrapper from './components/contentWrapper.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('titleEl', titleEl)
app.component('btnEl', btnEl)
app.component('contentWrapper', contentWrapper)

app.mount('#app')
