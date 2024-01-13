<template>
  <div class="quest-item-tab
  quest-tab p-4 block cursor-pointer rounded-lg my-1 transition font-semibold
  flex gap-1 items-center border-b border-slate-300"
  :class="{
    'bg-white': (!selected && !show) || (!(selected || correct) && show),
    'hover:bg-sky-100': !show && !selected,
    'text-white': show && (selected || correct),
    'bg-red-700': show && !correct && selected,
    'bg-green-700': show && correct && !selected,
    'bg-sky-400 text-sky-900': !show && selected,
    'shadow-lg': !show && !selected,
    'bg-green-600': show && selected && correct,
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
