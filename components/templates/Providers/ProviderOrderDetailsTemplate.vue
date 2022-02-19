<template>
  <div>
    <main>
      <section class="provider-order-details">
        <div class="container-40 align-stretch has-gap-1">
          <div class="row">
            <div class="col">
              <BackPageProviderOrderDetails
                to="/fornecedores/pedidos"
                content="12345"
                valueOrder="269,60"
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
              container-40
              has-dflex
              flow-nw-col
              align-stretch
              justify-between
              has-gap-1
            "
          >
            <div class="row">
              <ProviderOrderDetails></ProviderOrderDetails>
            </div>
            <div class="row">
              <ProviderDetailsCardCred
                methodPayment="2x Sem Juros no Cartão"
                image="mastercard-colored"
              ></ProviderDetailsCardCred>
            </div>
            <div class="row">
              <ProductTraking
                statusOrder="Pedido entregue"
                trakingCode="00000312455123128592"
              ></ProductTraking>
            </div>
            <div class="row">
              <ProviderDataPurchase
                name="João Silva"
                phone="(11) 9 9832-1235"
                email="joao@gmail.com"
              ></ProviderDataPurchase>
            </div>
          </div>
        </div>
      </section>
      <section class="nota-fiscal">
        <div class="container-30 has-dflex flow-nw-col align-stretch has-gap-1">
          <Button stylization="secondary" content="Visualizar nota fiscal" />
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.fale-gente {
  color: $pri-n;
}
.provider-order-details {
  gap: 1.5rem;
  padding-bottom: 1rem;
}
.nota-fiscal {
  gap: 1.5rem;
  padding-top: 1.5rem;
}
</style>
