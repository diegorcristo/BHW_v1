<template>
  <div class="row by-type">
    <div class="col content has-dflex flow-nw-col">
      <h6 class="title">Por tipo</h6>

      <div class="items">
        <div v-for="item in listWineType" v-bind:key="item.id">
          <Type
            to="/"
            stylization="filter"
            v-bind:content="item.descricao"
            v-bind:colored="item.cssClass"
          />
        </div>

        <!--<Type to="/" content="Espumante" stylization="typ-sparkling-01" />
        <Type to="/" content="Branco Leve" stylization="typ-white-01" />
        <Type to="/" content="Branco Aromatizado" stylization="typ-white-02" />
        <Type to="/" content="Branco Encorpado" stylization="typ-white-03" />
        <Type to="/" content="Sobremesa" stylization="typ-dessert-01" />

        <Type to="/" content="Rosé Leve" stylization="typ-rose-01" />
        <Type to="/" content="Rosé Médio Corpo" stylization="typ-rose-02" />
        <Type to="/" content="Tinto Leve" stylization="typ-red-01" />
        <Type to="/" content="Tinto Médio Corpo" stylization="typ-red-02" />
        <Type to="/" content="Tinto Encorpado" stylization="typ-red-03" />-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const accesskeyGlobal = 'BZIYTMQCY86A1P6OORHFK6SZSZR01PA3'
export default {
  data() {
    return {
      listWineType: [],
    }
  },
  created() {
    this.loadListWineType()
  },
  methods: {
    loadListWineType() {
      const bodyParameters = {
        accessKey: accesskeyGlobal,
      }
      axios
        .post('https://api.besthunterwine.com.br/api/Login', bodyParameters)
        .then((respostaAPI) => {
          const token = respostaAPI.data.accessToken
          axios
            .get('https://api.besthunterwine.com.br/api/TipoVinho/List', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            })
            .then((respostaAPI) => {
              this.listWineType = respostaAPI.data.result
            })
        })
        .catch(console.log)
    },
  },
}
</script>

<style lang="scss" scoped>
.by-type {
  .content {
    gap: 1.5rem;

    .title {
      color: gray-01;
    }

    .items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      padding: 0 0 2.5rem 0;
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-type {
    justify-content: flex-start;
    .content {
      .title {
        font-size: 1em;
      }

      .items {
        width: 100%;
        overflow-x: auto;
        display: flex;
        justify-content: flex-start !important;
        padding: 0 0 1.5rem 0;

        &::-webkit-scrollbar {
          height: 0px;
          width: 0px;
          border: none;
        }

        .item {
          width: fit-content;
          width: moz-fit-content;
        }
      }
    }
  }
}
</style>
