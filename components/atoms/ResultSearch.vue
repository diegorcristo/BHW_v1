<template>
  <div>
    <h4 v-if="qtde > 0" class="result-search">
      Encontramos {{ qtde }} resultados com o termo "{{ content }}":
    </h4>
    <div v-else class="result-search">
      <h4>Não encontramos resultados para ”{{ content }}” ;(</h4>
      <p>Confira nossas recomendações:</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qtde: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.result-search {
  p {
    padding-top: 5px;
    font-weight: 600;
  }
}
</style>
