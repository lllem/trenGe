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

export const messages = {
  ru: {
    question: 'Вопрос',
    wrong: 'Неверный ответ',
    correct: 'Верный ответ',
    nextQuestion: 'Следующий вопрос',
    toMain: 'На главную',
    result: 'Результаты',
    details: 'Подробнее',
    testsAndQuests: 'Тесты и упражнения',
    forGeorgianCitizen: 'для гражданства Грузии',
  },
  ge: {
    question: 'კითხვა',
    wrong: 'არა სცორი პასუხი',
    correct: 'სცორი პასუხი',
    nextQuestion: 'შემდეგი შეკითხვა',
    toMain: 'მთავარზე',
    result: 'შედეგები',
    details: 'ახსნა',
    testsAndQuests: 'ტესტები და სავარჯიშო',
    forGeorgianCitizen: 'საქართველოს მოქალაქეობისთვის',
  },
}

const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'ge', // set fallback locale
  messages,
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
