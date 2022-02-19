<template>
  <div class="row by-contry flow-nw-col align-start">
    <h6 class="title">Por país</h6>

    <div class="carousel-scroll">
      <div class="cs-content">
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Espanha"
            icon="espanha"
            iconDescription="Bandeira da Espanha"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Portugal"
            icon="portugal"
            iconDescription="Bandeira da Portugal"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Italia"
            icon="italia"
            iconDescription="Bandeira da Italia"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="França"
            icon="franca"
            iconDescription="Bandeira da França"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Chile"
            icon="chile"
            iconDescription="Bandeira da Chile"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Argentina"
            icon="argentina"
            iconDescription="Bandeira da Argentina"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Brasil"
            icon="brasil"
            iconDescription="Bandeira da Brasil"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Africa do Sul"
            icon="africa-do-sul"
            iconDescription="Bandeira da Africa do Sul"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Austrália"
            icon="australia"
            iconDescription="Bandeira da Austrália"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Estados Unidos"
            icon="usa"
            iconDescription="Bandeira da Estados Unidos"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Pinot Grigio"
            icon="usa"
            iconDescription="Bandeira da Pinot Grigio"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Pinot Grigio"
            icon="usa"
            iconDescription="Bandeira da Pinot Grigio"
          />
        </div>
        <div class="cs-item">
          <Badge
            to="/"
            stylization="flag"
            content="Pinot Grigio"
            icon="usa"
            iconDescription="Bandeira da Pinot Grigio"
          />
        </div>
      </div>
      <div class="cs-btn-prev"></div>
      <div class="cs-btn-next"></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// const accesskeyGlobal = 'BZIYTMQCY86A1P6OORHFK6SZSZR01PA3'
// export default {
//   data() {
//     return {
//       listCountry: [],
//     }
//   },
//   created() {
//     this.loadListCountry()
//   },

//   methods: {
//     loadListCountry() {
//       const bodyParameters = {
//         accessKey: accesskeyGlobal,
//       }
//       axios
//         .post('https://api.besthunterwine.com.br/api/Login', bodyParameters)
//         .then((respostaAPI) => {
//           const token = respostaAPI.data.accessToken
//           axios
//             .get('https://api.besthunterwine.com.br/api/PaisOrigem/List', {
//               headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token,
//               },
//             })
//             .then((respostaAPI) => {
//               this.listCountry = respostaAPI.data.result
//             })
//         })
//         .catch(console.log)
//     },
//   },
// }
</script>

<style lang="scss">
.by-contry {
  gap: 2.125rem;
  padding: 0 0 2.5rem 0;

  .title {
    color: $gray-01;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-contry {
    gap: 1rem;
    padding: 0 0 1.5rem 0;

    .title {
      font-size: 1em;
    }
  }
}
</style>
