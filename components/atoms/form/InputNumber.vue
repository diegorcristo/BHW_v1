<template>
  <div class="number">
    <button class="btn btn-decrement has-dflex-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <rect x="4" y="11.5" width="16" height="2" rx="1" fill="#33303E" />
        </g>
      </svg>
    </button>
    <input type="number" value="1" />
    <button class="btn btn-increment has-dflex-center" @click="incrementNumber">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="11.5" width="16" height="2" rx="1" fill="#33303E" />
        <rect
          opacity="0.3"
          x="13"
          y="4.5"
          width="16"
          height="2"
          rx="1"
          transform="rotate(90 13 4.5)"
          fill="#33303E"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    incrementNumber() {
      let number = parseInt(document.querySelector('.number').value, 10)
      number = isNaN(number) ? 0 : number
      number++
      document.querySelector('.number').value = number
    },
  },
}
</script>

<style lang="scss" scoped>
.number {
  background-color: $w;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 1px $gray-08;
  border-radius: $bdr-small;

  .btn {
    padding: 10px;
    cursor: pointer;
    border: 1px solid;
    background-color: $w;
    border: none;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;

    &.btn-decrement {
      border-radius: $bdr-small 0 0 $bdr-small;
    }
    &.btn-increment {
      border-radius: 0 $bdr-small $bdr-small 0;
    }

    &:hover {
      background-color: rgba(127, 14, 61, 0.12);
    }
  }
  input {
    padding: 0.625rem 0;
    border: none;
    font-family: Montserrat;
    text-align: center;
    font-weight: 600;
    color: $pri-n;
    box-shadow: none;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
