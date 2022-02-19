<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/minhaconta" content="Minhas compras" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-30 has-dflex flow-nw-col has-gap-1">
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
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  gap: 1.5rem;
  padding-bottom: 3.75rem;
}
</style>
