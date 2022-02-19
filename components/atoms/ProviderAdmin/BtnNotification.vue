<template>
  <button class="bnt-notification has-dflex-center" @click="notificationActive">
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
        d="M20 10.793C19.5232 10.9278 19.02 11 18.5 11C15.4624 11 13 8.53757 13 5.5C13 4.97999 13.0722 4.47683 13.207 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10.793Z"
        fill="#7F0E3D"
      />
      <path
        d="M18.5 8.5C20.1569 8.5 21.5 7.15685 21.5 5.5C21.5 3.84315 20.1569 2.5 18.5 2.5C16.8431 2.5 15.5 3.84315 15.5 5.5C15.5 7.15685 16.8431 8.5 18.5 8.5Z"
        fill="#2EBBB6"
        stroke="#2EBBB6"
      />
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    notificationActive() {
      document.querySelector('.notification-context').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  padding: 0;
  background-color: transparent;
}
</style>
