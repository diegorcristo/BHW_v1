<template>
  <div class="card-shop">
    <div class="row flow-nw-row align-stretch justify-between">
      <div class="content">
        <span class="order">Pedido #{{ order }}</span>
        <p class="date-order">{{ dateOrder }}</p>
      </div>
      <div class="status-content">
        <span class="status">{{ statusOrder }}</span>
        <div class="status-circle" :class="stylization"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: String,
      default: '',
    },
    stylization: {
      type: String,
      default: '',
    },
    dateOrder: {
      type: String,
      default: '',
    },
    statusOrder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.card-shop {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 1rem;

  .status-circle {
    border-radius: 100%;
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;

    &.warning {
      background-color: $aux-orange-l;
    }

    &.success {
      background-color: $sec-d;
    }

    &.error {
      background-color: $aux-red-d;
    }
  }

  .order,
  .status {
    font-size: 0.75rem;
    color: $gray-05;
    padding-bottom: 0.25rem;
  }

  .date-order {
    font-size: 0.875rem;
    color: $b;
  }
}
</style>
