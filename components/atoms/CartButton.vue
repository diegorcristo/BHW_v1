<template>
  <button class="cart-button has-dflex-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.993 6.41109L17.6063 3.7829C17.7309 3.24888 18.207 2.87109 18.7553 2.87109H20.8202C21.4718 2.87109 22.0001 3.39936 22.0001 4.05101C22.0001 4.70266 21.4718 5.23093 20.8202 5.23093H19.6916L18.1448 11.8441L17.4472 16.0293C17.3555 16.5798 16.831 16.9486 16.282 16.8488L4.91312 14.7818C4.53851 14.7136 4.23508 14.4387 4.13048 14.0726L2.30569 7.68581C2.12317 7.047 2.60283 6.41109 3.26721 6.41109H16.993Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 19.5C8 20.3284 7.32843 21 6.5 21C5.67157 21 5 20.3284 5 19.5C5 18.6716 5.67157 18 6.5 18C7.32843 18 8 18.6716 8 19.5ZM17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5C14 18.6716 14.6716 18 15.5 18C16.3284 18 17 18.6716 17 19.5Z"
        fill="white"
      />
    </svg>
    <span>
      {{ content }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Comprar',
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-button {
  padding: 0.25rem 1.875rem;
  gap: 0.5rem;
  background-color: $pri-n;
  border-radius: $bdr;
  transition-duration: $tsd;
  transition-property: background-color;
  transition-timing-function: $ttf;

  span {
    font-family: Montserrat;
    font-weight: 600;
    color: $w;
    word-break: keep-all;
  }

  &:hover {
    background-color: $pri-d;
  }
}
</style>
