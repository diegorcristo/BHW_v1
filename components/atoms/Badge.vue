<template>
  <NuxtLink :to="to" class="badge has-dflex-center" :class="stylization">
    <img
      :src="setIcon"
      :label="iconDescription"
      :aria-label="iconDescription"
    />
    <span class="content">
      {{ content }}
    </span>
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

    icon: {
      type: String,
      default: '',
    },

    iconDescription: {
      type: String,
      default: '',
    },
  },
  computed: {
    setIcon() {
      if (this.stylization === 'flag') {
        return `media/icon/flag/${this.icon}.svg`
        // return `https://dashboard.besthunterwine.com.br/img/paisorigem/${this.icon}`
      } else if (this.stylization === 'cup') {
        return `media/icon/category/${this.icon}.svg`
      } else if (this.stylization === 'sale') {
        return `media/icon/${this.icon}.svg`
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.badge {
  // Base
  width: fit-content;
  width: moz-fit-content;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: $bgc-03;

  // Border
  box-shadow: 0px 0px 0px 1px $gray-07;
  border-radius: 2rem;

  // Animation
  transition-duration: $tsd;
  transition-property: box-shadow;
  transition-timing-function: $ttf;

  text-decoration: none;

  img {
    max-width: inherit;
  }

  span {
    // Text
    font-family: Montserrat;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    word-break: keep-all;
    color: $gray-05;
    white-space: nowrap;

    // Animation
    transition-duration: $tsd;
    transition-property: color;
    transition-timing-function: $ttf;
  }

  &.flag {
    padding: 0.375rem 1rem 0.375rem 0.25rem;
    gap: 0.5rem;

    img {
      object-fit: fill;
    }
  }

  &.cup {
    gap: 0.5rem;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px $gray-06;

    span {
      color: $gray-04;
    }
  }

  &.pts,
  &.sale {
    padding: 0.125rem 0.375rem;
    border: none;

    span {
      color: $w;
    }
  }

  &.pts {
    background-color: $pri-l;
  }

  &.sale {
    background-color: $aux-orange-d;
  }
}
</style>
