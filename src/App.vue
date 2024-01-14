<template>
  <div class="app bg-dark">
    <topNav/>

    <main class="app__main container max-w-screen-xs mx-auto py-5 px-4">
      <RouterView />
    </main>

    <footer class="app__footer container max-w-screen-xs mx-auto py-4 border-t text-center text-white opacity-50">footer</footer>
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue'

export default {
  components: {
    topNav,
  }
}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  .app__main {
    flex-grow: 1;
    // width: 576px;
  }

  .app__footer {
    //
  }
}
</style>
