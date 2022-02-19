<template>
  <div class="details-card">
    <accordion-product>
      <template v-slot:title>Detalhes do pedido</template>
      <template v-slot:content>
        <div class="row">
          <div
            class="
              row
              has-flex
              flow-nw-col
              align-stretch
              justify-between
              has-gap-1
            "
          >
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
            <div class="row has-flex align-stretch justify-between has-gap-1">
              <p>Subtotal</p>
              <h6>R$165,10</h6>
            </div>
            <div class="row has-flex align-stretch justify-between has-gap-1">
              <p>Frete</p>
              <h6>R$10,00</h6>
            </div>
            <div
              class="
                row
                has-flex
                align-stretch
                justify-between
                has-gap-1
                border-total
              "
            >
              <p>Total</p>
              <h6>R$ 175,10</h6>
            </div>
          </div>
        </div>
      </template>
    </accordion-product>
  </div>
</template>


<style lang="scss">
.details-card {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 1rem;

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
