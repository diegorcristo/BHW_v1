<template>
  <main>
    <div class="container-40 has-dflex flow-nw-col">
      <section>
        <div class="row">
          <div class="col">
            <BackPageAdmin
              to="/fornecedores/produtos"
              content="Adicionar Produto"
            />
          </div>
        </div>
      </section>
      <section class="provider-create-product">
        <div class="row">
          <div class="col image-col has-dflex flow-nw-row">
            <NewItemCardGreen classStyle="new" />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin
              idInput="name"
              typeInput="text"
              labelInput="Nome do produto"
            />
            <hr />
            <InputAdmin idInput="value" typeInput="text" labelInput="Valor" />
            <hr />
            <InputAdmin idInput="origin" typeInput="text" labelInput="Origem" />
            <hr />
            <InputAdmin idInput="type" typeInput="text" labelInput="Tipo" />
            <hr />
            <InputAdmin idInput="grape" typeInput="text" labelInput="Uva" />
          </div>
        </div>
      </section>
      <section class="has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <div class="col">
            <h6>Mais detalhes</h6>
          </div>
        </div>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <TextareaAdmin
              idInput="desciption"
              typeInput="text"
              labelInput="Descrição"
            />
            <hr />
            <InputAdmin
              idInput="harmonizarion"
              typeInput="text"
              labelInput="Harmonizações"
            />
            <hr />
            <InputAdmin
              idInput="ocasion"
              typeInput="text"
              labelInput="Ocasião"
            />
          </div>
        </div>
      </section>
      <section class="has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <div class="col">
            <h6>Ficha técnica</h6>
          </div>
        </div>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin idInput="region" typeInput="text" labelInput="Região" />
            <hr />
            <InputAdmin
              idInput="alcoholcontent"
              typeInput="text"
              labelInput="Teor alcoólico"
            />
            <hr />
            <InputAdmin
              idInput="closuretype"
              typeInput="text"
              labelInput="Tipo de fechamento"
            />
            <hr />
            <InputAdmin
              idInput="product"
              typeInput="text"
              labelInput="Produtor"
            />
            <hr />
            <InputAdmin
              idInput="services"
              typeInput="text"
              labelInput="Serviço"
            />
            <hr />
            <InputAdmin
              idInput="guardpotential"
              typeInput="text"
              labelInput="Potencial de guarda"
            />
            <hr />
            <InputAdmin idInput="harvest" typeInput="text" labelInput="Safra" />
            <hr />
            <InputAdmin
              idInput="punctuation"
              typeInput="text"
              labelInput="Pontuação"
            />
          </div>
        </div>
      </section>
      <section class="has-dflex flow-nw-col has-gap-1">
        <div class="row">
          <div class="col">
            <h6>Especificações</h6>
          </div>
        </div>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin idInput="visual" typeInput="text" labelInput="Visual" />
            <hr />
            <InputAdmin idInput="nose" typeInput="text" labelInput="Nariz" />
            <hr />
            <InputAdmin idInput="mouth" typeInput="text" labelInput="Boca" />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col">
            <Button stylization="tertiary" content="Atualizar" inputtype="" />
          </div>
          <div class="col is-4"></div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
main {
  gap: 1.5rem;

  .container-40 {
    gap: 1.5rem;
  }

  section {
    .provider-create-product {
      padding-bottom: 1rem;
      .col {
        gap: 1.5rem;
      }
    }

    .card-col {
      padding: 1rem;
      background-color: $bgc-02;
      border-radius: $bdr-small;
    }
  }
}
</style>
