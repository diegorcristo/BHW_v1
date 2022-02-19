<template>
  <NuxtLink :to="to" class="back">
    <svg
      width="28"
      height="28"
      class="icon"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3251 7.82561C18.7807 7.37 18.7807 6.6313 18.3251 6.17569C17.8695 5.72008 17.1308 5.72008 16.6752 6.17569L9.67521 13.1757C9.23353 13.6174 9.21808 14.3286 9.64015 14.789L16.0568 21.789C16.4922 22.264 17.2302 22.2961 17.7052 21.8607C18.1801 21.4253 18.2122 20.6873 17.7768 20.2123L12.115 14.0357L18.3251 7.82561Z"
        fill="#7F0E3D"
      />
    </svg>
    {{ content }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.back {
  // Base
  width: fit-content;
  width: moz-fit-content;
  display: inline-block;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  transition-duration: $tsd;
  transition-property: color;
  transition-timing-function: $ttf;

  // Text
  text-decoration: none;
  color: $gray-01;
  line-height: 1;

  .icon {
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }
  &:hover {
    .icon {
      transform: translateX(-0.5rem);
    }

    color: $pri-n;
  }
}
</style>
