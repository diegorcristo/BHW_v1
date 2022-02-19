<template>
  <NuxtLink :to="to" class="occasion has-dflex-center flow-nw-col">
    <div class="icon-content has-dflex-center">
      <img
        :src="seticon"
        :alt="icondescription"
        :aria-label="icondescription"
      />
    </div>
    <span>
      {{ content }}
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

    icon: {
      type: String,
      default: '',
    },

    icondescription: {
      type: String,
      default: '',
    },

    to: {
      type: String,
      default: '#',
    },
  },

  computed: {
    seticon() {
      return `https://dashboard.besthunterwine.com.br/img/ocasiao/${this.icon}`
    },
  },
}
</script>

<style lang="scss" scoped>
.occasion {
  // Base
  width: 100%;
  gap: 0.75rem;
  text-decoration: none;

  .icon-content {
    width: 100%;
    padding: 1.875rem 2.5rem;
    border-radius: $bdr-medium;
    box-shadow: $bsw-small;
    gap: 0;

    // Animation
    transition-duration: $tsd;
    transition-property: box-shadow;
    transition-timing-function: $ttf;

    img {
      min-width: 2.25rem;
      min-height: 2.25rem;
      // Animation
      transition-duration: $tsd;
      transition-property: transform;
      transition-timing-function: $ttf;
    }
  }

  // Font
  span {
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    color: $gray-05;
    text-align: center;
    word-break: keep-all;
  }

  &:hover {
    .icon-content {
      box-shadow: $bsw-medium;

      img {
        transform: translatey(-0.25rem);
      }
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .occasion {
    .icon-content {
      width: fit-content;
      width: moz-fit-content;
      padding: 0.875rem;
    }

    span {
      font-size: 0.75em;
    }
  }
}
</style>
