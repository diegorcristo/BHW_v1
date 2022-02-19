<template>
  <button class="menu-button">
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
          d="M11.5284 5.52868C11.7888 5.26833 12.2109 5.26833 12.4712 5.52868C12.7316 5.78902 12.7316 6.21114 12.4712 6.47148L8.47124 10.4715C8.21886 10.7239 7.81246 10.7327 7.54935 10.4915L3.54935 6.82485C3.27794 6.57605 3.25961 6.15434 3.5084 5.88293C3.7572 5.61152 4.17891 5.59318 4.45032 5.84198L7.97979 9.07732L11.5284 5.52868Z"
          fill="#7F0E3D"
        />
      </svg>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.menu-button {
  width: fit-content;
  width: moz-fit-contain;
  height: auto;
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
    }
  }

  .arrow {
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
}
</style>
