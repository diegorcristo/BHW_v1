<template>
  <main>
    <section>
      <div class="container-30">
        <form class="has-dflex flow-nw-col">
          <div class="row">
            <ImageAccount image="profile" />
          </div>
          <div class="row flow-nw-col">
            <div class="row row-title flow-nw-row justify-between">
              <h6>Minha Conta</h6>
              <svg width="32"
                   height="32"
                   viewBox="0 0 32 32"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9202 8.7783C27.506 9.36409 27.506 10.3138 26.9202 10.8996L15.1535 22.6663C14.8686 22.9512 14.481 23.1095 14.0781 23.1056L8.68752 23.0525C7.87951 23.0446 7.223 22.398 7.20275 21.5902L7.07068 16.3236C7.06038 15.9128 7.21902 15.5159 7.50955 15.2253L19.3777 3.35715C19.9635 2.77137 20.9133 2.77137 21.499 3.35715L26.9202 8.7783Z"
                      fill="#7F0E3D" />
                <rect opacity="0.3"
                      x="6.6665"
                      y="26.666"
                      width="20"
                      height="2.66667"
                      rx="1"
                      fill="#7F0E3D" />
              </svg>
            </div>
            <div class="row group flow-nw-col">
              <div class="row">
                <Input typeInput="mail" idInput="mail" labelInput="E-mail" :textInput="emailUsuario" :classInput="activeInput"/>
              </div>
              <!--<div class="row">
                <Input typeInput="password"
                       idInput="password"
                       labelInput="Senha"
                       :textInput="senhaUsuario"
                       :classInput="activeInput"/>
              </div>-->
            </div>
          </div>
          <div class="row flow-nw-col">
            <div class="row row-title">
              <div class="col">
                <h6>Dados Pessoais</h6>
              </div>
            </div>
            <div class="row flow-nw-col group">

              <div class="row">
                <Input typeInput="text"
                       idInput="NomeCompleto"
                       labelInput="Nome Completo"
                       :textInput="nomeUsuario"
                       :classInput="activeInput"
                       />
              </div>
              <div class="row">
                <Input typeInput="text"
                       idInput="Nascimento"
                       labelInput="Nascimento"
                       :textInput="nascUsuario"
                       :classInput="activeInput"/>
              </div>
              <div class="row">
                <Input typeInput="text"
                       idInput="Documento"
                       labelInput="Documento"
                       :textInput="docUsuario"
                       :classInput="activeInput"/>
              </div>
              <div class="row">
                <Input typeInput="text"
                       idInput="Telefone"
                       labelInput="Telefone"
                       :textInput="telUsuario"
                       :classInput="activeInput"/>
              </div>
            </div>
          </div>
          <div class="row flow-nw-col">
            <div class="row row-title">
              <div class="col">
                <h6>Cartões</h6>
              </div>
            </div>
            <div class="row group">
              <CardCredAccount image="mastercard-colored"
                               number="4325"
                               nomeCredCard="Nubank"
                               expiration="10/28" />
            </div>
            <div class="row group">
              <LinkAdd to="/minhaconta/cartaodecredito"
                       content="Adicionar Cartão" />
            </div>
          </div>
          <div class="row flow-nw-col">
            <div class="row row-title">
              <div class="col">
                <h6>Meus Endereços</h6>
              </div>
            </div>
            <div class="row group">
              <AddressAccount :addressLabel="enderecoUsuario"
                              :complementLabel="complementoUsuario"
                              :zipcodeLabel="cepUsuario" />
            </div>
            <div class="row group">
              <LinkAdd to="/minhaconta/endereco" content="Adicionar Endereço" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <Button stylization="secondary" content="Excluir conta" />
            </div>
            <div class="col"></div>
          </div>
          <div class="row"></div>
        </form>
      </div>
    </section>
  </main>
</template>
<script>
  import axios from "axios";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  const linkAPI = "https://bhwapi.azurewebsites.net/api/Usuario?Id=";

  export default {
    data() {
      return {
        nomeUsuario: null,
        nascUsuario: null,
        docUsuario: null,
        telUsuario: null,
        emailUsuario: null,
        senhaUsuario: null,
        enderecoUsuario: null,
        complementoUsuario: null,
        cepUsuario: null,
        activeInput:'active'
      }
    },
    mounted() {
      this.verificaLogado();          
    },

    methods: {
      verificaLogado() {
        if (localStorage.getItem("tokenAPI") === null) {
          console.log("Nao logado");
          this.$router.push({ name: "login" });
        }
        else {
          this.loadUser(linkAPI);
        }
      },
      loadUser(pLinkAPI) {
     
      axios
        .get(pLinkAPI + localStorage.getItem('usuarioAPI'), { headers: { "Authorization": `Bearer ${localStorage.getItem("tokenAPI")}` } })
        .then((respostaAPI) => {
          this.listUser = respostaAPI.data.result;

          this.nomeUsuario = this.listUser.nome;
          this.nascUsuario = this.listUser.dataNascimento;
          this.docUsuario = this.listUser.cpf;
          this.telUsuario = this.listUser.telefone;
          this.emailUsuario = this.listUser.email;

          this.enderecoUsuario = this.listUser.endereco[0].logradouro 
          this.complementoUsuario = 'Nr ' + this.listUser.endereco[0].numero + ' - ' + this.listUser.endereco[0].complemento;
          this.cepUsuario = this.listUser.endereco[0].cep + ' - ' + this.listUser.endereco[0].bairro;

        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  form {
    gap: 2.5rem;

    .group {
      padding: 1rem;
      background-color: $w;
      border-radius: $bdr;
    }
  }
</style>
