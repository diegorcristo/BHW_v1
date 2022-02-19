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
              <div class="col has-dflex flow-nw-col e has-gap-1">
                <h3>Torne-se um parceiro!</h3>
                <p>
                  Fornecedores de todo território nacional estão por aqui.
                  Oferecemos as ferramentas e habilidades para seu marketplace.
                </p>
                <p>
                  Preencha os campos abaixo para iniciar nosso pré-cadastro:
                </p>
              </div>
            </div>
            <div class="row">
              <form action="">
                <div class="row input-row">
                  <Input
                    typeInput="text"
                    idInput="name"
                    labelInput="Seu nome"
                    autocomplete="off"
                  />
                </div>
                <div class="row input-row">
                  <Input
                    typeInput="mail"
                    idInput="mail"
                    labelInput="Seu e-mail"
                    autocomplete="off"
                  />
                </div>
                <div class="row input-row">
                  <Input
                    typeInput="text"
                    idInput="name-company"
                    labelInput="Nome da Empresa"
                    autocomplete="off"
                  />
                </div>
                <div class="row input-row">
                  <div class="col">
                    <Input
                      typeInput="text"
                      idInput="phone"
                      labelInput="Telefone (WhatsApp)"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="row button-row">
                  <Button
                    stylization="tertiary"
                    content="QUERO ME CADASTRAR"
                    inputtype=""
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="row contact-row">
            <p>Já tem um cadastro?</p>
            <p class="color-contato">Clique para entrar</p>
          </div>
        </div>
      </div>
    </main>
    <ProviderModalNotificationCreate />
  </div>
</template>


<style lang="scss">
.login-dashboard {
  .row-login {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    gap: 0;

    p {
      font-size: 0.875rem;
    }
    .register-card {
      height: 100%;
      background-color: $w;
    }

    .logo-card {
      height: 100%;
      background-color: $gray-08;
    }

    .icon-col {
      background-color: $gray-08;
    }

    .content-col {
      background-color: $bgc-02;
      position: relative;

      .title-row {
        padding-bottom: 1.5rem;
      }

      form {
        width: 100%;

        .input-row:nth-child(1) {
          padding-bottom: 1rem;
        }

        .input-row:nth-child(2) {
          padding-bottom: 1rem;
        }

        .input-row:nth-child(3) {
          padding-bottom: 1rem;
        }

        .input-row:nth-child(4) {
          padding-bottom: 0.5rem;
        }

        .button-row {
          padding-top: 1.5rem;
        }
      }

      .contact-row {
        width: 100%;
        position: absolute;
        /* bottom: 2.5rem; */
        left: 0;
        gap: 0.25rem;

        p {
          font-size: 0.75rem;
        }

        .color-contato {
          color: $pri-l;
          font-weight: 700;
        }
      }
    }
  }
}
</style>