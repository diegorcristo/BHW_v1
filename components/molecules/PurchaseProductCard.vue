<template>
  <div class="purchase has-dflex flow-nw-row align-center">
    <ProductItemCard :image="image" :qtdItem="qtdItem" />
    <div class="content has-dflex flow-nw-row justify-between align-center">
      <p class="name">{{ nameItem }}</p>
      <span class="price">R${{ valueItem }}</span>
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
.purchase {
  gap: 0.5rem;
  .image {
    width: 60px;
  }
  .content {
    width: calc(100% - 60px - 0.5rem);
    gap: 0.5rem;

    .name,
    .price {
      font-size: 0.875em;
    }
    .price {
      width: fit-content;
      width: moz-fit-content;
      word-break: keep-all;
      color: $pri-n;
    }
  }
}
</style>
