<template>
  <div class="admin">
    <HeaderAdmin />
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
.admin {
  background-color: $bgc-03;
  main {
    padding: 5.5rem 0 3.75rem 0;
  }
}
</style>
