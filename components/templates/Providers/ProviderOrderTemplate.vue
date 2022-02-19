<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-40">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/fornecedores" content="Pedidos" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-40">
        <div class="row justify-between">
          <!-- <ProviderAdminFilterStatus /> -->
          <ProviderAdminFilter />
          <SeeReports />
        </div>
      </div>
    </section>
    <section>
      <div class="container-40 has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <OrderProvider
            order="85674"
            dateOrder="03/06/21"
            statusOrder="Aguardando Pagamento"
            status="Processando"
            stylization="warning"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="85674"
            dateOrder="29/05/21"
            statusOrder="Pago"
            status="Preparando envio"
            stylization="warning"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="23123"
            dateOrder="25/05/21"
            statusOrder="Pago"
            status="Em trânsito"
            stylization="warning"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="12345"
            dateOrder="21/05/21"
            statusOrder="Pago"
            status="Entregue"
            stylization="success"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="32142"
            dateOrder="22/05/21"
            statusOrder="Pago"
            status="Aguardando retirada"
            stylization="success"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="123125"
            dateOrder="1/05/21"
            statusOrder="Reembolsado"
            status="Cancelado"
            stylization="error"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="63457"
            dateOrder="15/04/21"
            statusOrder="Parcialmente Reembolsado"
            status="Entregue"
            stylization="success"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="12345"
            dateOrder="12/04/21"
            statusOrder="Pago"
            status="Entregue"
            stylization="success"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="23123"
            dateOrder="8/04/21"
            statusOrder="Pago"
            status="Em transito"
            stylization="warning"
          />
        </div>
        <div class="row">
          <OrderProvider
            order="123125"
            dateOrder="2/04/21"
            statusOrder="Pago"
            status="Cancelado"
            stylization="error"
          />
        </div>
        <div class="row pagination-row">
          <BtnPagination />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  gap: 1.5rem;
  padding-bottom: 3.75rem;

  .pagination-row {
    padding: 0.5rem 0;
  }
}
</style>
