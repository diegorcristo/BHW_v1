<template>
  <main>
    <section>
      <div class="container-30">
        <div class="row">
          <div class="col">
            <BackPageMyAccount to="/" content="Voltar" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-30">
        <br />
        <h2>Página de Ajuda em construção!</h2>
      </div>
    </section>
  </main>
</template>
<script>
    import axios from "axios";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  const accesskeyGlobal = "BZIYTMQCY86A1P6OORHFK6SZSZR01PA3";


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
      this.loadUser();

    },

    methods: {
      loadUser() {
        const bodyParameters = {
          accessKey: accesskeyGlobal
        };
        axios.post(
          'https://api.besthunterwine.com.br/api/Login',
          bodyParameters,
        ).then((respostaAPI) => {
          const token = respostaAPI.data.accessToken;
          axios
            .get("https://api.besthunterwine.com.br/api/Usuario?Id=3", { headers: { "Authorization": `Bearer ${token}` } })
            .then((respostaAPI) => {
              this.listUser = respostaAPI.data.result;

              // this.avatarUsuario = this.listUser.avatar;
              this.nomeUsuario = this.listUser.nome;
              this.nascUsuario = this.listUser.dataNascimento;
              this.docUsuario = this.listUser.cpf;
              this.telUsuario = this.listUser.telefone;
              this.emailUsuario = this.listUser.email;

              this.enderecoUsuario = this.listUser.endereco[0].logradouro + ' ' + this.listUser.endereco[0].numero.toString();
              this.complementoUsuario = this.listUser.endereco[0].complemento;
              this.cepUsuario = this.listUser.endereco[0].cep.toString() + ' - ' + this.listUser.endereco[0].bairro;

            });
        }).catch(console.log);
      }
    },
  }
</script>

<style lang="scss" scoped>
  form {
    gap: 2.5rem;
    .group

  {
    padding: 1rem;
    background-color: $w;
    border-radius: $bdr;
  }
  }
</style>
