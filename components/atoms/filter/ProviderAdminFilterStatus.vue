<template>
  <div class="filter-status has-dflex flow-nw-row align-center">
    <span>Status:</span>
    <div class="filter-select">
      <select>
        <option value="1">Todos</option>
        <option value="2">Entregue</option>
        <option value="3">Cancelado</option>
        <option value="4">Preparando Envio</option>
        <option value="5">Em Trânsito</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.filter-status {
  gap: 0.625rem;
  padding: 0.625rem 0;
  box-shadow: 0px 0px 0px 1px $gray-08;
  border-radius: $bdr-small;

  span {
    word-wrap: keep-all;
  }

  .filter-select {
    z-index: 1;
    display: flex;
    width: fit-content;
    width: moz-fit-content;
    height: 1rem;
    border-radius: 0.25em;
    overflow: hidden;

    select {
      /* Reset Select */
      width: fit-content;
      width: moz-fit-content;
      appearance: none;
      position: relative;
      outline: 0;
      border: 0;
      box-shadow: none;
      position: relative;
      /* Personalize */
      flex: 1;
      padding: 0;
      font-size: 1rem;
      line-height: 1;
      color: $pri-n;
      background-image: none;
      cursor: pointer;

      &::-ms-expand {
        display: none;
      }
    }

    &::after {
      z-index: 2;
      content: '';
      width: 1rem;
      height: 1rem;
      pointer-events: none;
      background-image: url("data:image/svg+xml,<svg width='24' height='25' viewBox='0 0 24 25' fill='rgb(127, 14, 61)' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3285 16.5857 11.7189 16.5989 11.3243 16.2372L5.32427 10.7372C4.91715 10.364 4.88965 9.73139 5.26284 9.32427C5.63604 8.91716 6.2686 8.88965 6.67572 9.26284L11.9699 14.1159L17.2929 8.79289Z'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:hover::after {
      color: #f39c12;
    }
  }
}
</style>
