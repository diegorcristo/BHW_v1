<template>
  <div>
    <Header />
    <main>
      <section>
        <div class="row">
          <div class="container-30 has-dflex flow-nw-col has-gap-1">
            <div class="row">
              <div class="col">
                <h5 class="title">Login</h5>
              </div>
            </div>

            <form class="has-dflex flow-nw-col has-gap-1" action="">
              <div class="row">
                <Input
                  typeInput="mail"
                  idInput="mail"
                  labelInput="E-mail"
                  autocomplete="off"
                />
              </div>
              <div class="row">
                <div class="col">
                  <Input
                    typeInput="password"
                    idInput="password"
                    labelInput="Senha"
                    autocomplete="off"
                  />
                  <ForgotPassword to="/" />
                </div>
              </div>

              <div id="msgErro">
                <h1 v-if="!isHidden">Usuario e/ou Senha incorretos!</h1>
              </div>
            </form>

            <div class="row button-group">
              <div class="col">
                <form
                  class="has-dflex flow-nw-col has-gap-1"
                  action=""
                  @submit="btnCadastrar($event)"
                >
                  <Button
                    stylization="link"
                    content="Cadastre-se"
                    inputtype=""
                  />
                </form>
              </div>
              <div class="col">
                <form
                  class="has-dflex flow-nw-col has-gap-1"
                  action=""
                  @submit="btnEntrar($event)"
                >
                  <Button stylization="secondary" content="Entrar" />
                </form>
              </div>
            </div>

            <div class="row" v-if="!isHiddenSocial" id="divSocial1">
              <span> ou </span>
            </div>

            <div class="row" v-if="!isHiddenSocial" id="divSocial">
              <SocialLogin class="button-group" display="none" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const linkLogin = 'https://api.besthunterwine.com.br/api/Login'

export default {
  data() {
    return {
      varEmail: '',
      varPassword: '',
      varAcaoBotao: 'Login',
      isHidden: true,
      isHiddenSocial: true,
    }
  },
  mounted() {
    this.limparToken()
  },
  methods: {
    limparToken() {
      localStorage.removeItem('tokenAPI')
      // localStorage.removeItem('usuarioAPI');

      // remover depois dos testes
      localStorage.setItem('usuarioAPI', '3')
    },
    clearForm() {},
    btnEntrar(e) {
      this.varAcaoBotao = 'Login'
      console.log(this.varAcaoBotao)
      this.eventoLogin(e)
    },
    btnCadastrar(e) {
      this.varAcaoBotao = 'Cadastrar'
      console.log(this.varAcaoBotao)
      this.eventoLogin(e)
    },
    eventoLogin(e) {
      e.preventDefault()

      if (this.varAcaoBotao === 'Login') {
        this.varEmail = '' + document.getElementById('mail').value
        this.varPassword = '' + document.getElementById('password').value

        const bodyParameters = {
          accessKey: this.$config.globaltokenAPI,
        }

        const bodyParameters2 = {
          login: this.varEmail,
          senha: this.varPassword,
        }

        axios
          .post(linkLogin, bodyParameters)
          .then((respostaAPI) => {
            localStorage.setItem('tokenAPI', respostaAPI.data.accessToken)

            const linkAPI =
              'https://bhwapi.azurewebsites.net/api/Usuario/Autenticar'

            axios
              .post(linkAPI, bodyParameters2, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
                },
              })
              .then((respostaAPI) => {
                console.log(respostaAPI)

                this.listUser = respostaAPI.data.result

                // if (this.varPassword !== this.listUser.senha || this.varEmail !== this.listUser.login) {
                //  this.isHidden = false;
                //  this.clearForm();
                //  this.limparToken();
                //  return;
                // }

                localStorage.setItem('usuarioAPI', this.listUser.idUsuario)

                this.isHidden = true
                this.$router.push({ name: 'login' })
              })
          })
          .catch(console.log)
      } else {
        this.$router.push({ name: 'cadastro' })
      }
    },
  },
}
</script>

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
