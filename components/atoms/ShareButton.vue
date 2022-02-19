<template>
  <a class="share-btn has-dflex-center" :href="to">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3245 5.52913L7.38724 9.13876C7.22649 8.53662 6.90137 8.0016 6.46289 7.5847L12.5643 3.99023C12.6805 4.57215 12.9482 5.09941 13.3245 5.52913ZM6.5314 12.3498C6.93311 11.9454 7.2318 11.4386 7.3848 10.8719L13.4149 14.3732C13.0292 14.7796 12.7449 15.2831 12.6024 15.8433L6.5314 12.3498Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.833 5.83398C17.2137 5.83398 18.333 4.7147 18.333 3.33398C18.333 1.95327 17.2137 0.833984 15.833 0.833984C14.4523 0.833984 13.333 1.95327 13.333 3.33398C13.333 4.7147 14.4523 5.83398 15.833 5.83398Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.833 19.166C17.2137 19.166 18.333 18.0467 18.333 16.666C18.333 15.2853 17.2137 14.166 15.833 14.166C14.4523 14.166 13.333 15.2853 13.333 16.666C13.333 18.0467 14.4523 19.166 15.833 19.166Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.16699 12.5C5.5477 12.5 6.66699 11.3807 6.66699 10C6.66699 8.61929 5.5477 7.5 4.16699 7.5C2.78628 7.5 1.66699 8.61929 1.66699 10C1.66699 11.3807 2.78628 12.5 4.16699 12.5Z"
        fill="white"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style lang="scss">
.share-btn {
  width: fit-content;
  width: moz-fit-content;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  background-color: $pri-n;
  border-radius: 100%;
}
</style>
