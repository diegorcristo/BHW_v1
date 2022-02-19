<template>
  <div class="card has-dflex-center flow-nw-col">
    <NuxtLink to="/">
      <figure class="image has-dflex-center">
        <img
          :src="setImage"
          :alt="imageDescription"
          :aria-label="imageDescription"
        />
      </figure>
      <div class="container-80">
        <div class="tag-content">
          <Badge stylization="pts" content="50 pts" />
          <Badge
            stylization="sale"
            icon="sale"
            icondescription="Icone de duas pessoas"
            content=" Off"
          />
        </div>
        <div class="content">
          <div class="row">
            <div class="col">
              <small>Melhor Preço</small>
              <!--<small>{{melhorPreco}}</small>-->
            </div>
          </div>
          <div class="row price-content justify-between">
            <span class="best-price">
              <span class="symbol">R$ </span>
              <span>{{ bestPrice }}</span>
            </span>
            <span class="price">
              <small class="symbol">{{ price }}</small>
            </span>
          </div>
          <div class="row">
            <div class="col">
              <p class="origin">{{ produtoDescription }}</p>
            </div>
          </div>
          <div class="row">
            <div
              class="col category-content has-dflex justify-start flow-nw-row"
            >
              <span>{{ tipoVinhoDescription }}</span>
              <span>{{ paisOrigem }}</span>
              <!--<span>Tinto</span>-->
              <!--<span>Tempranillo(uva)</span>
               <span>Espanha</span>-->
            </div>
          </div>
        </div>
      </div>
      <Button stylization="primary add-cart" content="Comprar" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    imageDescription: {
      type: String,
      required: true,
    },
    produtoDescription: {
      type: String,
      required: true,
    },
    tipoVinhoDescription: {
      type: String,
      required: true,
    },
    bestPrice: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    melhorPreco: {
      type: String,
      required: true,
    },
    pontuacao: {
      type: String,
      required: true,
    },
    paisOrigem: {
      type: String,
      required: true,
    },
  },
  computed: {
    setImage() {
      return `media/content/wine/${this.image}.png`
    },
  },

  data() {
    return {
      listProdutos: [],
      Total: 0,
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.card {
  z-index: 1;
  width: 100%;
  padding-top: 1rem;
  gap: 1rem;
  position: relative;

  a {
    text-decoration: none;
    color: $gray-05;
  }

  &::before {
    content: '';
    width: 100%;
    height: 75%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: $bgc-02;
    z-index: -1;
    border-radius: $bdr-medium;
    box-shadow: $bsw-small;
  }

  .image {
    img {
      // Animation
      transition-duration: $tsd;
      transition-property: transform;
      transition-timing-function: $ttf;
    }
  }

  .tag-content {
    width: 100%;
    height: 2.6rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .price-content {
    .best-price {
      span {
        font-weight: 600;
        color: $pri-d;
      }
    }

    .price {
      font-weight: 600;
      line-height: 1;
      color: $aux-orange-d;
    }
  }

  .origin {
    font-size: 0.875em;
    color: $gray-01;
  }

  .category-content {
    gap: 0.5rem;
    span {
      font-size: 0.75em;
      font-weight: 400;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        top: 50%;
        left: -0.4rem;
        transform: translateY(-50%);
      }

      &:first-child {
        &::before {
          content: none;
        }
      }
    }
  }

  .add-cart {
    padding: 0.5em 1rem;
    border-radius: 0 0 $bdr-medium $bdr-medium;
  }

  &:hover {
    .image {
      img {
        transform: translateY(-1rem) scale(1.05);
      }
    }
  }
}
</style>
