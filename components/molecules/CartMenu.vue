<template>
  <button class="cart-button" @click="toggleActive">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.6577 8.54685L23.4753 5.04289C23.6415 4.33087 24.2762 3.82715 25.0074 3.82715H27.7605C28.6294 3.82715 29.3338 4.5315 29.3338 5.40037C29.3338 6.26924 28.6294 6.9736 27.7605 6.9736H26.2558L24.1933 15.7915L23.2077 21.7049C23.1159 22.2553 22.5914 22.6242 22.0424 22.5243L6.3472 19.6707C5.97258 19.6025 5.66916 19.3276 5.56456 18.9615L2.95315 9.82157C2.77063 9.18275 3.25029 8.54685 3.91467 8.54685H22.6577Z"
        fill="#7F0E3D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.667 26C10.667 27.1046 9.77156 28 8.66699 28C7.56242 28 6.66699 27.1046 6.66699 26C6.66699 24.8954 7.56242 24 8.66699 24C9.77156 24 10.667 24.8954 10.667 26ZM22.667 26C22.667 27.1046 21.7716 28 20.667 28C19.5624 28 18.667 27.1046 18.667 26C18.667 24.8954 19.5624 24 20.667 24C21.7716 24 22.667 24.8954 22.667 26Z"
        fill="#7F0E3D"
      />
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    toggleActive() {
      document.querySelector('.context-cart').classList.toggle('active')
      document.querySelector('.cart-button').classList.toggle('active')
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  height: 48px;
  aspect-ratio: 1 / 1;
  padding: 0;
  border-radius: $bdr-small;
  background-color: $w;
  transition-duration: $tsd;
  transition-property: background-color;
  transition-timing-function: $ttf;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: $bgc-01;
  }
}

@media screen and (max-width: 31.25rem) {
  button {
    height: 24px;
  }
}
</style>
