<template>
  <div>
    <Header />
    <main>
      <section>
        <div class="row">
          <div class="container-30 has-dflex flow-nw-col has-gap-1">
            <div class="row">
              <div class="col">
                <h5 class="title">Cadastrar</h5>
              </div>
            </div>
            <form class="has-dflex flow-nw-col has-gap-1">
              <div class="row">
                <Input typeInput="text" idInput="name" labelInput="Nome" />
              </div>
              <div class="row">
                <Input typeInput="mail" idInput="mail" labelInput="E-mail" />
              </div>
              <div class="row">
                <div class="col">
                  <Input
                    typeInput="password"
                    idInput="password"
                    labelInput="Senha"
                  />
                  <ForgotPassword to="/" />
                </div>
              </div>
              <div class="row button-group">
                <div class="col">
                  <LinkInternal
                    to="/login"
                    stylization="button"
                    content="Fazer Login"
                  />
                </div>
                <div class="col">
                  <Button stylization="secondary" content="Cadastrar" />
                </div>
              </div>
            </form>

            <div class="row">
              <span> ou </span>
            </div>

            <div class="row">
              <SocialLogin class="button-group" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: calc(5.5rem + 1.5rem) !important;
}
.title {
  color: $gray-01;
  padding-bottom: 0.5rem;
}
.button-group {
  padding: 1.5rem 0;
}
</style>
