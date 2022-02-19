<template>
  <div class="badge has-dflex-center">
    <span class="content">
      {{ content }}
    </span>
    <button class="has-dflex-center">
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.99219"
          y="12.5059"
          width="11.3333"
          height="1.41667"
          rx="0.708333"
          transform="rotate(-45 3.99219 12.5059)"
          fill="#8C8A97"
        />
        <rect
          x="4.99365"
          y="4.49219"
          width="11.3333"
          height="1.41667"
          rx="0.708333"
          transform="rotate(45 4.99365 4.49219)"
          fill="#8C8A97"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
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
  padding: 0.375rem 0.5rem;
  background-color: $bgc-03;
  gap: 0.25rem;

  // Border
  box-shadow: 0px 0px 0px 1px $gray-07;
  border-radius: 2rem;

  // Animation
  transition-duration: $tsd;
  transition-property: box-shadow;
  transition-timing-function: $ttf;

  span {
    // Text
    font-family: Montserrat;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    word-break: keep-all;
    //word-break: keep-all;
    color: $gray-01;
  }
  button {
    padding: 0;
    background-color: transparent;
  }
}
</style>
