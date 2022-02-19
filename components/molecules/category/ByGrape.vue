<template>
  <div class="row by-grape flow-nw-col align-start">
    <h6 class="title">Por uva</h6>

    <div class="carousel-scroll">
      <div class="cs-content">
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Carbinet Sauvignon"
            icon="pri-d"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Merlot"
            icon="pri-n"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Pinot Noir"
            icon="pri-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Syrah"
            icon="aux-red-d"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Cinsault"
            icon="aux-red-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Sérmillon"
            icon="aux-orange-d"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Moscatel"
            icon="aux-orange-n"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Pinot Grigio"
            icon="aux-orange-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Chardonnay"
            icon="aux-orange-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Test"
            icon="aux-orange-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Test"
            icon="aux-orange-l"
            iconDescription="Taça de vinho"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="cup"
            content="Test"
            icon="aux-orange-l"
            iconDescription="Taça de vinho"
          />
        </div>
      </div>
      <div class="cs-btn-prev"></div>
      <div class="cs-btn-next"></div>
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
      listGrape: [],
    }
  },
  created() {
    this.loadListGrape()
  },

  methods: {
    loadListGrape() {
      const bodyParameters = {
        accessKey: accesskeyGlobal,
      }
      axios
        .post('https://api.besthunterwine.com.br/api/Login', bodyParameters)
        .then((respostaAPI) => {
          const token = respostaAPI.data.accessToken
          axios
            .get('https://api.besthunterwine.com.br/api/TipoUva/List', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            })
            .then((respostaAPI) => {
              this.listGrape = respostaAPI.data.result
            })
        })
        .catch(console.log)
    },
  },
}
</script>

<style lang="scss">
.by-grape {
  gap: 2.125rem;
  padding: 0 0 2.5rem 0;

  .title {
    color: $gray-01;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-grape {
    gap: 1rem;
    padding: 0 0 1.5rem 0;

    .title {
      font-size: 1em;
    }
  }
}
</style>
