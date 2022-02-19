<template>
  <main>
    <section class="header-section">
      <div class="square sqr01"></div>
      <div class="square sqr02"></div>
      <div class="container-80 ps-relative">
        <div class="row">
          <div class="col">
            <h2 class="title">
              <span class="weight"> Bem-vindo à </span>
              <br />
              Best Hunter Wine!
            </h2>
          </div>
        </div>
      </div>
    </section>
    <figure class="image-mobile has-dflex-center">
      <img src="media/institutional/whoweare-00.jpg" alt="" />
    </figure>
    <section class="content-section">
      <div class="container-70">
        <div class="row content-row align-stretch has-gap-4">
          <div class="col text-col has-dflex flow-nw-col">
            <h4>
              Vamos conectar pessoas apaixonadas por vinho não somente vendendo
              garrafas mas criando um estilo de vida!
            </h4>
            <h6>
              Aproveite esta nova experiência para escolher e apreciar seu
              próximo vinho.
            </h6>
            <div class="text has-dflex flow-nw-col">
              <p>
                Decidimos criar um ambiente que desmitificasse e descomplicasse
                esse universo repleto de notas, sabores e paixões, fazendo com
                que a compra e novas descobertas do mundo dos vinhos sejam
                simples e acessível para todos.
              </p>
              <p>
                O que importa para nós é estar com os clientes em todos os
                momentos de suas vidas, sejam eles em grandes ou pequenas
                conquistas do dia a dia…e brindando a todos!
              </p>
              <p>
                Por isso, a Best Hunter Wine garante a melhor experiência para
                você escolher a sua próxima garrafa.
              </p>
            </div>
          </div>
          <div class="col image-col has-dflex flow-nw-col">
            <figure class="has-dflex-center">
              <img src="media/institutional/whoweare-00.jpg" alt="" />
            </figure>
            <div class="card">
              <h5>
                Nascemos de uma paixão por vinhos que transbordou… e temos muito
                orgulho disso!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="card-mobile">
      <div class="container-70">
        <p>
          Nascemos de uma paixão por vinhos que transbordou… e temos muito
          orgulho disso!
        </p>
      </div>
    </div>
    <section class="accordion-section">
      <div class="container-70">
        <div class="row">
          <h4>As melhores marcas você encontra aqui!</h4>
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
.header-section {
  background-color: $pri-n;
  background-attachment: fixed;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  .square {
    width: 34%;
    aspect-ratio: 1 / 1;
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 6.25rem 0 6.25rem 0;

    &.sqr01 {
      top: -16rem;
      left: 8%;
    }

    &.sqr02 {
      bottom: -19rem;
      left: 50%;
      transform: translateX(-2rem);
    }
  }

  .title {
    color: $bgc-02;
    .weight {
      font-weight: 400;
    }
  }
}

.image-mobile {
  width: 100%;
  display: none !important;

  img {
    width: 100%;
    max-height: 246px;
    object-fit: cover;
  }
}

.content-section {
  padding: 3.5rem 0 3.125rem 0;
  background-color: $gray-08;

  .text-col {
    gap: 1.5rem;

    .text {
      gap: 1.25rem;
    }
  }

  .image-col {
    z-index: 2;
    gap: 1.25rem;
    margin-top: -12rem;

    figure {
      img {
        width: 100%;
        border-radius: 6.25rem 0 6.25rem 0;
      }
    }

    .card {
      padding: 5rem 3.75rem;
      border-radius: 0 6.25rem 0 6.25rem;
      box-shadow: $bsw-medium;
      background-color: $w;

      h5 {
        color: $pri-d;
      }
    }
  }
}

.card-mobile {
  background-color: #f7fafb;
  display: none;
  p {
    font-weight: 600;
    color: $pri-n;
    text-align: center;
    padding: 1.5rem 0;
  }
}

.accordion-section {
  padding-top: 2.625rem;
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .header-section {
    .square {
      width: 16rem;
      border-radius: 4rem 0 4rem 0;

      &.sqr01 {
        top: -10rem;
        left: -10rem;
      }

      &.sqr02 {
        bottom: -10rem;
        left: auto;
        right: -12rem;
      }
    }
    .title {
      text-align: center;
    }
  }
  .image-mobile {
    display: block !important;
  }
  .content-section {
    padding: 1.5rem 0 1.875rem 0;

    .image-col {
      display: none !important;
    }
  }
  .card-mobile {
    display: block;
  }
}
</style>
