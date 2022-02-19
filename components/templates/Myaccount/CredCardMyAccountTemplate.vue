<template>
  <main class="has-dflex flow-nw-col has-gap-1">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/" content="Cartão de Credito" />
            <BackPageMyAccount to="/minhaconta" content="Minha conta" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col has-dflex flow-nw-col has-gap-1">
            <div class="text">
              <p>Faremos uma pequena cobrança com devolução automática.</p>
            </div>

            <form class="has-dflex flow-nw-col has-gap-1">
              <div class="row">
                <div class="col">
                  <Input
                    typeInput="text"
                    idInput="numero"
                    labelInput="Número do Cartão"
                  />
                </div>
              </div>
              <div class="row">
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
                <Input
                  typeInput="text"
                  idInput="numero"
                  labelInput="Número do Cartão"
                />
              </div>
              <div class="row">
                <div class="col">
                  <Input
                    typeInput="text"
                    idInput="validade"
                    labelInput="Validade"
                  />
                </div>
                <div class="row row-button">
                  <div class="col">
                    <Button stylization="secondary" content="Adicionar" />
                  </div>
                  <div class="col"></div>
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
                <Input
                  typeInput="text"
                  idInput="cpfcnpj"
                  labelInput="CPF/CNPJ do Titular"
                />
              </div>
              <div class="row">
                <Input
                  typeInput="text"
                  idInput="apelido"
                  labelInput="Apelido do cartão (Opcional)"
                />
              </div>
              <div class="row button-group">
                <Button stylization="secondary" content="ADICIONAR" />
              </div>
            </form>
          </div>
        </div>
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
