<template>
  <div class="quest-item-tab
  text-start
  quest-tab p-4 block cursor-pointer rounded-lg my-1 transition font-semibold
  flex gap-1 items-center border-b border-black"
  :class="{
    'bg-indigo-800 text-white': (!selected && !show) || (!(selected || correct) && show),
    'hover:bg-indigo-600': !show && !selected,
    'text-white': show && (selected || correct),
    'bg-red-700 border-red-400 animation-nooo': show && !correct && selected,
    'bg-green-700 border-green-400 delay-300 duration-1000': show && correct && !selected,
    'bg-sky-400 text-sky-900': !show && selected,
    'shadow-lg': !show && !selected,
    'bg-green-600 animation-yes': show && selected && correct,
  }"
  >
    <span>
      <CheckIcon
      v-if="(selected && !show) || (!selected && correct && show)"
      class="icon text-xl"
      />

      <XMarkIcon
      v-else-if="selected && show && !correct"
      class="icon text-xl"
      />

      <CheckCircleIcon
      v-else-if="selected && show && correct"
      class="icon text-xl"
      />

      <MinusIcon
      v-else
      class="icon text-xl opacity-50"
      />
    </span>

    <span>
      <slot/>
    </span>

  </div>
</template>

<script>
import { CheckIcon, CheckCircleIcon, MinusIcon, XMarkIcon } from '@heroicons/vue/24/solid'

export default {
  props: {
    selected: null,
    correct: null,
    show: null,
  },

  components: {
    CheckIcon,
    MinusIcon,
    XMarkIcon,
    CheckCircleIcon,
  }
}
</script>

<style lang="scss">
.animation-nooo {
  animation:
    animation-nooo
    1s
    ease
    0.5s
    // once
    // direction
    // fill-mode
    ;
}

.animation-yes {
  animation:
    animation-yes
    1s
    ease
    // once
    // direction
    // fill-mode
    ;
}

@keyframes animation-nooo {
  0% {
    transform: translateX(0%);
  } 20% {
    transform: translateX(8%);
  } 40% {
    transform: translateX(-5%);
  } 60% {
    transform: translateX(4%);
  } 80% {
    transform: translateX(-2%);
  } 100% {
    transform: translateX(0%);
  }
}

@keyframes animation-yes {
  0% {
    transform: scale(100%);
  } 20% {
    transform: scale(90%);
  } 60% {
    transform: scale(110%);
  } 100% {
    transform: scale(100%);
  }
}
</style>
