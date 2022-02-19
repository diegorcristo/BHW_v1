<template>
  <div
    class="item-best-seller-products has-dflex has-gap-1"
    :class="stylization"
  >
    <figure class="image has-dflex-center">
      <img :src="setImage" alt="" />
    </figure>
    <div class="content has-dflex flow-nw-col justify-between">
      <div class="row">
        <div class="col">
          <p class="name">
            {{ name }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col has-dflex flow-nw-row justify-between align-center">
          <span class="value"> R$ {{ value }} </span>
          <span class="qtde"> {{ quantity }} qtde </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    stylization: {
      type: String,
      default: '',
    },
  },
  computed: {
    setImage() {
      return `media/content/wineItem/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.item-best-seller-products {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: $bgc-02;
  border-radius: $bdr-small;

  .image {
    width: 100%;
    max-width: 100px;
    height: 100%;
    position: relative;
    padding: 0.625rem;
    border-radius: $bdr-small;
    box-shadow: 0px 0px 0px 1px $gray-08;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0.25rem;
      font-size: 1.125em;
      font-weight: 600;
      color: $gray-06;
    }
  }

  .content {
    width: 100%;

    p,
    span {
      font-size: 0.875em;
    }

    .name {
      color: $gray-01;
    }

    .value {
      color: $gray-04;
    }

    .qtde {
      font-weight: 500;
    }
  }

  &.one {
    flex-flow: column nowrap;
    .image {
      max-width: 100%;
      height: auto;
      aspect-ratio: 1 / 1;

      &::before {
        content: '1°';
        font-size: 1.5em;
      }
    }

    .content {
      font-size: 1.125em;
      gap: 1.375rem;
      .name {
        font-size: 1.125em;
      }
    }
  }

  &.two {
    .image {
      &::before {
        content: '2°';
      }
      img {
        max-height: 6rem;
      }
    }
  }

  &.tree {
    .image {
      &::before {
        content: '3°';
      }
      img {
        max-height: 6rem;
      }
    }
  }
}
</style>
