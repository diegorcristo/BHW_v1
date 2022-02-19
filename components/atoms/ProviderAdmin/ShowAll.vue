<template>
  <NuxtLink :to="to" class="show-all has-dflex flow-nw-row align-center">
    Ver todos
    <svg
      class="icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2929 17.2929C10.9024 17.6834 10.9024 18.3166 11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.7071 12.7071C19.0857 12.3285 19.0989 11.7189 18.7372 11.3243L13.2372 5.32428C12.864 4.91716 12.2314 4.88965 11.8243 5.26285C11.4172 5.63604 11.3897 6.26861 11.7628 6.67572L16.6159 11.9699L11.2929 17.2929Z"
        fill="#5A67DF"
      />
    </svg>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.show-all {
  text-decoration: none;
  font-size: 0.875em;
  font-weight: 400;
  color: $aux-blue-d;
  cursor: pointer;

  .icon {
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }

  &:hover {
    .icon {
      transform: translateX(0.25rem);
    }
  }
}
</style>
