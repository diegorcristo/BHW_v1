<template>
  <aside class="notification-clear has-dflex-center">
    <div class="modal has-dflex flow-nw-col">
      <div class="row">
        <svg
          width="200"
          height="185"
          viewBox="0 0 200 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64C0 28.6538 28.6538 0 64 0H200V121C200 156.346 171.346 185 136 185H0V64Z"
            fill="#F2F7F9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M139.333 87.0658C136.988 87.7288 134.514 88.0837 131.958 88.0837C117.023 88.0837 104.916 75.9767 104.916 61.042C104.916 58.4853 105.271 56.0114 105.934 53.667H72.666C66.0386 53.667 60.666 59.0396 60.666 65.667V120.334C60.666 126.961 66.0386 132.334 72.666 132.334H127.333C133.96 132.334 139.333 126.961 139.333 120.334V87.0658Z"
            fill="#7F0E3D"
          />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M131.958 73.3333C138.746 73.3333 144.249 67.8302 144.249 61.0417C144.249 54.2532 138.746 48.75 131.958 48.75C125.169 48.75 119.666 54.2532 119.666 61.0417C119.666 67.8302 125.169 73.3333 131.958 73.3333Z"
            fill="#7F0E3D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M131.999 79.3337C142.125 79.3337 150.333 71.1255 150.333 61.0003C150.333 50.8751 142.125 42.667 131.999 42.667C121.874 42.667 113.666 50.8751 113.666 61.0003C113.666 71.1255 121.874 79.3337 131.999 79.3337Z"
            fill="#9CA5FB"
          />
          <path
            d="M140.743 53.3324C141.434 52.5922 142.594 52.5522 143.334 53.2431C144.074 53.9339 144.114 55.094 143.424 55.8343L130.59 69.5843C129.92 70.3024 128.803 70.3646 128.057 69.7253L121.64 64.2253C120.871 63.5664 120.782 62.409 121.441 61.6402C122.1 60.8715 123.258 60.7824 124.026 61.4414L129.109 65.7977L140.743 53.3324Z"
            fill="#5A67DF"
          />
        </svg>
      </div>
      <div class="row">
        <div class="col">
          <h4 class="title">Notificações Limpas</h4>
          <p class="description">Tudo visto por aqui</p>
        </div>
      </div>
    </div>
    <div class="bg" @click="removeActive"></div>
  </aside>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document.querySelector('.notification-clear').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-clear {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  .modal {
    z-index: 2;
    width: fit-content;
    width: moz-fit-content;
    position: relative;
    gap: 1.5rem;
    padding: 1.125rem 1rem;
    border-radius: $bdr-small;
    background-color: $bgc-03;
    transform: scale(0);
    transition-duration: $tsd;
    transition-property: opacity, transform;
    transition-timing-function: $ttf;

    .title,
    .description {
      text-align: center;
    }

    .title {
      color: $gray-01;
      padding-bottom: 0.5rem;
    }

    .description {
      font-size: 0.875em;
      color: $gray-05;
    }
  }

  .bg {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;
  }

  &.active {
    z-index: 10;

    .modal {
      opacity: 1;
      transform: scale(1);
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .context-cart {
    .modal {
      max-width: 85%;
    }
  }
}
</style>
