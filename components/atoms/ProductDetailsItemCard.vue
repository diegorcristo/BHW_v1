<template>
  <figure class="image">
    <img :src="setImage" />
  </figure>
</template>

<script>
export default {
  props: {
    image: {
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
  width: 8.234rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;

  img {
    width: 1.895rem;
  }
}
</style>
