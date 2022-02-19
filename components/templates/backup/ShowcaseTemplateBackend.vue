<template>
  <div>
    <Header />
    <main>
      <section class="sec-header">
        <div class="container-90">
          <div class="row align-end">
            <div class="col">
              <ResultSearch qtde="qtde" content="content" />
              <h6 class="check-rec"></h6>
            </div>
            <div class="col">
              <Ordering />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-90">
          <div class="row align-stretch">
            <div class="col is-4">
              <div class="row">
                <AccordionShowcase
                  :title="tituloHamonizacao"
                  :items="listHarmonizacaoMenu"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="tituloOcasiao"
                  :items="listOcasiaoMenu"
                />
              </div>
              <div class="row">
                <AccordionShowcase :title="tituloTipo" :items="listTipoMenu" />
              </div>
              <div class="row">
                <AccordionShowcase :title="tituloUva" :items="listUvaMenu" />
              </div>
              <div class="row">
                <AccordionShowcase :title="tituloPais" :items="listPaisMenu" />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="tituloPreco"
                  :items="listPrecoMenu"
                />
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="grid-items">
                    <ProductCardShowcase
                      v-for="item in listProdutos"
                      v-bind:key="item.idProduto"
                      image="Don Simon Reserva"
                      v-bind:imageDescription="item.descricao"
                      v-bind:produtoDescription="item.descricao"
                      v-bind:tipoVinhoDescription="item.tipoVinho"
                      v-bind:bestPrice="item.valor"
                      v-bind:price="'R$ ' + item.valor"
                      v-bind:pontuacao="item.sku"
                      v-bind:paisOrigem="item.paisOrigem"
                    />
                    <!--v-bind:melhorPrice="Melhor Preço"-->

                    <!--<ProductCardShowcase v-for="item in listProdutosMenu" :key="item.id"
     image="Don Simon Reserva"
     :imageDescription="item.imageDescription"
     :produtoDescription="item.produtoDescription"
     :tipoVinhoDescription="item.tipoVinhoDescription"
     :bestPrice="item.bestPrice"
     :Price="item.Price"
     :melhorPrice="item.melhorPrice"
     :pontuacao="item.pontuacao" />-->
                  </div>
                  <div class="load-more">
                    <div class="row">
                      <Button stylization="secondary" content="Carregar mais" />
                    </div>
                  </div>
                </div>
              </div>
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

export default {
  data() {
    return {
      listHarmonizacao: [],
      listOcasiao: [],
      listTipo: [],
      listUva: [],
      listPais: [],
      listPreco: [],
      listProdutos: [],
      listHarmonizacaoMenu: [],
      listOcasiaoMenu: [],
      listTipoMenu: [],
      listUvaMenu: [],
      listPaisMenu: [],
      listPrecoMenu: [
        { id: 0, descricao: 'Até R$ 50' },
        { id: 1, descricao: 'Até R$ 100' },
        { id: 2, descricao: 'Até R$ 150' },
        { id: 3, descricao: 'Até R$ 200' },
        { id: 4, descricao: 'Até R$ 500' },
        { id: 5, descricao: 'R$ 500+' },
      ],
      listProdutosMenu: [],
      list: [],
      tituloHamonizacao: 'Harmonização',
      tituloOcasiao: 'Ocasião',
      tituloTipo: 'Tipo',
      tituloUva: 'Uva',
      tituloPais: 'País',
      tituloPreco: 'Preço',
      i: 0,
      iTotal: 0,
      pQuantMenu: 3,
      Total: 0,
    }
  },
  created() {
    this.carregarListHarmonizacao(
      'https://bhwapi.azurewebsites.net/api/Harmonizacao/List'
    )
    this.carregarListOcasiao(
      'https://bhwapi.azurewebsites.net/api/Ocasiao/List'
    )
    this.carregarListTipo('https://bhwapi.azurewebsites.net/api/TipoVinho/List')
    this.carregarListUva('https://bhwapi.azurewebsites.net/api/TipoUva/List')
    this.carregarListPais(
      'https://bhwapi.azurewebsites.net/api/PaisOrigem/List'
    )
    this.carregarListProdutos(
      'https://bhwapi.azurewebsites.net/api/Produto/List'
    )
    // this.carregarListProdutos("https://bhwapi.azurewebsites.net/api/Produto?Id=1");
  },
  methods: {
    carregarListHarmonizacao(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listHarmonizacao = respostaAPI.data.result

          const listHarms = [...this.listHarmonizacao]
          this.listHarmonizacao = listHarms.filter(
            (listHarm) => listHarm.idHarmonizacao <= this.pQuantMenu
          )

          this.iTotal = this.listHarmonizacao.length
          this.i = 0

          while (this.i < this.iTotal) {
            this.listHarmonizacaoMenu.push({
              id: this.i,
              descricao: this.listHarmonizacao[this.i].descricao,
            })
            this.i++
          }
        })
    },
    carregarListOcasiao(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listOcasiao = respostaAPI.data.result

          const listOcass = [...this.listOcasiao]
          this.listOcasiao = listOcass.filter(
            (listOcas) => listOcas.idOcasiao <= this.pQuantMenu
          )

          this.iTotal = this.listOcasiao.length
          this.i = 0

          while (this.i < this.iTotal) {
            this.listOcasiaoMenu.push({
              id: this.i,
              descricao: this.listOcasiao[this.i].descricao,
            })
            this.i++
          }
        })
    },
    carregarListTipo(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listTipo = respostaAPI.data.result

          const listTipos = [...this.listTipo]
          this.listTipo = listTipos.filter(
            (listTipo) => listTipo.idTipoVinho <= this.pQuantMenu
          )

          this.iTotal = this.listTipo.length
          this.i = 0

          while (this.i < this.iTotal) {
            this.listTipoMenu.push({
              id: this.i,
              descricao: this.listTipo[this.i].descricao,
            })
            this.i++
          }
        })
    },
    carregarListUva(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listUva = respostaAPI.data.result

          const listUvas = [...this.listUva]
          this.listUva = listUvas.filter(
            (listUva) => listUva.idTipoUva <= this.pQuantMenu
          )

          this.iTotal = this.listUva.length
          this.i = 0

          while (this.i < this.iTotal) {
            this.listUvaMenu.push({
              id: this.i,
              descricao: this.listUva[this.i].descricao,
            })
            this.i++
          }
        })
    },
    carregarListPais(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listPais = respostaAPI.data.result

          const listPaiss = [...this.listPais]
          this.listPais = listPaiss.filter(
            (listPais) => listPais.idPaisOrigem <= this.pQuantMenu
          )

          this.iTotal = this.listPais.length
          this.i = 0

          while (this.i < this.iTotal) {
            this.listPaisMenu.push({
              id: this.i,
              descricao: this.listPais[this.i].descricao,
            })
            this.i++
          }
        })
    },
    carregarListProdutos(pLinkAPI) {
      axios
        .get(pLinkAPI, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAPI')}`,
          },
        })
        .then((respostaAPI) => {
          this.listProdutos = respostaAPI.data.result
          this.Total = this.listProdutos.length
        })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  background-color: $bgc-03;
}

.sec-header {
  padding: 1.5rem 0 2.5rem 0;
}

.load-more {
  padding: 2.5rem 0;
  button {
    width: fit-content;
    width: moz-fit-content;
  }
}

.grid-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
</style>
