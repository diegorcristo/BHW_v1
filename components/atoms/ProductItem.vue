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
    }
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
  width: 93.5px;
  height: 68.11px;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
