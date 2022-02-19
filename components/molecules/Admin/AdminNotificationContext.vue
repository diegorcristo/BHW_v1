<template>
  <aside class="notification-context has-dflex justify-end">
    <div class="modal">
      <div class="head">
        <HeaderNotification />
      </div>
      <div class="main">
        <div class="row">
          <CardShopping
            order="74534"
            dateOrder="27/7/21"
            statusOrder="Processando"
            stylization="warning"
          />
        </div>
        <div class="row">
          <CardShopping
            order="85674"
            dateOrder="29/6/21"
            statusOrder="Preparando envio"
            stylization="warning"
          />
        </div>
        <div class="row">
          <CardShopping
            order="23123"
            dateOrder="25/6/21"
            statusOrder="Em trânsito"
            stylization="warning"
          />
        </div>
        <div class="row">
          <CardShopping
            order="12345"
            dateOrder="21/6/21"
            statusOrder="Entregue"
            stylization="success"
          />
        </div>
        <div class="row">
          <CardShopping
            order="32142"
            dateOrder="22/5/21"
            statusOrder="Aguardando retirada"
            stylization="success"
          />
        </div>
        <div class="row">
          <CardShopping
            order="123125"
            dateOrder="2/4/21"
            statusOrder="Cancelado"
            stylization="error"
          />
        </div>
        <div class="row">
          <CardShopping
            order="63457"
            dateOrder="1/3/21"
            statusOrder="Pendente"
            stylization="error"
          />
        </div>
        <div class="row">
          <CardShopping
            order="63457"
            dateOrder="1/3/21"
            statusOrder="Pendente"
            stylization="error"
          />
        </div>
        <div class="row">
          <CardShopping
            order="63457"
            dateOrder="1/3/21"
            statusOrder="Pendente"
            stylization="error"
          />
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
      document.querySelector('.notification-context').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-context {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  .modal {
    z-index: 2;
    width: 100%;
    max-width: 23.4375rem;
    height: 100%;
    max-height: 100vh;
    position: relative;
    padding-bottom: 1.25rem;
    background-color: $bgc-03;
    transform: translateX(100%);
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;

    .head {
      padding: 1.25rem 1.25rem 1.5rem 1.25rem;
    }

    .main {
      height: calc(100% - 5rem);
      padding: 0 1.25rem 0 1.25rem;
      display: grid;
      grid-auto-flow: row;
      gap: 1rem;
      overflow-y: auto;
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
      transform: translate(0);
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
