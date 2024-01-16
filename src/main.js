import './assets/styles/main.scss'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import titleEl from './components/elements/titleEl.vue'
import btnEl from './components/elements/btnEl.vue'
import contentWrapper from './components/contentWrapper.vue'

const app = createApp(App)

const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'ge', // set fallback locale
})

app
  .use(router)
  .use(store)
  .use(i18n)

app
  .component('titleEl', titleEl)
  .component('btnEl', btnEl)
  .component('contentWrapper', contentWrapper)

app.mount('#app')
