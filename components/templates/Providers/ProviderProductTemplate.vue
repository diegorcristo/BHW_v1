<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-40">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/" content="Produtos" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-40">
        <div class="row justify-between">
          <!-- <ProviderAdminFilterStatus /> -->
          <ProviderAdminFilter />
          <BtnProviderAdminAddNew to="adicionar" />
        </div>
      </div>
    </section>
    <section>
      <div class="container-40 has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <ProductProvider
            nameItem="Great Wall Longyan"
            image="Great Wall Longyan"
            qtdItem="142"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Hardys Stamp"
            image="Hardys Stamp"
            qtdItem="135"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Casillero del Diablo"
            image="Casillero del Diablo"
            qtdItem="127"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Yellow Tail Shiraz"
            image="Yellow Tail Shiraz"
            qtdItem="119"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Sutter Home White"
            image="Sutter Home White"
            qtdItem="110"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Robert Mondavi Priv..."
            image="Robert Mondavi Priv"
            qtdItem="92"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Beringer Chardonnay"
            image="Beringer Chardonnay"
            qtdItem="86"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Lindeman’s Bin 55"
            image="Lindeman’s Bin 55"
            qtdItem="74"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row">
          <ProductProvider
            nameItem="Jacobs Creek"
            image="Jacobs Creek"
            qtdItem="65"
            valueItem="29,80"
          ></ProductProvider>
        </div>
        <div class="row pagination-row">
          <BtnPagination />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.button-group {
  padding: 1.5rem 0;
}
main {
  gap: 1.5rem;
  padding-bottom: 3.75rem;

  .pagination-row {
    padding: 0.5rem 0;
  }
}
</style>
