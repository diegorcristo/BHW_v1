<template>
  <main class="has-dflex flow-nw-col">
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/" content="Checkout" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <div class="row button-group">
          <div class="col">
            <Button stylization="secondary" content="COMPRAR SEM CADASTRO" />
          </div>
        </div>

        <div class="row">
          <hr />
        </div>

        <form class="has-dflex flow-nw-col has-gap-1">
          <div class="row">
            <div class="col">
              <Input typeInput="mail" idInput="mail" labelInput="E-mail" />
            </div>
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
                to="/cadastro"
                stylization="button"
                content="Cadastre-se"
              />
            </div>
            <div class="col">
              <Button stylization="primary" content="Entrar" />
            </div>
          </div>
        </form>

        <div class="row">
          <span class="or"> ou </span>
        </div>

        <div class="row button-group">
          <SocialLogin stylization="uncolored" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: calc(5.5rem + 1.5rem);
}
hr {
  opacity: 0.1;
}
.button-group,
form {
  padding: 1.5rem 0;
}

.or {
  font-size: 0.875em;
  color: $pri-n;
}
</style>
