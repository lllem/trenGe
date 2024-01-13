<script setup>
</script>

<template>
  <main class="bg-white p-4 rounded-xl">

    <header class="text-center">
      <titleEl class="text-xl font-bold">Тесты на гражданство Грузии<br>и<br>Тренажёр по тестам на гражданство Грузии</titleEl>
    </header>

    <section class="grid gap-4 grid-cols-3 my-5">

      <router-link
      v-for="link in questsList"
      :key="link"
      :to="`quest/${ link.translit }`"
      class="bg-blue-600 text-white py-4 px-2 text-sm font-semibold rounded-lg text-center"
      >
        {{ link.title }}
      </router-link>

    </section>

    <p class="text-center my-6">Гру́зия (груз. საქართველო МФА: [sɑkʰɑrtʰˈvɛlɔ](инф.), Сакартве́ло) — государство, расположенное в западной части Закавказья на восточном побережье Чёрного моря. Относится к Восточной Европе и Передней Азии; рассматривается часто как страна на стыке Европы и Азии. Геополитически рассматривается как часть современной Европы.</p>

  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import btnEl from '@/components/elements/btnEl.vue'

export default {
  props: {
    id: String || Number,
  },

  components: {
    btnEl,
  },

  computed: {
    ...mapGetters([
      'questsList',
    ]),
  },
}
</script>
