<template>
  <div class="pagination">
    <button class="item selected">
      <span>1</span>
    </button>
    <button class="item">
      <span>2</span>
    </button>
    <button class="item">
      <span>3</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  .item {
    width: 2.8125rem;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $bdr-small;
    background-color: $bgc-02;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;

    span {
      font-size: 1.125em;
      font-weight: 600;
      color: $pri-n;
    }

    &.selected {
      background-color: $pri-n;

      span {
        color: $w;
      }

      &:hover {
        background-color: $pri-n;
      }
    }

    &:hover {
      background-color: rgba(127, 14, 61, 0.1);
    }
  }
}
</style>
