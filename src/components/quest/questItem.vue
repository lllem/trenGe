<template>
  <contentWrapper class="quest-item">

    <h2 class="font-bold text-xl text-indigo-900 text-center">{{ questItem.question }}</h2>

    <div>
      <questItemTab
      v-for="(answer, index) in questItem.answers"
      :selected="index === selected"
      :correct="index === questItem.correctAnswerIndex"
      :show="show"
      :key="answer"
      @click="done(index)"
      >
      {{ answer }}
      </questItemTab>

    </div>

    <footer class="text-center">
      <btnEl
      class="w-full"
      :class="{
        'hidden': (selected === false) || show
      }"
      @click="done"
      >Ответить</btnEl>
    </footer>

    <footer v-if="show" class="text-center">
      <p v-if="correct" class="text-xl font-bold text-green-900 mb-4">Верный ответ</p>
      <p v-else-if="!correct" class="text-xl font-bold text-red-900 mb-4">Неверный ответ</p>

      <btnEl
      class="w-full"
      @click="next"
      >Дальше</btnEl>
    </footer>
  </contentWrapper>
</template>

<script>
// import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import questItemTab from '@/components/quest/questItemTab.vue'

export default {
  props: {
    questItem: Object,
  },

  components: {
    questItemTab,
    // CheckIcon,
    // XMarkIcon,
  },

  data() {
    return {
      selected: false,
      show: false,
      sended: false,
    }
  },

  methods: {
    changeSelected(index) {
      if (!this.show) this.selected = index
    },

    done(index) {
      if (!this.show) this.selected = index
      this.show = true
      this.$emit('done', this.correct)
    },

    next() {
      this.show = true
      if (!this.sended) {
        this.$emit('next', this.correct)
        this.sended = true
      }
    },
  },

  computed: {
    correct() {
      return this.selected === this.questItem.correctAnswerIndex
    },
  },

  watch: {
    'questItem': function() {
      this.selected = false,
      this.show = false
      this.sended = false
    },
  },
}
</script>
