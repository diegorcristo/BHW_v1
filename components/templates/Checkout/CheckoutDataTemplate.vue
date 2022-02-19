<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/checkout" content="Dados do Cliente" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-30">
        <hr />
      </div>
    </section>

    <section>
      <div class="container-30 has-dflex flow-nw-col has-gap-1">
        <form class="has-dflex flow-nw-col has-gap-1">
          <div class="row">
            <Input typeInput="text" idInput="name" labelInput="Nome" />
          </div>
          <div class="row">
            <Input typeInput="mail" idInput="mail" labelInput="E-mail" />
          </div>
          <div class="row">
            <div class="col">
              <Input typeInput="text" idInput="cep" labelInput="Cep" />
            </div>
            <div class="col">
              <Input typeInput="text" idInput="numero" labelInput="Número" />
            </div>
          </div>
          <div class="row">
            <Input typeInput="text" idInput="rua" labelInput="Rua" />
          </div>
          <div class="row">
            <Input
              typeInput="text"
              idInput="complemento"
              labelInput="Complemento"
            />
          </div>

          <div class="row button-group">
            <Button stylization="secondary" content="CONTINUAR" />
          </div>
        </form>
      </div>
    </section>
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
</style>
