<template>
  <div>
    <Header />
    <main class="has-dflex flow-nw-col">
      <section class="main-category">
        <div class="container-90">
          <div class="row">
            <ByHarmonization title="Harmonize seu vinho com" />
          </div>
          <div class="row">
            <ByOccasion />
          </div>
          <div class="row">
            <ByType />
          </div>
          <div class="row">
            <ByGrape />
          </div>
          <div class="row">
            <ByCountry />
          </div>
          <div class="row">
            <ByPrice />
          </div>
        </div>
      </section>
      <section class="main-banner">
        <div class="container-90">
          <CarouselImage />
        </div>
      </section>
      <NewsletterSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding: 8rem 0 0 0;
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  main {
    padding: 9.375rem 0 0 0;
    .main-category {
      .container-90 {
        width: 100%;
        max-width: 100%;
        padding-left: 5%;
      }
    }

    .main-banner {
      .container-90 {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}

@media screen and (max-width: 31.25rem) {
  main {
    padding: 8rem 0 0 0;
  }
}
</style>
