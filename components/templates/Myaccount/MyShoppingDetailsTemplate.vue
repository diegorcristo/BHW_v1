<template>
  <div>
    <main>
      <section class="my-shopping-details">
        <div class="container-30 align-stretch has-gap-1">
          <div class="row">
            <div class="col">
              <BackPageMyAccountDetails
                to="/minhaconta/compras"
                content="12345"
                valueOrder="175,10"
                dateOrder="12/07/21"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div
            class="
              container-30
              has-dflex
              flow-nw-col
              align-stretch
              justify-between
              has-gap-1
            "
          >
            <div class="row">
              <ProductTraking
                statusOrder="Pedido entregue"
                trakingCode="00000312455123128592"
              ></ProductTraking>
            </div>
            <div class="row">
              <OrderDetails></OrderDetails>
            </div>
          </div>
        </div>
      </section>
      <section class="ajuda">
        <div class="container-30 has-dflex flow-nw-col align-stretch has-gap-1">
          <span class="row"
            ><p>Precisa de ajuda?</p>
            <p class="fale-gente">Fale com a gente</p></span
          >
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.fale-gente {
  color: $pri-n;
}
.my-shopping-details {
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.ajuda {
    gap: 1.5rem;
  padding-top: 1rem;
}
</style>
