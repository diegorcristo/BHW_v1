<template>
  <button :class="stylization">
    <slot name="content" />
  </button>
</template>

<script>
export default {
  props: {
    stylization: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  // Base
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 2.125rem;

  // Border
  border: none;
  border-radius: $bdr-small;

  // Font style
  font-family: Montserrat;
  text-align: center;
  font-weight: 600;
  line-height: 150%;
  word-break: keep-all;

  // Animation
  transition-duration: $tsd;
  transition-property: background-color, color, box-shadow;
  transition-timing-function: $ttf;

  &.primary {
    background-color: $pri-n;
    color: $w;
    text-transform: uppercase;

    &:hover {
      background-color: $pri-d;
    }
  }

  &.secondary {
    background-color: transparent;
    color: $pri-n;
    text-transform: uppercase;
    box-shadow: 0px 0px 0px 1px $pri-l;

    &:hover {
      color: $pri-d;
      box-shadow: 0px 0px 0px 2px $pri-n;
    }
  }

  &.registry {
    background-color: $pri-n;
    color: $w;
    text-transform: uppercase;
    box-shadow: 0px 0px 0px 1px $pri-l;
    &:hover {
      box-shadow: 0px 0px 0px 2px $pri-n;
    }
  }

  &.link {
    width: 100%;
    padding: 0.625rem 2.125rem;
    border-radius: $bdr-small;
    text-align: center;
    text-decoration: underline;
    color: $pri-n;
    background-color: transparent;

    &:hover {
      background-color: hsla(335, 80%, 28%, 0.05);
    }
  }

  &.filter {
    width: fit-content;
    width: moz-fit-content;
    padding: 0.625rem 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
    border-radius: 10rem;
    background-color: $pri-l;
    color: $w;

    &:hover {
      background-color: $pri-n;
    }
  }
}
</style>
