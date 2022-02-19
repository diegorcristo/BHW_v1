<template>
  <a :to="to" :class="stylization" target="_blank" rel="noopener noreferrer">
    {{ content }}
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },

    stylization: {
      type: String,
      default: '',
    },

    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  // Base
  width: fit-content;
  width: moz-fit-content;
  cursor: pointer;
  display: block;

  // Font style
  font-family: Montserrat;
  font-size: 0.625em;
  font-weight: 600;
  line-height: 150%;
  color: $pri-l;

  // Animation
  transition-duration: $tsd;
  transition-property: color, background-color;
  transition-timing-function: $ttf;

  &:hover {
    color: $pri-d;
  }
}
</style>
