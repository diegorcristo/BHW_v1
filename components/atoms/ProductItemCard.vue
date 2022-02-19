<template>
  <figure class="image has-dflex-center">
    <img :src="setImage" />
    <div class="quantidade-item has-dflex-center">
      <span>{{ qtdItem }}</span>
    </div>
  </figure>
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
  },
  computed: {
    setImage() {
      return `media/content/wineItem/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
  padding: 0.25rem;
  border: 1px solid $gray-08;
  border-radius: $bdr-medium;

  .quantidade-item {
    width: 1.5rem;
    aspect-ratio: 1 / 1;
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    object-fit: cover;
    border-radius: 100%;
    background-color: $pri-n;

    span {
      font-size: 0.75em;
      line-height: 1;
      color: $w;
    }
  }
}
</style>
