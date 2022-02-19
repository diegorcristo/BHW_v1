<template>
  <figure class="image">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.0007 36.6673C29.2054 36.6673 36.6673 29.2054 36.6673 20.0007C36.6673 10.7959 29.2054 3.33398 20.0007 3.33398C10.7959 3.33398 3.33398 10.7959 3.33398 20.0007C3.33398 29.2054 10.7959 36.6673 20.0007 36.6673Z"
        fill="#7F0E3D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.6667 11C21.6667 10.4477 21.219 10 20.6667 10H19.3333C18.781 10 18.3333 10.4477 18.3333 11V18.3333H11C10.4477 18.3333 10 18.781 10 19.3333V20.6667C10 21.219 10.4477 21.6667 11 21.6667H18.3333V29C18.3333 29.5523 18.781 30 19.3333 30H20.6667C21.219 30 21.6667 29.5523 21.6667 29V21.6667H29C29.5523 21.6667 30 21.219 30 20.6667V19.3333C30 18.781 29.5523 18.3333 29 18.3333H21.6667V11Z"
        fill="#7F0E3D"
      />
    </svg>
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 8.234rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;
}
</style>
