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
      return `media/content/users/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 93.5px;
  height: 81.86px;
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
