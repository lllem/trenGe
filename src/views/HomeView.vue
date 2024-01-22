<template>
  <!-- <main class="bg-white p-4 rounded-xl"> -->

    <header class="text-center text-white">

      <progressCircle
      :progress="0"
      class="quest__icon mx-auto my-4"
      >
        <div class="gerb p-3">
          <img src="/assets/img/Greater_coat_of_arms_of_Georgia.svg" alt="Герб Грузии">
        </div>
      </progressCircle>

      <titleEl class="text-xl font-bold">
        {{ $t('testsAndQuests') }}<br>
        {{ $t('forGeorgianCitizen') }}
      </titleEl>
    </header>

    <section class="grid gap-4 grid-cols-2 my-5">

      <template v-for="link in questsList">
        <router-link
        v-if="link.type === 'test'"
        :to="`quest/${ link.translit }`"
        class="bg-blue-600 text-white py-4 px-2 text-sm font-semibold rounded-lg text-center flex flex-col gap-2"
        :key="link"
        >
          <ListBulletIcon class="icon text-xl text-sky-300" />
          <span>{{ link.title[$i18n.locale] }}</span>
        </router-link>

        <a
        v-if="link.type === 'pdf'"
        :href="`/files/${ link.file }`"
        class="bg-indigo-600 text-white py-4 px-2 text-sm font-semibold rounded-lg text-center flex flex-col gap-2"
        :key="link"
        >
          <DocumentArrowDownIcon class="icon text-xl text-sky-300" />
          <span>{{ link.title[$i18n.locale] }}</span>
        </a>

      </template>

    </section>

    <p class="text-center my-6 text-white">Гру́зия (груз. საქართველო МФА: [sɑkʰɑrtʰˈvɛlɔ](инф.), Сакартве́ло) — государство, расположенное в западной части Закавказья на восточном побережье Чёрного моря. Относится к Восточной Европе и Передней Азии; рассматривается часто как страна на стыке Европы и Азии. Геополитически рассматривается как часть современной Европы.</p>

  <!-- </main> -->
</template>

<script>
import { mapGetters } from 'vuex'
import progressCircle from '@/components/progressCircle.vue'
import { DocumentArrowDownIcon, ListBulletIcon } from '@heroicons/vue/24/solid'

export default {
  props: {
    id: String || Number,
  },

  components: {
    progressCircle,
    DocumentArrowDownIcon,
    ListBulletIcon,
  },

  computed: {
    ...mapGetters([
      'questsList',
    ]),
  },

  mounted() {
    this.$store.dispatch('loadQuestList')
  }
}
</script>

<style lang="scss">
.gerb {
  // transform: translateY(-2.5%);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
