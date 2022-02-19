<template>
  <div class="filter has-dflex flow-nw-row align-center">
    <button class="has-dflex flow-nw-row align-center">
      <span>Filtros</span>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.6 5.3C4.35279 4.97038 4.58798 4.5 5 4.5H19C19.412 4.5 19.6472 4.97038 19.4 5.3L14 12.5V20.691C14 21.0627 13.6088 21.3044 13.2764 21.1382L10 19.5V12.5L4.6 5.3Z"
          fill="#7F0E3D"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.filter {
  padding: 0.625rem 0;
  box-shadow: 0px 0px 0px 1px $gray-08;
  border-radius: $bdr-small;

  span {
    color: $pri-n;
  }

  button {
    gap: 0.625rem;
    background-color: transparent;
    padding: 0;
  }
}
</style>
