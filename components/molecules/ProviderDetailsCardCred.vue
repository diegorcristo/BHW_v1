<template>
  <div class="details-cred">
    <accordion-product>
      <template v-slot:title>Detalhes do pagamento</template>
      <template v-slot:content>
        <div class="row">
          <div class="col has-flex flow-nw-col has-gap-1">
            <div class="text tiny">
              <p>Método de pagamento</p>
            </div>
            <div class="has-dflex align-stretch justify-between has-gap-1">
              <p>{{ methodPayment }}</p>
              <figure class="image">
                <img :src="setImage" />
              </figure>
            </div>
          </div>
        </div>
      </template>
    </accordion-product>
  </div>
</template>


<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    methodPayment: {
      type: String,
      default: '',
    },
  },
  computed: {
    setImage() {
      return `media/content/icon/payment/${this.image}.svg`
    },
  },
}
</script>

<style lang="scss">
.details-cred {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 1rem;

  .tiny p {
    font-size: 0.875rem;
  }

  .image {
  width: 24px;
  }

}
</style>
