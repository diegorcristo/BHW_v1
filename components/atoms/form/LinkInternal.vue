<template>
  <NuxtLink :to="to" :class="stylization">
    {{ content }}
  </NuxtLink>
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
  font-size: 0.875em;
  font-weight: 400;
  line-height: 150%;

  // Animation
  transition-duration: $tsd;
  transition-property: color, background-color;
  transition-timing-function: $ttf;

  &.primary {
    text-decoration: none;
    font-weight: 600;
    color: $pri-l;

    &:hover {
      color: $pri-d;
    }
  }

  &.button {
    width: 100%;
    padding: 0.625rem 2.125rem;
    border-radius: $bdr-small;
    text-align: center;
    color: $pri-n;
    background-color: transparent;

    &:hover {
      background-color: hsla(335, 80%, 28%, 0.05);
    }
  }

  &.button-secondary {
    width: 100%;
    padding: 0.625rem 2.125rem;
    border-radius: $bdr-small;
    text-align: center;
    text-decoration: none;
    font-size: 0.75em;
    font-weight: 600;
    color: $pri-n;
    background-color: $bgc-02;

    &:hover {
      background-color: hsla(335, 80%, 28%, 0.05);
    }
  }
}
</style>
