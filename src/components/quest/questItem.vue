<template>
  <contentWrapper class="quest-item">

    <h2 class="font-bold text-xl text-white text-center">{{ questItem.question }}</h2>

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

    <footer v-if="show" class="text-center mb-3">
      <p v-if="correct" class="text-xl font-bold text-green-400 mb-4">
        <CheckIcon class="icon"/> Верный ответ
      </p>
      <p v-else-if="!correct" class="text-xl font-bold text-red-400 mb-4">
        <XMarkIcon class="icon"/> Неверный ответ
      </p>

      <btnEl
      class="w-full"
      @click="next"
      >Следующий вопрос</btnEl>
    </footer>

    <footer v-if="show" class="text-center bg-white rounded-xl text-black p-4 text-start flex flex-col gap-y-4">
      <p class="uppercase opacity-50 font-semibold text-center">Подробнее</p>

      <img src="/assets/img/ge-flag.jpg" alt="">

      <div class="my-4">
        <p class="mb-3">Столица — Тбилиси. Государственный язык — грузинский.</p>
        <p class="mb-3">Грузия является представительной демократией, управляемой как унитарная парламентская республика[30]. Это развивающаяся страна с очень высоким индексом человеческого развития. Страна является членом таких международных организаций, как Совет Европы, ОБСЕ, Евроконтроль, ЕБРР, ОЧЭС, ГУАМ и Всемирной торговой организации. Государство проводит ряд демократических и экономических реформ, направленных на интеграцию в Европейский Союз и НАТО. С 14 декабря 2023 Грузия является официальным кандидатом на вступление в ЕС.</p>
      </div>
    </footer>
  </contentWrapper>
</template>

<script>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import questItemTab from '@/components/quest/questItemTab.vue'

export default {
  props: {
    questItem: Object,
  },

  components: {
    questItemTab,
    CheckIcon,
    XMarkIcon,
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
