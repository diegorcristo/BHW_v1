<template>
  <NuxtLink :to="to" class="back">
    <svg
      width="32"
      height="32"
      class="icon"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.3"
        width="2.66667"
        height="18.6667"
        rx="1"
        transform="matrix(0 -1 -1 0 25.3335 17.334)"
        fill="#7F0E3D"
      />
      <path
        d="M16.9426 23.0578C17.4633 23.5785 17.4633 24.4228 16.9426 24.9435C16.4219 25.4642 15.5777 25.4642 15.057 24.9435L7.05703 16.9435C6.55226 16.4387 6.5346 15.6259 7.01697 15.0997L14.3503 7.09968C14.8479 6.55686 15.6913 6.52019 16.2341 7.01778C16.777 7.51537 16.8136 8.35879 16.316 8.90162L9.84536 15.9606L16.9426 23.0578Z"
        fill="#7F0E3D"
      />
    </svg>
    <h5>
      {{ content }}
    </h5>
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
  text-decoration: none;
  color: $gray-01;

  h5 {
    transition-duration: $tsd;
    transition-property: color;
    transition-timing-function: $ttf;
  }

  .icon {
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }
  &:hover {
    .icon {
      transform: translateX(-0.5rem);
    }

    h5 {
      color: $pri-n;
    }
  }
}
</style>
