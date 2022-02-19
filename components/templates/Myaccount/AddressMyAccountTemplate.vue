<template>
  <main class="has-dflex flow-nw-col has-gap-1">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/minhaconta" content="Minha conta" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <form class="has-dflex flow-nw-col has-gap-1">
          <div class="row">
            <Input typeInput="text" idInput="cep" labelInput="CEP" textInput=""/>
          </div>
          <div class="row">
            <Input typeInput="text" idInput="estado" labelInput="Estado" textInput=""/>
          </div>
          <div class="row">
            <Input typeInput="text" idInput="cidade" labelInput="Cidade" textInput=""/>
          </div>
          <div class="row">
            <Input typeInput="text" idInput="bairro" labelInput="Bairro" textInput=""/>
          </div>
          <div class="row">
            <Input
              typeInput="text"
              idInput="ruaavenida"
              labelInput="Rua/Avenida"
              textInput=""
            />
          </div>
          <div class="row">
            <Input typeInput="text" idInput="numero" labelInput="Número" textInput=""/>
          </div>
          <div class="row">
            <Input
              typeInput="text"
              idInput="complemento"
              labelInput="Andar/Apartamento (Opcional)"
              textInput=""
            />
          </div>
          <div class="row row-button">
            <div class="col">
              <Button stylization="secondary" content="ADICIONAR" />
            </div>
            <div class="col"></div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-bottom: 3.75rem;

  .row-button {
    padding-top: 1.25rem;
  }
}
</style>
