<template>
  <div class="card has-dflex-center flow-nw-col">
    <NuxtLink to="/">
      <figure class="image has-dflex-center">
        <img :src="setImage"
             :alt="imageDescription"
             :aria-label="imageDescription" />
      </figure>
      <div class="main">
        <div class="tag-content">
          <div v-show="points">
            <Badge stylization="pts" :content="points + ' pts'" />
          </div>
          <div v-show="disconts">
            <Badge stylization="sale"
                   icon="sale"
                   icondescription="Icone de duas pessoas"
                   content=" Off" />
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col">
              <small>Melhor preço</small>
            </div>
          </div>
          <div class="row flow-nw-row price-content justify-between">
            <span class="best-price">
              <span class="symbol">R$ </span>
              <span>{{ bestprice }}</span>
            </span>
            <span v-show="price" class="price">
              <small class="symbol">R$ </small>
              <small>{{ price }}</small>
            </span>
          </div>
          <div class="row">
            <div class="col">
              <p class="name">{{ name }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col category-content has-dflex justify-start flow-w-row">
              <span v-for="category in categories" :key="category">
                {{
                category
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
    <Button stylization="primary add-cart" content="Comprar" />
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
      points: {
        type: Number,
        required: true,
      },
      disconts: {
        type: Boolean,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      bestprice: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        default: null,
      },
      contentOff: {
        type: String,
        required: true,
      },
      idProduto: {
        type: Number,
        required: true,
      },
    },
    computed: {
      setImage() {
        return `media/content/wine/${this.image}.png`
      },
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    z-index: 1;
    width: 100%;
    padding-top: 1rem;
    gap: 1rem;
    position: relative;
    a

  {
    width: 100%;
    height: 100%;
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
    img

  {
    // Animation transition-duration: $tsd;
    transition-property: transform;
    transition-timing-function: $ttf;
  }

  }

  .main {
    padding: 0 1rem;
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
    .best-price

  {
    span

  {
    font-weight: 600;
    color: $pri-d;
  }

  }

  .price {
    font-weight: 600;
    line-height: 1;
    color: $aux-orange-d;
    text-decoration: line-through;
  }

  }

  .name {
    font-size: 0.875em;
    color: $gray-01;
    font-weight: 600;
  }

  .category-content {
    gap: 0 0.5rem;
    span

  {
    font-size: 0.75em;
    font-weight: 400;
    position: relative;
    line-height: 1;
    &::before

  {
    content: '•';
    position: absolute;
    top: 50%;
    right: -0.4rem;
    transform: translateY(-50%);
  }

  &:last-child {
    &::before

  {
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
    .image

  {
    img

  {
    transform: translateY(-1rem) scale(1.05);
  }

  }
  }
  }
</style>
