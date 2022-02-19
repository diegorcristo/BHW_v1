<template>
  <div class="data-purchase">
    <accordion-product>
      <template v-slot:title>Dados do comprador</template>
      <template v-slot:content>
        <div class="col has-flex flow-nw-col has-gap-1">
          <p class="text tiny">Nome</p>
          <p>{{ name }}</p>
        </div>
        <div class="col has-flex flow-nw-col has-gap-1">
          <p class="text tiny">E-mail</p>
          <p>{{ email }}</p>
        </div>
        <div class="col has-flex flow-nw-col has-gap-1">
          <p class="text tiny">Telefone</p>
          <p>{{ phone }}</p>
        </div>
      </template>
    </accordion-product>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.data-purchase {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 1rem;

  .tiny p {
    font-size: 0.875rem;
  }
}
</style>
