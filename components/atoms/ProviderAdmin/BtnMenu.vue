<template>
  <button class="btn-menu" @click="menuActive">
    <div class="icon has-dflex-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="5" width="16" height="3" rx="1.5" fill="#7F0E3D" />
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.5 10C4.67157 10 4 10.6716 4 11.5C4 12.3284 4.67157 13 5.5 13H18.5C19.3284 13 20 12.3284 20 11.5C20 10.6716 19.3284 10 18.5 10H5.5ZM5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18H18.5C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15H5.5Z"
          fill="#7F0E3D"
        />
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    menuActive() {
      document.querySelector('.menu-context').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-menu {
  width: fit-content;
  width: moz-fit-contain;
  height: auto;
  box-shadow: none;
  padding: 0;
  gap: 0.75rem;
  background-color: $bgc-02;

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
}
</style>
