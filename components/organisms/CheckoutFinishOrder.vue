<template>
  <div class="checkout-finish">
    <div class="checkout-header has-dflex flow-nw-col has-gap-1">
      <PurchaseProductCard
        qtdItem="1"
        valueItem="34,90"
        nameItem="Don Simon Selección"
        image="Don Simon Selección"
      ></PurchaseProductCard>
      <PurchaseProductCard
        qtdItem="2"
        valueItem="130,20"
        nameItem="La Grupa Gran Selección"
        image="La Grupa Gran Selección"
      ></PurchaseProductCard>
      <hr />
    </div>
    <div class="checkout-main has-dflex flow-nw-col has-gap-1">
      <div class="row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Subtotal</p>
          <span>R$ 165,10</span>
        </div>
      </div>
      <div class="row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Frete</p>
          <span>R$ 10,00</span>
        </div>
      </div>
      <div class="row total-row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Total</p>
          <span>R$ 175,10</span>
        </div>
      </div>

      <div class="row card-row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Forma de Pagamento</p>
          <span>1x no Cartão</span>
        </div>
      </div>
      <hr />
      <div class="row contact-row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Contato</p>
          <span>bea.h.w@gmail.com</span>
        </div>
      </div>
      <div class="row contact-row">
        <div class="col has-dflex flow-nw-row justify-between">
          <p>Endereço</p>
          <span>R. Augusta, 123 Bloco B Apt 12 12345-123, São Paulo, SP</span>
        </div>
      </div>
      <div class="row edit-row">
        <div class="col">
          <button>Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
hr {
  opacity: 0.1;
}
.checkout-finish {
  width: 100%;
  background-color: $w;
  border-radius: $bdr-medium;
  padding: 1rem;

  .checkout-main {
    padding-top: 1rem;

    p,
    span {
      font-size: 0.875em;
      color: $gray-01;
    }

    p {
      word-break: keep-all;
    }

    span {
      text-align: right;
    }

    .total-row {
      p,
      span {
        font-size: 1em;
        font-weight: 600;
      }

      span {
        color: $pri-n;
      }
    }

    .card-row {
      span {
        font-weight: 600;
      }
    }

    .contact-row {
      span {
        font-weight: 500;
      }
    }

    .edit-row {
      button {
        padding: 0;
        font-size: 0.875em;
        font-weight: 600;
        text-decoration: underline;
        background-color: transparent;
      }
    }
  }

  .border-total {
    width: 100%;
    border-top: 1.0625em solid var(--bdr);

    h6 {
      color: $pri-n;
    }

    p {
      font-weight: 600;
    }
  }
}
</style>
