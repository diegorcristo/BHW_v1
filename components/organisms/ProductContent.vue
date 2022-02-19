<template>
  <div class="product-content">
    <div class="row row-head align-stretch">
      <div class="col head has-dflex flow-nw-row justify-between align-stretch">
        <div class="tag-content">
          <Badge stylization="pts" content="50 pts" />
          <Badge
            stylization="sale"
            icon="sale"
            icondescription="Icone de duas pessoas"
            content=" Off"
          />
        </div>
        <ShareButton to="/" />
      </div>
    </div>
    <div class="row row-title">
      <div class="col">
        <h3 class="title">Don Simon Selección</h3>
      </div>
    </div>
    <div class="row row-rate">
      <div class="col">
        <StarRate />
      </div>
    </div>
    <div class="row row-price price-content justify-between">
      <span class="best-price">
        <span class="symbol">R$ </span>
        <span>34,90</span>
      </span>
      <!-- <span class="price">
        <small class="symbol">R$ </small>
        <small>34,90</small>
      </span> -->
    </div>
    <div class="row row-freight">
      <div class="col">
        <button class="view-more has-dflex" @click="toggleActive">
          <span>Ver todas opções</span>
          <svg
            width="8"
            height="14"
            class="icon"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 12.2929C-0.0976323 12.6834 -0.0976323 13.3166 0.292892 13.7071C0.683416 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C8.08568 7.32853 8.09893 6.71894 7.73715 6.32428L2.23715 0.324275C1.86396 -0.082844 1.23139 -0.110346 0.824274 0.262846C0.417155 0.636038 0.389652 1.26861 0.762845 1.67572L5.61586 6.96992L0.292892 12.2929Z"
              fill="#5A67DF"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="row row-category flow-nw-row justify-start">
      <BadgeProduct
        to="/"
        stylization="flag"
        content="Espanha"
        icon="espanha"
        iconDescription="Bandeira da Espanha"
      />
      <BadgeProduct
        to="/"
        stylization="cup"
        content="Tempranillo"
        icon="pri-n"
        iconDescription="Taça de vinho"
      />
      <BadgeProduct to="/" content="Tinto Leve" />
    </div>
    <div class="row row-description">
      <div class="col">
        <div class="description">
          <p>
            Quando a excelência de um produtor encontra a versatilidade de uma
            uva, o resultado só pode ser um rótulo capaz de agradar gostos e
            bolsos variados. Assim é o Don Simon, o vinho espanhol mais vendido
            no mundo.
          </p>
        </div>
      </div>
    </div>
    <div class="row row-cep">
      <CheckCEP />
    </div>
    <div class="row row-buy">
      <div class="col has-dflex has-gap-1">
        <InputNumber />
        <CartButton content="Comprar" />
      </div>
    </div>
  </div>
</template>

<script> 

/// Código incompleto, comentado para poder buildar o projeto...

// import axios from 'axios'  
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// const linkAPI = 'https://bhwapi.azurewebsites.net/api/Produto?Id=1'
//  export default {

//       //     },
//       //     methods: {

//         nomeProduto: null,
//         precoProduto: null,
//         descricalDetalhada: null,
//         paisOrigem: null,
//         paisOrigemIcon: null,
//         tipoUva: null,
//         tipoVinho: null
//       }
//     },

//     created() {

//       //           });

//     },

//     methods: {
//       toggleActive() {
//         document.querySelector('.context-freight').classList.toggle('active')
//       },

//       carregarListProduto(pLinkAPI) {
//         axios
//           .get(pLinkAPI, { headers: { "Authorization": `Bearer ${localStorage.getItem("tokenAPI")}` } })
//           .then((respostaAPI) => {
//             this.produto = respostaAPI.data.result;

//             this.nomeProduto = this.produto.descricao;
//             this.precoProduto = this.produto.fornecedorProduto[0].valor;
//             this.descricalDetalhada = this.produto.descricaoDetalhada;
//             this.paisOrigem = this.produto.idPaisOrigemNavigation.descricao;
//             this.paisOrigemIcon = this.produto.idPaisOrigemNavigation.cssIcon;
//             this.tipoUva = this.produto.produtoTipoUva[0].idTipoUvaNavigation.descricao;
//             this.tipoVinho = this.produto.idTipoVinhoNavigation.descricao;

//           });

//       }

//     }
//   }
</script>

<style lang="scss" scoped>
.product-content {
  width: 100%;
  padding-right: 6.25rem;
  .head {
    display: block;
    .tag-content {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
  }
  .title {
    color: $gray-01;
  }
  .price-content {
    padding: 0.875rem 0;
    .best-price {
      span {
        font-size: 2em;
        font-weight: 700;
        color: $pri-d;
      }
    }
    .price {
      font-size: 1.25em;
      font-weight: 600;
      line-height: 1;
      color: $aux-orange-d;
    }
  }
  .view-more {
    background-color: transparent;
    gap: 0.625rem;
    span {
      font-size: 0.875em;
      color: $aux-blue-d;
    }
    .icon {
      transition-duration: $tsd;
      transition-property: transform;
      transition-timing-function: $ttf;
    }
    &:hover {
      .icon {
        transform: translateX(0.25rem);
      }
    }
  }
  .row-category {
    padding: 1.25rem 0;
    gap: 0.625rem;
    overflow-x: auto;
  }
  .description {
    padding: 0.375rem 0;
    color: $gray-05;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .product-content {
    padding-right: 0;
    display: grid;
    grid-template-areas:
      'title price'
      'title freight'
      'rate rate'
      'category category'
      'description description'
      'cep cep'
      'buy buy';

    .row-head {
      display: none !important;
    }
    .row-title {
      grid-area: title;
    }
    .row-rate {
      grid-area: rate;
    }
    .row-price {
      grid-area: price;
      .best-price {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
      }
    }
    .row-freight {
      grid-area: freight;

      .col {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
      }
    }
    .row-category {
      grid-area: category;
    }
    .row-description {
      grid-area: description;
    }
    .row-cep {
      grid-area: cep;
    }
    .row-buy {
      grid-area: buy;
    }
  }
}
</style>
