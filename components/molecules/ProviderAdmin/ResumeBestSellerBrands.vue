<template>
  <div class="resume-best-seller-brands has-dflex flow-nw-col has-gap-1">
    <div class="row">
      <div class="col has-dflex flow-nw-row justify-between align-center">
        <h6 class="title">Marcas mais vendidos</h6>
        <ShowAll to="/" />
      </div>
    </div>
    <div class="row">
      <div class="col has-dflex flow-nw-col has-gap-1">
        <ItemBestSellerBrands name="Gallo" quantity="220" />
        <ItemBestSellerBrands name="Great Wall" quantity="192" />
        <ItemBestSellerBrands name="Hardys" quantity="163" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume-best-seller-brands {
  .title {
    color: $gray-01;
  }
}
</style>
