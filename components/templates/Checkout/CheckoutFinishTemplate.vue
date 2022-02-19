<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/checkout" content="Resumo" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-30">
        <hr />
      </div>
    </section>
    <section class="sec-content">
      <div class="container-30">
        <div class="row">
          <div class="col has-dflex flow-nw-col">
            <CheckoutFinishOrder />
            <Button stylization="primary" content="Fazer Pedido" />
          </div>
        </div>
      </div>
    </section>
    <PurchaseMade />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: calc(5.5rem + 1.5rem);
  gap: 1.5rem;
}
hr {
  opacity: 0.1;
}
.button-group {
  padding: 1.5rem 0;
}
.sec-content {
  .col {
    gap: 2.25rem;
  }
}
</style>
