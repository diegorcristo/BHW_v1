<template>
  <div class="resume-best-seller-products has-dflex flow-nw-col has-gap-1">
    <div class="row">
      <div class="col has-dflex flow-nw-row justify-between align-center">
        <h6 class="title">Produtos mais vendidos</h6>
        <ShowAll to="/" />
      </div>
    </div>
    <div class="content-product">
      <div class="one">
        <ItemBestSellerProducts
          image="Gallo Sonoma"
          name="Gallo Sonoma"
          value="10,00"
          quantity="10"
          stylization="one"
        />
      </div>
      <div class="two">
        <ItemBestSellerProducts
          image="Great Wall Longyan"
          name="Great Wall Longyan"
          value="10,00"
          quantity="10"
          stylization="two"
        />
      </div>
      <div class="tree">
        <ItemBestSellerProducts
          image="Hardys Stamp"
          name="Hardys Stamp"
          value="10,00"
          quantity="10"
          stylization="tree"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume-best-seller-products {
  .title {
    color: $gray-01;
  }

  .content-product {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      'one two'
      'one tree';
    gap: 1rem;

    .one {
      grid-area: one;
    }
    .two {
      grid-area: two;
    }
    .tree {
      grid-area: tree;
    }
  }
}
</style>
