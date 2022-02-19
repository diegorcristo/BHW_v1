<template>
  <NuxtLink
    :to="to"
    class="type has-dflex-center"
    :style="setcolor"
    :class="stylization"
  >
    <span class="content">
      <p>
        {{ content }}
      </p>
    </span>
  </NuxtLink>
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
      default: '',
    },

    colored: {
      type: String,
      default: '',
    },

    to: {
      type: String,
      default: '',
    },
  },

  computed: {
    setcolor() {
      if (
        this.colored === 'typ-red-01' ||
        this.colored === 'typ-red-02' ||
        this.colored === 'typ-red-03'
      ) {
        return `background-color: var(--${this.colored}); color: var(--w)`
      } else {
        return `background-color: var(--${this.colored});`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.type {
  // Base
  width: 100%;
  height: auto;
  padding: 1.375rem 1rem;
  text-decoration: none;

  // Border
  border-radius: $bdr-medium;

  // Shadow
  box-shadow: $bsw-small;

  // Animation
  transition-duration: $tsd;
  transition-property: box-shadow;
  transition-timing-function: $ttf;

  color: $gray-01;

  .content {
    width: 100%;
    p {
      text-align: center;
      font-family: Montserrat;
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  &:hover {
    box-shadow: $bsw-medium;
  }

  &.filter {
    padding: 0.875rem 1.5rem;
    .content {
      p {
        font-size: 0.75em;
        word-break: keep-all;
        white-space: nowrap;
      }
    }
  }
}
</style>
