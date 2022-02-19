<template>
  <div class="row by-occasion">
    <div class="col content has-dflex flow-nw-col">
      <h6 class="title">Por ocasião</h6>

      <div class="items has-dflex flow-nw-row has-gap-1">
        <div class="item" v-for="item in listOccasion" v-bind:key="item.id">
          <Occasion
            to="/"
            stylization="filter"
            v-bind:content="item.descricao"
            v-bind:icon="item.nomeArquivo"
            v-bind:icondescription="item.descricaoDetalhada"
          />
        </div>
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
      listOccasion: [],
    }
  },
  created() {
    this.loadListOccasion()
  },
  methods: {
    loadListOccasion() {
      const bodyParameters = {
        accessKey: accesskeyGlobal,
      }
      axios
        .post('https://api.besthunterwine.com.br/api/Login', bodyParameters)
        .then((respostaAPI) => {
          const token = respostaAPI.data.accessToken
          axios
            .get('https://api.besthunterwine.com.br/api/Ocasiao/List', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            })
            .then((respostaAPI) => {
              this.listOccasion = respostaAPI.data.result
            })
        })
        .catch(console.log)
    },
  },
}
</script>

<style lang="scss" scoped>
.by-occasion {
  .content {
    gap: 1.5rem;

    .title {
      color: $gray-01;
    }

    .items {
      width: 100%;
      padding: 0 0 2.5rem 0;

      .item {
        width: 100%;
      }
    }

    .title {
      color: gray-01;
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-occasion {
    justify-content: flex-start;
    .content {
      .title {
        font-size: 1em;
      }
      .items {
        width: 100%;
        overflow-x: auto;
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
