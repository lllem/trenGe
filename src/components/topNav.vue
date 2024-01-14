<template>
  <div class="wrapper container max-w-screen-sm mx-auto py-1 text-white px-4">
    <nav class="flex gap-x-4 items-center">
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <RouterLink to="/" class="font-bold text-lg py-3">tren<spap class="text-red-400">Ge</spap></RouterLink>

      <!-- <RouterLink to="/end" class="text-sm py-3 ms-auto">End</RouterLink> -->

      <!-- {{ lang }} -->

      <div class="flex gap-4 ms-auto">
        <button
        @click="changeLang(lang)"
        class="font-bold"
        v-for="lang in ['RU', 'GE']"
        :key="lang"
        >
          {{ lang }}
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
    return {
      lang: 'RU' // RU || GE
    }
  },

  methods: {
    changeLang(lang) {
      this.lang = lang
    },
  },

  computed: {
    ...mapGetters([
      // 'questsList',
    ]),
  },
}
</script>
