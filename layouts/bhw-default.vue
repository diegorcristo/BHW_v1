<template>
  <div class="bhw-default">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
main {
  padding: 5.5rem 0 0.5rem 0;
  min-height: calc(100vh - 5.5rem);
}

@media screen and (max-width: 48rem) {
  main {
    padding: 8rem 0 0.5rem 0;
  }
}
</style>
