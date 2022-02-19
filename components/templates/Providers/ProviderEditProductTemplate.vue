<template>
  <main>
    <div class="container-40 has-dflex flow-nw-col">
      <section>
        <div class="row">
          <div class="col">
            <BackPageAdmin
              to="/fornecedores/produtos"
              content="Editar Produto"
            />
          </div>
        </div>
      </section>
      <section class="provider-create-product">
        <div class="row image-row has-dflex flow-nw-row justify-start">
          <ProductEditItemCard image="Punta Negra" />
          <ProductEditItemCard image="Punta Negra" />
          <ProductEditItemCard image="Punta Negra" />
          <NewItemCardGreen classStyle="edit" />
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin
              idInput="name"
              typeInput="text"
              labelInput="Nome do produto"
              textInput="Punta Negra"
            />
            <hr />
            <InputAdmin
              idInput="value"
              typeInput="text"
              labelInput="Valor"
              textInput="R$ 34,90"
            />
            <hr />
            <InputAdmin
              idInput="origin"
              typeInput="text"
              labelInput="Origem"
              textInput="Espanha"
            />
            <hr />
            <InputAdmin
              idInput="type"
              typeInput="text"
              labelInput="Tipo"
              textInput="Tinto Leve"
            />
            <hr />
            <InputAdmin
              idInput="grape"
              typeInput="text"
              labelInput="Uva"
              textInput="Tempranillo"
            />
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
              textInput="Quando a excelência de um produtor encontra a versatilidade de uma uva, o resultado só pode ser um rótulo capaz de agradar gostos e bolsos variados. Assim é o Punta Negra, o vinho espanhol mais vendido no mundo."
            />
            <hr />
            <InputAdmin
              idInput="harmonizarion"
              typeInput="text"
              labelInput="Harmonizações"
              textInput="Pizza, Espaguete a bolonhesa"
            />
            <hr />
            <InputAdmin
              idInput="ocasion"
              typeInput="text"
              labelInput="Ocasião"
              textInput="A Dois, Presente, Casamento"
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
            <InputAdmin
              idInput="region"
              typeInput="text"
              labelInput="Região"
              textInput="Castilla-La Mancha"
            />
            <hr />
            <InputAdmin
              idInput="alcoholcontent"
              typeInput="text"
              labelInput="Teor alcoólico"
              textInput="12,0%"
            />
            <hr />
            <InputAdmin
              idInput="closuretype"
              typeInput="text"
              labelInput="Tipo de fechamento"
              textInput="Rolha sintética"
            />
            <hr />
            <InputAdmin
              idInput="product"
              typeInput="text"
              labelInput="Produtor"
              textInput="J. García Carrión"
            />
            <hr />
            <InputAdmin
              idInput="services"
              typeInput="text"
              labelInput="Serviço"
              textInput="16°C"
            />
            <hr />
            <InputAdmin
              idInput="guardpotential"
              typeInput="text"
              labelInput="Potencial de guarda"
              textInput="Pronto para beber"
            />
            <hr />
            <InputAdmin
              idInput="harvest"
              typeInput="text"
              labelInput="Safra"
              textInput=""
            />
            <hr />
            <InputAdmin
              idInput="punctuation"
              typeInput="text"
              labelInput="Pontuação"
              textInput="92 WS; 95 JL"
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
            <InputAdmin
              idInput="visual"
              typeInput="text"
              labelInput="Visual"
              textInput="Vermelho-rubi com reflexos violáceos."
            />
            <hr />
            <InputAdmin
              idInput="nose"
              typeInput="text"
              labelInput="Nariz"
              textInput="Frutas vermelhas como cereja e morango..."
            />
            <hr />
            <InputAdmin
              idInput="mouth"
              typeInput="text"
              labelInput="Boca"
              textInput="Corpo médio, taninos macios, ótimo..."
            />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col">
            <Button stylization="secondary" content="Excluir" inputtype="" />
          </div>
          <div class="col">
            <Button stylization="tertiary" content="Atualizar" inputtype="" />
          </div>
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
      .image-row {
        gap: 1.5rem;
        overflow-x: auto;
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
