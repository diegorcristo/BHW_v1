<template>
  <main class="dashboard">
    <section class="sec-header">
      <div class="container-90 has-dflex flow-nw-col">
        <div class="row">
          <div class="col">
            <h5 class="title">Painel de {{ userName }}</h5>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <SelectPeriod />
          </div>
          <div class="col is-8"></div>
        </div>
        <hr />
        <div class="row"></div>
      </div>
    </section>
    <section class="sec-content">
      <div class="container-90">
        <div class="row align-stretch">
          <div class="col">
            <ResumeSales />
          </div>
          <div class="col has-dflex flow-nw-col has-gap-2">
            <ResumeBestSellerBrands />

            <ResumeBestSellerProductsAdmin />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: 'Admin',
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  .sec-header {
    .container-90 {
      gap: 1.5rem;
      .title {
        color: $gray-01;
      }

      hr {
        background-color: $gray-07;
      }
    }
  }
}
</style>
