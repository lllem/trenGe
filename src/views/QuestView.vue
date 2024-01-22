<template>
  <div class="quest text-white text-center" v-if="!!quest">

    <titleEl class="text-lg my-3">{{ quest.title[$i18n.locale] }}</titleEl>

    <header class="quest__header text-center">

      <progressCircle
      :progress="progress"
      class="quest__icon mx-auto my-4"
      >
        <template v-if="done">
          <div class="flex flex-col">
            <span class="block">{{ Math.round(correctQty / quest.quest.length * 100) }}%</span>
            <span class="text-sm font-semibold opacity-50">{{ $t('result') }}</span>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col">
            <span class="block">{{ count + 1 }}/{{ quest.quest.length }}</span>
            <span class="text-sm font-semibold opacity-50">{{ $t('question') }}</span>
          </div>
        </template>

      </progressCircle>

    </header>

    <template
    v-if="!done"
    >
      <!-- <h3 class="text-white uppercase mb-6-- text-center text-sm font-semibold opacity-50">Вопрос {{ count + 1 }} из {{ quest.quest.length }}</h3> -->

      <questItem
      class="mb-5"
      :questItem="quest.quest[count]"
      @done="doneItem"
      @next="nextItem"
      />
    </template>

    <template v-else>

      <p class="text-xl font-bold">Правильных ответов:<br>{{ correctQty }} из {{ quest.quest.length }}</p>

      <btnEl to="/" class="my-6">{{ $t('toMain') }}</btnEl>
    </template>

  </div>

  <div class="text-white" v-else>loading...</div>
</template>

<script>
// import { mapGetters } from 'vuex'
import questItem from '@/components/quest/questItem.vue'
import progressCircle from '@/components/progressCircle.vue'

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
    progressCircle,
  },

  methods: {
    doneItem(correct) {
      console.log(correct)
      if (correct) this.correctQty++
    },

    nextItem() {
      // if ((this.count + 1) < this.quest.quest.length) this.count++
      this.count++
      if (this.count >= this.quest.quest.length) this.done = true
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

    progress() {
      // если в процессе ответов на вопросы - показываем прогресс
      if (!this.quest) return 0

      if (this.count < this.quest.quest.length) return (this.count + 1) / this.quest.quest.length

      // если ответы кончились - показываем результат
      return this.correctQty / this.quest.quest.length
    },
  },

  mounted() {
    this.$store.dispatch('loadQuest', this.id)
  },
}
</script>
