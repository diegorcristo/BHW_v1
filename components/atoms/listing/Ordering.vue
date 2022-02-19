<template>
  <div class="ordering">
    <button class="item">Mais Relevantes</button>
    <button class="item">Menor preço</button>
    <button class="item">Maior preço</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ordering {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;

  .item {
    padding: 0.25rem 0.25rem;
    background-color: transparent;
    color: $gray-03;
    transition-duration: $tsd;
    transition-property: color;
    transition-timing-function: $ttf;

    &:nth-child(1) {
      font-size: 1.125em;
      font-weight: 600;
    }

    &:hover {
      color: $pri-n;
    }
  }
}
</style>
