<template>
  <div class="item-best-seller-brands has-dflex flow-nw-row justify-between">
    <span>
      {{ name }}
    </span>
    <span> {{ quantity }} produtos </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.item-best-seller-brands {
  padding: 0.875rem 1.375rem;
  background-color: $bgc-02;
  border-radius: $bdr-small;
}
</style>
