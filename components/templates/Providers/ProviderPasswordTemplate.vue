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
                <h3>Criar nova senha</h3>
                <p>Sua nova senha precisa ser diferente da senha anterior.</p>
              </div>
            </div>
            <div class="row">
              <form action="">
                <div class="col input-row">
                  <Input
                    typeInput="password"
                    idInput="password"
                    labelInput="Senha"
                    autocomplete="off"
                  />
                  <p class="p-password">
                    A senha precisa ter 8 ou mais dígitos com letras e números.
                  </p>
                </div>
                <div class="col input-row">
                  <Input
                    typeInput="password"
                    idInput="repeat-password"
                    labelInput="Repita sua senha"
                    autocomplete="off"
                  />
                  <p class="p-password">As senhas precisam ser iguais</p>
                </div>
                <div class="row button-row">
                  <Button
                    stylization="tertiary"
                    content="RESETAR SENHA"
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

        .p-password {
          font-size: 0.75rem;
          line-height: 18px;
        }

        p,
        .color-contato {
          line-height: 21px;
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
/* 
p {
  font-size: 0.875rem;
}


.password-card {
  height: 100%;
  background-color: $w;
}

.logo-card {
  height: 100%;
  background-color: $gray-08;
}


.color-contato {
  color: $pri-l;
  font-weight: 700;
} */
</style>
