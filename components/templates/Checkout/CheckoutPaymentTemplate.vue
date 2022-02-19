<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/checkout/dados" content="Pagamento" />
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
      <div class="container-30">
        <div class="row">
          <LinkInternal
            to="#"
            stylization="button-secondary"
            content="Mostrar Pedido"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <hr />
      </div>
    </section>
    <section>
      <div class="container-30">
        <div class="row">
          <Button stylization="secondary" content="Pagar com paypal" />
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <form>
          <div class="row">
            <div class="col has-dflex flow-nw-col has-gap-1">
              <div class="row">
                <div class="col">
                  <Input
                    typeInput="text"
                    idInput="numero"
                    labelInput="Número"
                  />
                </div>
                <div class="col">
                  <Input
                    typeInput="text"
                    idInput="validade"
                    labelInput="Validade"
                  />
                </div>
                <div class="col">
                  <Input typeInput="text" idInput="cvv" labelInput="CVV" />
                </div>
              </div>
              <div class="row">
                <Input
                  typeInput="text"
                  idInput="nome"
                  labelInput="Nome do Titular"
                />
              </div>
              <div class="row">
                <Input typeInput="text" idInput="cep" labelInput="Cep" />
              </div>
              <div class="row">
                <Input typeInput="text" idInput="rua" labelInput="Rua" />
              </div>
              <div class="row">
                <Input typeInput="text" idInput="cpf" labelInput="CPF" />
              </div>
            </div>
          </div>
          <div class="row button-group">
            <Button stylization="secondary" content="Pagar com cartão" />
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
  padding: 2.25rem 0;
}
</style>
