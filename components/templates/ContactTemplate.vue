<template>
  <main>
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col header-col has-dflex flow-nw-col">
            <h2 class="title">Contato</h2>
            <p>
              Entre em contato conosco para esclarecer suas dúvidas, solicitar
              ajuda ou enviar sugestões.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <form action="" class="has-dflex flow-nw-col has-gap-1">
              <div class="row">
                <select>
                  <option disabled selected value>Assunto</option>
                  <option value="1">Suporte</option>
                  <option value="2">Reclamações</option>
                  <option value="3">Sugestões</option>
                  <option value="4">Outros</option>
                </select>
              </div>
              <div class="row">
                <Input typeInput="text" idInput="name" labelInput="Nome" />
              </div>
              <div class="row">
                <Input typeInput="mail" idInput="mail" labelInput="E-mail" />
              </div>
              <div class="row">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="row">
                <div class="col">
                  <Button stylization="secondary" content="Enviar" />
                </div>
                <div class="col"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col col-contact has-dflex flow-nw-col">
            <p>Ou se preferir entre em contato conosco diretamente em:</p>
            <div class="link-content has-dflex flow-nw-col has-gap-1">
              <a
                href="mailto:contato@besthunter.com"
                class="link has-dflex flow-nw-row align-center has-gap-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 6C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H5ZM19.1604 8.14443C18.964 7.77972 18.5091 7.64327 18.1444 7.83965L12 11.1482L5.85559 7.83965C5.49088 7.64327 5.03604 7.77972 4.83966 8.14443C4.64328 8.50913 4.77973 8.96397 5.14444 9.16035L11.6444 12.6604C11.8664 12.7799 12.1336 12.7799 12.3556 12.6604L18.8556 9.16035C19.2203 8.96397 19.3567 8.50913 19.1604 8.14443Z"
                    fill="#7F0E3D"
                  /></svg
                >contato@besthunter.com
              </a>
              <a
                href="tel:+551132100123"
                class="link has-dflex flow-nw-row align-center has-gap-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1667 1H7.83333C6.42705 1 5.75 1.98122 5.75 3.5V20.5C5.75 22.0188 6.42705 23 7.83333 23H16.1667C17.5729 23 18.25 22.0188 18.25 20.5V3.5C18.25 1.98122 17.5729 1 16.1667 1ZM7.13889 19V4H16.8611V19H7.13889Z"
                    fill="#7F0E3D"
                  />
                  <path
                    opacity="0.3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 4V19H17V4H7Z"
                    fill="#7F0E3D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22Z"
                    fill="#7F0E3D"
                  />
                </svg>

                +55 11 3210 0123
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const accesskeyGlobal = 'BZIYTMQCY86A1P6OORHFK6SZSZR01PA3'

export default {
  data() {
    return {
      setting: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        touchThreshold: 1,
        variableWidth: true,
      },
    }
  },
  created() {
    this.loadUser()
  },

  methods: {
    loadUser() {
      const bodyParameters = {
        accessKey: accesskeyGlobal,
      }
      axios
        .post('https://api.besthunterwine.com.br/api/Login', bodyParameters)
        .then((respostaAPI) => {
          const token = respostaAPI.data.accessToken
          axios
            .get('https://api.besthunterwine.com.br/api/Usuario?Id=3', {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((respostaAPI) => {
              this.listUser = respostaAPI.data.result

              // this.avatarUsuario = this.listUser.avatar;
              this.nomeUsuario = this.listUser.nome
              this.nascUsuario = this.listUser.dataNascimento
              this.docUsuario = this.listUser.cpf
              this.telUsuario = this.listUser.telefone
              this.emailUsuario = this.listUser.email

              this.enderecoUsuario =
                this.listUser.endereco[0].logradouro +
                ' ' +
                this.listUser.endereco[0].numero.toString()
              this.complementoUsuario = this.listUser.endereco[0].complemento
              this.cepUsuario =
                this.listUser.endereco[0].cep.toString() +
                ' - ' +
                this.listUser.endereco[0].bairro
            })
        })
        .catch(console.log)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-col {
  gap: 1.5rem;
  padding-top: 1.5rem;

  .title {
    color: $pri-n;
  }
}

form {
  padding: 1rem 0;
}

.col-contact {
  gap: 1.375rem;
  .link-content {
    .link {
      text-decoration: none;
      color: $aux-blue-d;
    }
  }
}
</style>
