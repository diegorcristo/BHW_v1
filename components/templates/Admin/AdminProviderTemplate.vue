<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-40">
        <div class="row">
          <div class="col has-dflex flow-nw-row justify-between align-center">
            <BackPageAdmin to="/admin" content="Fornecedores" />
            <BtnProviderAdminAddNew to="adicionar" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-40 has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
          />
        </div>
        <div class="row">
          <ProviderAdminItem
            name="São Luiz Indústria Vinícola"
            image="São Luiz Indústria Vinícola"
            phone="(11) 3124-3124"
            email="admin@saoluiz.com.br"
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
