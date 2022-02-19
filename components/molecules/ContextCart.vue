<template>
  <aside class="context-cart">
    <div class="modal has-dflex flow-nw-col justify-between">
      <div class="top">
        <div class="row">
          <div class="col">
            <div class="header">
              <h4>Carrinho</h4>
              <p class="description">
                Você tem <span class="quantity">{{ qtde }} item</span> no
                carrinho
              </p>
            </div>
            <div class="content has-dflex flow-nw-col">
              <ItemCart />
              <ItemCart />
              <ItemCart />
              <ItemCart />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="row list-item flow-nw-row justify-between freight">
          <p>Frete</p>
          <a href="#" class="cep-link" @click="addActive">Adicionar CEP</a>
        </div>
        <div class="row list-item flow-nw-row justify-between total">
          <p>Subtotal</p>
          <a class="value">R$ 34,00</a>
        </div>
        <div class="row end-item">
          <Button stylization="primary" content="Finalizar compra" />
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
      document.querySelector('.context-cart').classList.remove('active')
    },
    addActive() {
      document.querySelector('.cep-modal').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.context-cart {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  .modal {
    z-index: 2;
    width: 100%;
    max-width: 18.75rem;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5rem 0 1rem 0;
    background-color: $bgc-02;
    transform: translateX(100%);
    transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
    box-shadow: $bsw-medium;

    .top {
      overflow-y: auto;
    }

    .header {
      padding: 0 1.5rem;
      .description {
        .quantity {
          font-weight: 700;
          color: $pri-n;
        }
      }
    }

    .content {
      padding: 1.5rem;
      height: 100%;
      gap: 1.5rem;
    }

    .bottom {
      padding: 0 1.5rem;

      .list-item {
        border-top: 1px solid $gray-08;
        padding: 1rem 0;

        .cep-link {
          color: $aux-blue-d;
          font-weight: 500;
          text-decoration: none;
        }
      }

      .total {
        .value {
          color: $pri-n;
          font-weight: 700;
        }
      }

      .end-item {
        padding: 0.5rem;
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
      transform: translateX(0);
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
