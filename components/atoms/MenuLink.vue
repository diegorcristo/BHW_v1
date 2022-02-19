<template>
  <a class="menu-link" :href="to">
    <img :src="iconPath" class="icon" :alt="name" />

    <span class="content">
      {{ content }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
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
      return `/media/icon/menu/${this.icon}.svg`
    },
  },
}
</script>

<style lang="scss">
.menu-link {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.15rem;
  text-decoration: none;
  color: $gray-02;
  border-radius: $bdr-tiny;
  transition-duration: $tsd;
  transition-property: background-color;
  transition-timing-function: $ttf;

  .icon {
    width: 1rem;
    height: 1rem;
  }

  .content {
    font-family: Montserrat;
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: left;
    font-weight: 600;
    transition-duration: $tsd;
    transition-property: color;
    transition-timing-function: $ttf;
  }

  &:hover {
    background-color: $bgc-01;
    .content {
      color: $pri-d;
    }
  }
}
</style>
