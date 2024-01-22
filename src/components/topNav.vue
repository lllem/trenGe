<template>
  <div class="wrapper container max-w-screen-xs mx-auto py-1 text-white px-4">
    <nav class="flex gap-x-4 items-center">

      <RouterLink to="/" class="font-bold text-lg py-3"><span class="text-red-400">tren</span>Ge</RouterLink>

      <div class="flex gap-4 ms-auto">
        <button
        @click="changeLang(lang.translit)"
        class="font-bold uppercase border-b-2 text-sm transition"
        :class="{
          'border-sky-500': this.$i18n.locale === lang.translit,
          'border-sky-900 opacity-50 hover:opacity-75': this.$i18n.locale !== lang.translit,
        }"
        v-for="lang in [
          {
            title: 'РУ',
            translit: 'ru',
          },
          {
            title: 'ქა',
            translit: 'ge',
          }
        ]"
        :key="lang.translit"
        >
          {{ lang.title }}
        </button>
      </div>

    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import btnEl from '@/components/elements/btnEl.vue'

export default {
  data() {
    return {}
  },

  methods: {
    changeLang(lang) {
      this.lang = lang
      this.$i18n.locale = lang
    },
  },

  computed: {
    ...mapGetters([
      // 'questsList',
    ]),
  },
}
</script>
