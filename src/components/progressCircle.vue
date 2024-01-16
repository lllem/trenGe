<template>
  <div class="progress-circle border border-indigo-800 aspect-square rounded-full border-4 text-white
  flex items-center justify-center
  inline-block
  text-2xl font-bold">

    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    class=""
    viewBox="0 0 160 160"
    >
      <defs>
        <linearGradient id="progress-circle__gradient">
          <stop offset="0%" stop-color="#4592ff" />
          <stop offset="100%" stop-color="#00ff66" />
        </linearGradient>
      </defs>
      <circle
      :stroke-dashoffset="convertProgress"
      cx="80"
      cy="80"
      r="70"
      stroke-linecap="round"
      />
    </svg>

      <slot/>

  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    convertProgress() {
      return 450 - 450 * this.progress
    },
  },
}
</script>

<style lang="scss">
.progress-circle {
  position: relative;
  width: 6.5rem;

  svg {
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    transform: rotate(90deg);

    circle {
      fill: none;
      fill: blue($color: #4592ff);
      stroke: url(#progress-circle__gradient);
      stroke-width: 10px;
      stroke-dasharray: 450;
      // stroke-dashoffset: calc(450 - 450*0.9);
      transition: all 3s;
    }
  }
}
</style>
