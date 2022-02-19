<template>
  <button
    class="cep-search has-dflex flow-nw-row align-center has-gap-1"
    @click="toggleActive"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.86445 8.43175L19.6881 2.49053C20.1073 2.35081 20.5603 2.57734 20.7 2.99649C20.7548 3.16071 20.7548 3.33824 20.7 3.50246L14.7588 21.3261C14.6191 21.7453 14.166 21.9718 13.7469 21.8321C13.5417 21.7637 13.3729 21.6151 13.2791 21.4202L9.53875 13.6518L1.77038 9.9115C1.37229 9.71983 1.20496 9.24173 1.39663 8.84365C1.49047 8.64875 1.65924 8.50016 1.86445 8.43175Z"
        fill="#7F0E3D"
      />
    </svg>
    <span>Digite seu Cep</span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleActive() {
      document.querySelector('.cep-modal').classList.toggle('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.cep-search {
  width: fit-content;
  width: moz-fit-content;
  padding: 0;
  background-color: transparent;

  span {
    white-space: nowrap;
    font-size: 1em;
    color: $gray-04;
  }
}

@media screen and (max-width: 85.375rem) {
  .search {
    input {
      font-size: 0.75em;
    }
  }
}
</style>
