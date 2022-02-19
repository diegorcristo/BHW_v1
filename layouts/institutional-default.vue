<template>
  <div class="institutional">
    <HeaderBlank />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: '/script/main.js',
        type: 'text/javascript',
        body: true,
        defer: true,
      },
    ],
  },
}
</script>

<style lang="scss">
.institutional {
  main {
    padding: 5.5rem 0 3.75rem 0;
  }
}

@media screen and (max-width: 48rem) {
  .institutional {
    main {
      padding: 6.75rem 0 3.75rem 0;
    }
  }
}
</style>
