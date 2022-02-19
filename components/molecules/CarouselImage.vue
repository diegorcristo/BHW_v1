<template>
  <div class="row carousel-image">
    <div id="banner-carousel" class="galaxy-carousel-container banner-carousel">
      <div class="galaxy-item">
        <figure class="carousel-image has-dflex-center">
          <img src="media\content\carousel\vinhos.jpg" />
        </figure>
      </div>
      <div class="galaxy-item">
        <figure class="carousel-image has-dflex-center">
          <img src="media\content\carousel\vinhos.jpg" />
        </figure>
      </div>
      <div class="galaxy-item">
        <figure class="carousel-image has-dflex-center">
          <img src="media\content\carousel\vinhos.jpg" />
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.carousel-image {
  padding-bottom: 2.875rem;
  .banner-carousel {
    height: 342px;
    .galaxy-item {
      .carousel-image {
        height: 342px;
        padding-bottom: 1rem;
        img {
          object-fit: contain;
        }
      }
    }
  }
}
</style>
