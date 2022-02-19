<template>
  <div>
    <button class="menu-button" @click="toggleActive">
      <div class="icon has-dflex-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="11" width="32" height="6" rx="1.5" fill="#7F0E3D" />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 21C8.67157 21 8 21.6716 8 22.5V25.5C8 26.3284 8.67157 27 9.5 27H38.5C39.3284 27 40 26.3284 40 25.5V22.5C40 21.6716 39.3284 21 38.5 21H9.5ZM9.5 31C8.67157 31 8 31.6716 8 32.5V35.5C8 36.3284 8.67157 37 9.5 37H38.5C39.3284 37 40 36.3284 40 35.5V32.5C40 31.6716 39.3284 31 38.5 31H9.5Z"
            fill="#7F0E3D"
          />
        </svg>
      </div>

      <div class="text">
        <h6>Menu</h6>
      </div>

      <div class="arrow has-dflex-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9899 5C12.2689 4.70711 12.7211 4.70711 13 5C13.279 5.29288 13.279 5.76777 13 6.06065L8.50504 10.7803C8.23463 11.0642 7.7992 11.0741 7.5173 10.8028L3.0346 6.10555C2.74381 5.82565 2.72417 5.35122 2.99073 5.04589C3.2573 4.74055 3.70913 4.71992 3.99993 4.99982L7.97848 9.21181L11.9899 5Z"
            fill="#7F0E3D"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleActive() {
      document.querySelector('.context-menu').classList.toggle('active')
      document.querySelector('.menu-button').classList.toggle('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-button {
  width: fit-content;
  width: moz-fit-contain;
  height: auto;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  padding: 0 0.75rem;
  gap: 0.75rem;
  background-color: $bgc-02;
  border-radius: $bdr-small;

  .icon {
    height: 48px;
    aspect-ratio: 1 / 1;
    svg {
      rect {
        fill: $pri-n;
      }
      path {
        fill: $pri-n;
        opacity: 0.3;
        transition-duration: $tsd;
        transition-property: opacity;
        transition-timing-function: $ttf;
      }
    }
  }

  .text {
    h6 {
      margin: 0;
      color: $gray-03;
      line-height: 1;
      word-break: keep-all;
    }
  }

  .arrow {
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
    svg {
      transition-duration: $tsd;
      transition-property: transform;
      transition-timing-function: $ttf;
    }
  }

  &:hover {
    background-color: $bgc-01;
    box-shadow: none;

    .icon {
      svg {
        path {
          opacity: 0.7;
        }
      }
    }
  }

  &:active {
    .arrow {
      svg {
        transform: translateY(0.2rem);
      }
    }
  }

  &.active {
    .arrow {
      transform: matrix(1, 0, 0, -1, 0, 0);
      //transform: rotate(-180deg);
    }
  }
}

@media screen and (max-width: 48rem) {
  .menu-button {
    padding: 0;

    .text,
    .arrow {
      display: none !important;
    }
  }
}

@media screen and (max-width: 31.25rem) {
  .menu-button {
    .icon {
      height: 24px;
    }
  }
}
</style>
