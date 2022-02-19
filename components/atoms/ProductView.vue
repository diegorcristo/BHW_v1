<template>
  <div class="product-view">
    <figure class="image has-dflex-center">
      <img src="media/content/wine/Don Simon Reserva.png" alt="" />
    </figure>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.product-view {
  z-index: 2;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 3.25rem;
  width: 100%;
  height: 100%;
  padding: 3rem 5rem 1.5rem 5rem;
  margin: 0;
  border: 1px solid $gray-08;
  border-radius: $bdr;
  aspect-ratio: 1 / 1;

  figure {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .product-view {
    border: none;
  }
}
</style>
