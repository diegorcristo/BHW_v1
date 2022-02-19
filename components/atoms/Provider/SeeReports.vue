<template>
  <button class="see-report has-dflex flow-nw-row align-center has-gap-1">
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
        d="M4.25195 13.9996C5.14004 17.4501 8.27224 19.9996 11.9999 19.9996C16.4182 19.9996 19.9999 16.4179 19.9999 11.9996C19.9999 7.92001 16.9462 4.55362 12.9999 4.06152V13.9996H4.25195Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06055 10.0121L11.0002 11.6V3C6.91637 3 3.54727 6.05992 3.06055 10.0121Z"
        fill="white"
      />
    </svg>
    <span>Ver relatórios</span>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.see-report {
  padding: 0.625rem 2.5rem;
  background-color: $aux-blue-n;
  border-radius: $bdr-small;
  transition-duration: $tsd;
  transition-property: background-color;
  transition-timing-function: $ttf;

  span {
    color: $w;
  }

  &:hover {
    background-color: $aux-blue-d;
  }
}
</style>
