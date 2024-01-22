import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    questsList: [], // загружается с сервера

    quests: {}, // загружается с сервера

  },

  mutations: {
    updateQuestList(state, payload) {
      state.questsList = payload
    },

    addQuest(state, payload) {
      state.quests[payload.id] = payload
      console.log(payload)
    },
  },

  actions: {
    async loadQuestList() {
      await axios
        .get('/api/index.json')
        .then(response => {
          this.commit('updateQuestList', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async loadQuest(store, questName) {
      await axios
        .get(`/api/${ questName }.json`)
        .then(response => {
          console.log(`./api/${ questName }.json`)
          this.commit('addQuest', {
            id: questName,
            ...response.data
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  getters: {
    questsList: state => state.questsList,

    quest: state => questName => {
      if (!state.quests[questName]) {
        return false
      }
      const quest = state.quests[questName]

      // Выдаём 10 рандомных вопросов

      if (quest.quest.length <= 10) return quest

      const tenQuestsSet = new Set()

      while (tenQuestsSet.size < 10) {
        const random = Math.round(Math.random()*quest.quest.length)
        tenQuestsSet.add( quest.quest[random] )
      }

      const outputObj = {
        title: quest.title,
        quest: Array.from(tenQuestsSet),
      }

      return outputObj
    },
  },

  modules: {},
})
