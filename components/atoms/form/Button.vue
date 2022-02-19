<template>
  <button :class="stylization">{{ content }}</button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
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

  &.tertiary {
    background-color: $pri-l;
    color: $w;
    text-transform: uppercase;

    &:hover {
      color: $w;
      box-shadow: 0px 0px 0px 2px $pri-l;
    }
  }

    &.quaternary {
    background-color: $gray-06;
    color: $w;
    text-transform: uppercase;

    &:hover {
      color: $w;
      box-shadow: 0px 0px 0px 2px $gray-06;
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
}
</style>
