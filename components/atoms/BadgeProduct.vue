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
  padding: 0.375rem 1rem;
  background-color: $bgc-02;

  // Border
  box-shadow: 0px 0px 0px 1px $gray-08;
  border-radius: 2rem;

  white-space: nowrap;
  text-decoration: none;

  span {
    // Text
    font-family: Montserrat;
    text-align: center;
    font-size: 0.875rem;
    line-height: 18px;
    font-weight: 600;
    word-break: keep-all;
    color: $gray-01;
  }

  &.flag {
    padding: 0.1875rem 1rem 0.1875rem 0.1875rem;
    gap: 0.5rem;
  }

  &.cup {
    gap: 0.5rem;
  }
}
</style>
