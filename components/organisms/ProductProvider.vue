<template>
  <div class="row">
    <div class="product-provider row has-flex has-gap-1">
      <ProductItem :image="image" />
      <div class="col has-dflex flow-nw-col has-gap-1">
        <p>{{ nameItem }}</p>
        <div class="row justify-between has-gap-1">
          <h6>R$ {{ valueItem }}</h6>
          <p>qtd: {{ qtdItem }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    qtdItem: {
      type: String,
      required: true,
    },
    valueItem: {
      type: String,
      required: true,
    },
    nameItem: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product-provider {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 0.5rem;

  p {
    font-size: 1.125rem;
  }
}
</style>
