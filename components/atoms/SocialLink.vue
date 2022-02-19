<template>
  <a
    class="social-link has-dflex-center"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="iconPath" :alt="name" />
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: '#',
    },
  },

  computed: {
    iconPath() {
      return `/media/icon/network/${this.icon}.png`
    },
  },
}
</script>

<style lang="scss">
.social-link {
  width: 1.5rem;
  height: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
