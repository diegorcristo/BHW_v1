<template>
  <div class="header-notification">
    <div class="row">
      <div class="col has-dflex flow-nw-row justify-between align-center">
        <button
          class="back has-dflex flow-nw-row align-center"
          @click="removeActive"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              width="2"
              height="14"
              rx="1"
              transform="matrix(0 -1 -1 0 19 13)"
              fill="#7F0E3D"
            />
            <path
              d="M12.7071 17.2929C13.0976 17.6834 13.0976 18.3166 12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L5.29289 12.7071C4.91432 12.3285 4.90107 11.7189 5.26285 11.3243L10.7628 5.32428C11.136 4.91716 11.7686 4.88965 12.1757 5.26285C12.5828 5.63604 12.6103 6.26861 12.2372 6.67572L7.38414 11.9699L12.7071 17.2929Z"
              fill="#7F0E3D"
            />
          </svg>
          Notificações
        </button>
        <button class="clean" @click="clearNotification">Limpar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document.querySelector('.notification-context').classList.remove('active')
    },

    clearNotification() {
      document.querySelector('.notification-context').classList.remove('active')
      document.querySelector('.notification-clear').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-notification {
  button {
    padding: 0;
    background-color: transparent;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;

    &:hover {
      background-color: rgba(127, 14, 61, 0.1);
    }
  }

  .back {
    gap: 0.5rem;
    font-weight: 600;
    color: $gray-01;
  }

  .clean {
    font-size: 0.875em;
    color: $pri-n;
  }
}
</style>
