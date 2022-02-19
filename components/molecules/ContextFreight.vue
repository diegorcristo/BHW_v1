<template>
  <aside class="context-freight">
    <div class="modal has-dflex flow-nw-col">
      <div class="row">
        <div class="col">
          <div class="close-btn" @click="closeModal">
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
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col has-dflex flow-nw-col has-gap-1">
          <div class="row">
            <div class="col">
              <h4>Compare preços em 3 fornecedores</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="change">
                Valor do frete para: <span><b>12345-312</b></span
                ><a href="#">(trocar)</a>
              </p>
            </div>
          </div>
          <div class="row content">
            <div class="col has-dflex flow-nw-col has-gap-1">
              <CardFreight name="Opção 1" />
              <CardFreight name="Opção 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" @click="closeModal"></div>
  </aside>
</template>

<script>
export default {
  methods: {
    closeModal() {
      document.querySelector('.context-freight').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.context-freight {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  .modal {
    z-index: 2;
    width: 100%;
    max-width: 25rem;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: $w;
    padding: 1.5rem;
    transform: translateX(100%);
    gap: 1.5rem;
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;

    .close-btn {
      cursor: pointer;
    }

    .change {
      color: $b;
      a,
      span {
        color: $gray-01;
      }
    }

    .content {
      //overflow-y: auto;
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
      transform: translateX(0);
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .context-freight {
    .modal {
      max-width: 100%;
    }
  }
}
</style>
