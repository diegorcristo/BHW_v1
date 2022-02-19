<template>
  <div class="check-cep has-dflex flow-nw-col">
    <div class="row">
      <div class="col">
        <p>Calcular frete e prazo</p>
      </div>
    </div>
    <div class="row flow-nw-row">
      <Input
        idInput="pesquisarcep"
        typeInput="text"
        labelInput="Digite seu CEP"
      />
      <button>OK</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.check-cep {
  width: 100%;
  gap: 0.5rem;
  padding: 1.875rem 0 1.5rem 0;

  p {
    color: $b;
    font-weight: 600;
  }

  button {
    width: fit-content;
    width: moz-fit-content;
    background-color: $gray-05;
    padding: 0.75rem 2.5rem;
    border-radius: $bdr;
    font-weight: 600;
    color: $w;
    word-break: keep-all;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;

    &:hover {
      background-color: $gray-04;
    }
  }
}
</style>
