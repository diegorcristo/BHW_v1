<template>
  <div>
    <main class="login-dashboard">
      <div class="row align-stretch row-login">
        <div class="col has-dflex-center icon-col">
          <LoginDashboard></LoginDashboard>
        </div>
        <div class="col has-dflex-center flow-nw-col content-col">
          <div class="container-50">
            <div class="row title-row">
              <div class="col has-dflex flow-nw-col has-gap-1">
                <h3>Login</h3>
                <p>Seja bem-vindo(a) a área administrativa.</p>
              </div>
            </div>
            <div class="row">
              <form action="">
                <div class="row input-row">
                  <Input
                    typeInput="mail"
                    idInput="mail"
                    labelInput="E-mail"
                    autocomplete="off"
                  />
                </div>
                <div class="row input-row">
                  <div class="col">
                    <Input
                      typeInput="password"
                      idInput="password"
                      labelInput="Senha"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="row">
                  <ForgotDashboardPassword to="/" />
                </div>
                <div class="row button-row">
                  <Button
                    stylization="tertiary"
                    content="ENTRAR"
                    inputtype=""
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="row contact-row">
            <p>Não é um fornecedor ainda?</p>
            <p class="color-contato">Entre em contato</p>
          </div>
        </div>
      </div>
    </main>
    <ModalNotificationForgotPassword />
    <AdminModalForgotPasswordInvalid />
    <AdminModalForgotPassword />
  </div>
</template>

<style lang="scss">
.login-dashboard {
  .row-login {
    min-height: 100vh;

    .icon-col {
      background-color: $gray-08;
    }

    .content-col {
      background-color: $bgc-02;
      position: relative;

      .title-row {
        padding-bottom: 2.5rem;
      }

      form {
        width: 100%;

        .input-row:nth-child(1) {
          padding-bottom: 1rem;
        }

        .input-row:nth-child(2) {
          padding-bottom: 0.5rem;
        }

        .button-row {
          padding-top: 1.5rem;
        }
      }

      .contact-row {
        width: 100%;
        position: absolute;
        bottom: 2.5rem;
        left: 0;
        gap: 0.25rem;
      }
    }
  }
}
</style>