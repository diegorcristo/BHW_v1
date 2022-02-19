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
            opacity="0.3"
            d="M69.7989 43.833H110.69C111.045 43.833 111.388 43.9587 111.659 44.1877L138.803 67.1475C139.14 67.4325 139.335 67.8514 139.335 68.2928V132.743C139.335 141.546 139.234 142.166 130.204 142.166H69.7989C60.7685 142.166 60.668 141.546 60.668 132.743V53.2566C60.668 44.4531 60.7685 43.833 69.7989 43.833Z"
            fill="#7F0E3D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M93.0456 97.9178L86.0924 90.9646C84.1723 89.0445 84.1723 85.9314 86.0924 84.0113C88.0125 82.0913 91.1255 82.0913 93.0456 84.0113L99.9988 90.9646L106.952 84.0113C108.872 82.0913 111.985 82.0913 113.905 84.0113C115.825 85.9314 115.825 89.0445 113.905 90.9646L106.952 97.9178L113.905 104.871C115.825 106.791 115.825 109.904 113.905 111.824C111.985 113.744 108.872 113.744 106.952 111.824L99.9988 104.871L93.0456 111.824C91.1255 113.744 88.0125 113.744 86.0924 111.824C84.1723 109.904 84.1723 106.791 86.0924 104.871L93.0456 97.9178Z"
            fill="#7F0E3D"
          />
        </svg>
      </div>
      <div class="row">
        <div class="col has-dflex flow-nw-col has-gap-1">
          <h4 class="title">${Item} Excluído</h4>
          <p class="description">
            Manteremos uma cópia de segurança dos dados em sistema por
            <span>14 dias</span>.
          </p>
          <p class="support">Entre em contato com o <a href="#">suporte</a>.</p>
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
      color: $gray-02;

      span {
        color: $pri-l;
      }
    }

    .support {
      font-size: 13px;
      color: $gray-01;
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
