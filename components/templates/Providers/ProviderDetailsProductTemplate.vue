<template>
  <div>
    <main>
      <section
        class="provider-details-product container-30 align-stretch has-gap-1"
      >
        <div class="row">
          <div class="col">
            <BackPageAdmin
              to="/fornecedores/produtos"
              content="Punta Negra"
            />
          </div>
        </div>
      </section>
      <section class="provider-details-product container-30">
        <div
          class="
            col
            has-dflex
            flow-nw-row
            align-stretch
            justify-start
            has-gap-1
          "
        >
          <ProductDetailsItemCard image="Punta Negra" />
          <ProductDetailsItemCard image="Punta Negra" />
          <ProductDetailsItemCard image="Punta Negra" />
          <NewItemCardRed />
        </div>
      </section>
      <section class="card-product provider-details-product container-30">
        <div
          class="
            row
            has-dflex
            flow-nw-col
            align-stretch
            justify-between
            has-gap-1
          "
        >
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Nome do produto</p>
            <Input typeInput="text"/>
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Valor</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Origem</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Tipo</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Uva</p>
            <Input typeInput="text" />
          </div>
        </div>
      </section>
      <section class="provider-details-product container-30">
        <h6>Mais detalhes</h6>
      </section>
      <section class="card-product provider-details-product container-30">
        <div
          class="
            row
            has-dflex
            flow-nw-col
            align-stretch
            justify-between
            has-gap-1
          "
        >
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Descricao</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Harmonizações</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Ocasião</p>
            <Input typeInput="text" />
          </div>
        </div>
      </section>
      <section class="provider-create-product container-30">
        <h6>Ficha técnica</h6>
      </section>
      <section class="card-product provider-details-product container-30">
        <div
          class="
            row
            has-dflex
            flow-nw-col
            align-stretch
            justify-between
            has-gap-1
          "
        >
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Região</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Teor alcoólico</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Tipo de fechamento</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Produtor</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Serviço</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Potencial de guarda</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Safra</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Pontuação</p>
            <Input typeInput="text" />
          </div>
        </div>
      </section>
      <section class="provider-details-product container-30">
        <h6>Especificações</h6>
      </section>
      <section class="card-product provider-details-product container-30">
        <div
          class="
            row
            has-dflex
            flow-nw-col
            align-stretch
            justify-between
            has-gap-1
          "
        >
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Visual</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Nariz</p>
            <Input typeInput="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Boca</p>
            <Input typeInput="text" />
          </div>
        </div>
      </section>
     
    </main>
  </div>
</template>

<style lang="scss">
.provider-details-product {
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.card-product {
  border: 1px solid $gray-08;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;
  padding: 1rem;
}

.button-tam {
  max-width: 335px;
}
</style>
