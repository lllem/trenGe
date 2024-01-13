<template>
  <div class="quest">
    <titleEl class="text-white">{{ quest.title }}</titleEl>

    <div
    v-if="!done"
    >
      <titleEl class="text-white">Вопрос {{ count + 1 }} из {{ quest.quest.length }}</titleEl>

      <questItem
      class="my-5"
      :questItem="quest.quest[count]"
      @done="doneItem"
      @next="nextItem"
      />
    </div>

    <div class="px-4 py-6 shadow rounded-xl bg-indigo-100 text-center" v-else>
      <titleEl>Готово</titleEl>

      <titleEl>Вы ответили правильно на {{ correctQty }} из {{ quest.quest.length }}</titleEl>


      <btnEl to="/" class="my-6">На главную</btnEl>
    </div>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import questItem from '@/components/quest/questItem.vue'

export default {
  props: {
    id: String || Number,
  },

  data() {
    return {
      count: 0,
      done: false,
      correctQty: 0,
    }
  },

  components: {
    questItem,
  },

  methods: {
    doneItem(correct) {
      console.log(correct)
      if (correct) this.correctQty++
    },

    nextItem() {
      if ((this.count + 1) < this.quest.quest.length) this.count++
      else this.done = true
    },
  },

  computed: {
    // ...mapGetters([
    //   'questsList',
    // ]),

    quest() {
      const item = this.$store.getters.quest(this.id)
      return item
    },

    questDone() {
      return (this.count + 1) === this.quest.length
    },
  },
}
</script>
