<template>
  <NuxtLink :to="to" class="harmonization" :style="bgfunction">
    <h5>
      {{ content }}
    </h5>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },

    bgimage: {
      type: String,
      default: '',
    },

    to: {
      type: String,
      default: '#',
    },
  },

  computed: {
    bgfunction() {
      return `background-image: url('media/content/category/${this.bgimage}.jpg')`
    },
  },
}
</script>

<style lang="scss" scoped>
.harmonization {
  // Base
  width: 100%;
  min-width: 7.5rem;
  aspect-ratio: 1 / 0.75;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-content: flex-start;

  // Border
  border-radius: $bdr-medium;

  // Shadow
  box-shadow: $bsw-small;

  // Background
  //background-image: url('{{ bgimage }}');
  //background-image: url('/media/content/category/`{{ bgimage }}`.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  // Animation
  transition-duration: $tsd;
  transition-property: background-size, box-shadow;
  transition-timing-function: $ttf;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(65%);
    background: linear-gradient(
      180.74deg,
      rgba(0, 0, 0, 0) 3.28%,
      rgba(0, 0, 0, 0.8) 48.95%
    );

    // Animation
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }

  h5 {
    z-index: 2;
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    color: $w;

    // Animation
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }

  &:hover {
    background-size: 105% 105%;
    box-shadow: $bsw-medium;

    &::before {
      transform: translateY(55%);
    }

    h5 {
      transform: translateY(-0.5rem);
    }
  }
}
</style>
