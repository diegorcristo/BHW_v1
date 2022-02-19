<template>
  <div class="row by-price flow-nw-col align-start">
    <h6 class="title">Por preço</h6>

    <div class="carousel-scroll">
      <div class="cs-content">
        <div class="cs-item">
          <Badge to="/" content="Até R$ 50" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 100" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 150" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 200" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 500" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="R$ 500+" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 50" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 100" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 150" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 200" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="Até R$ 500" />
        </div>
        <div class="cs-item">
          <Badge to="/" content="R$ 500+" />
        </div>
      </div>
      <div class="cs-btn-prev"></div>
      <div class="cs-btn-next"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.by-price {
  gap: 2.125rem;
  padding: 0 0 2.5rem 0;

  .title {
    color: $gray-01;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-price {
    gap: 1rem;
    padding: 0 0 1.5rem 0;

    .title {
      font-size: 1em;
    }
  }
}
</style>
