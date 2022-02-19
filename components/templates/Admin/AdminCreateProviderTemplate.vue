<template>
  <div>
    <main>
      <section
        class="admin-create-provider container-30 align-stretch has-gap-1"
      >
        <div class="row">
          <div class="col">
            <BackPageAdmin
              to="/fornecedores/produtos"
              content="Adicionar Fornecedor"
            />
          </div>
        </div>
      </section>
      <section class="admin-create-provider container-30">
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
          <NewItemCardGreen classStyle="new" />
        </div>
      </section>
      <section class="card-provider admin-create-provider container-30">
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
            <p>Razão Social</p>
            <Input type="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Responsável</p>
            <Input type="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>Telefone</p>
            <Input type="text" />
          </div>
          <div class="col flex-nw-row align-stretch has-gap-1">
            <p>E-mail</p>
            <Input type="text" />
          </div>
        </div>
      </section>
      <section
        class="admin-create-provider container-30 align-stretch has-gap-1"
      >
        <div class="col button-tam">
          <Button stylization="tertiary" content="Atualizar" inputtype="" />
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.admin-create-provider {
  gap: 1.5rem;
  margin-bottom: 1.563rem;
}

.card-provider {
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
