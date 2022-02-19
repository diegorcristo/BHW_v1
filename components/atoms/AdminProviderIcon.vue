<template>
  <figure :class="classStyle">
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
    classStyle: {
      type: String,
      required: true,
    },
  },
  computed: {
    setImage() {
      return `media/content/providers/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  width: 5.844rem;
  height: 5.116rem;
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $gray-08;
  border-radius: 10%;
}

.edit img {
  width: 5.844rem;
  height: 6rem;
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $gray-08;
  border-radius: 10%;
}
</style>
