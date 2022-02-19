<template>
  <aside class="purchase-made has-dflex-center active">
    <div class="container-30">
      <div class="modal has-dflex flow-nw-col justify-between">
        <div class="row justify-end">
          <div class="close-btn has-dflex-center" @click="removeActive">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.51465"
                y="22.5996"
                width="21.3333"
                height="2.66667"
                rx="1.33333"
                transform="rotate(-45 7.51465 22.5996)"
                fill="#33303E"
              />
              <rect
                opacity="0.5"
                x="9.40039"
                y="7.51562"
                width="21.3333"
                height="2.66667"
                rx="1.33333"
                transform="rotate(45 9.40039 7.51562)"
                fill="#33303E"
              />
            </svg>
          </div>
        </div>
        <div class="row content flow-nw-col has-gap-2">
          <div class="icon">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M42.0001 15.9672L27.1889 33.7406C25.9514 35.2256 23.7444 35.4262 22.2594 34.1888C20.7745 32.9513 20.5738 30.7443 21.8113 29.2594L39.3113 8.25935C40.7106 6.58022 43.2896 6.58022 44.6889 8.25935L62.1889 29.2594C63.4263 30.7443 63.2257 32.9513 61.7407 34.1888C60.2558 35.4262 58.0488 35.2256 56.8113 33.7406L42.0001 15.9672Z"
                fill="#7F0E3D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.28077 31.5C7.6302 31.5 7.15284 32.1114 7.31062 32.7425L16.9319 71.2276C17.2658 72.5631 18.4657 73.5 19.8423 73.5H64.1577C65.5343 73.5 66.7342 72.5631 67.0681 71.2276L76.6894 32.7425C76.8471 32.1114 76.3698 31.5 75.7192 31.5H8.28077ZM39.5 42C38.9478 42 38.5 42.4477 38.5 43V62C38.5 62.5523 38.9478 63 39.5 63H44.5C45.0523 63 45.5 62.5523 45.5 62V43C45.5 42.4477 45.0523 42 44.5 42H39.5ZM21.2546 44.3487C21.1117 43.8152 21.4283 43.2669 21.9617 43.124L26.7913 41.8299C27.3248 41.6869 27.8732 42.0035 28.0161 42.537L32.9337 60.8896C33.0766 61.423 32.76 61.9714 32.2265 62.1143L27.3969 63.4084C26.8635 63.5513 26.3151 63.2348 26.1722 62.7013L21.2546 44.3487ZM57.2087 41.8299C56.6752 41.687 56.1269 42.0035 55.9839 42.537L51.0664 60.8896C50.9234 61.4231 51.24 61.9714 51.7735 62.1143L56.6031 63.4084C57.1366 63.5514 57.6849 63.2348 57.8278 62.7013L62.7454 44.3487C62.8883 43.8153 62.5718 43.2669 62.0383 43.124L57.2087 41.8299Z"
                fill="#7F0E3D"
              />
            </svg>
          </div>
          <div class="row flow-nw-col has-gap-1">
            <h4 class="title">Compra efetuada</h4>
            <p>Se quiser, você pode ver suas compras em Menu > Meus Pedidos</p>
          </div>
        </div>
        <div class="row">
          <button class="see-orders">Ver Pedido</button>
        </div>
      </div>
    </div>
    <div class="bg" @click="removeActive"></div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      qtde: 0,
    }
  },
  methods: {
    removeActive() {
      document.querySelector('.purchase-made').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.purchase-made {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  .container-30 {
    z-index: 2;
  }

  .modal {
    opacity: 0;
    width: 100%;
    padding: 1.25rem 1.25rem 1rem 1.25rem;
    background-color: $bgc-02;
    border-radius: $bdr-medium;
    gap: 2.875rem;

    .close-btn {
      cursor: pointer;
    }

    .icon {
      padding: 1.5rem 1.625rem 1rem 1.75rem;
      border-radius: 32px 0px;
      background-color: $gray-08;
    }
    .content {
      padding: 0 1.25rem;
    }

    .title,
    p {
      color: $b;
      text-align: center;
    }

    p {
      font-size: 0.875em;
    }

    .see-orders {
      width: 100%;
      padding: 0.5rem;
      color: $pri-l;
      font-size: 0.75em;
      font-weight: 600;
      background-color: transparent;
      border-radius: $bdr-small;
      transition-duration: $tsd;
      transition-property: background-color;
      transition-timing-function: $ttf;

      &:hover {
        background-color: hsla(335, 80%, 28%, 0.05);
      }
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
    }
    .bg {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
