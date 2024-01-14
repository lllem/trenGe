<template>
  <component
  :is="component"
  :to="to"
  class="py-4 px-4
  bg-sky-600 hover:bg-sky-700 transition
  rounded-xl
  text-white text-center font-bold
  inline-block"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
  },
  computed: {
    component() {
      return this.to ? 'router-link' : 'button'
    },
  },
}
</script>
