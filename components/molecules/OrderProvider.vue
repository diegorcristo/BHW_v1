<template>
  <div class="card-provider">
    <div class="row has-dflex flow-nw-row align-stretch">
      <div class="content col">
        <span class="order">Pedido #{{ order }}</span>
        <p class="date-order">{{ dateOrder }}</p>
      </div>
      <div class="content col has-dflex flow-nw-row align-stretch justify-center">
        <span class="status-order">{{ statusOrder }}</span>
      </div>
      <div class="status-content col has-dflex flow-nw-row align-stretch justify-end">
        <div class="justify-between flow-nw-row">
          <span class="status">{{ status }}</span>
          <div class="status-circle" :class="stylization"></div>
        </div>
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
    status: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.card-provider {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 0.688rem;

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
  .status,
  .status-order {
    font-size: 0.75rem;
    color: $gray-05;
    padding-bottom: 0.25rem;
  }

  .status-order {
    text-align: center;
  }

  .status-content {
    align-items: center;
    text-align: right;
  }

  .date-order {
    font-size: 0.875rem;
    color: $b;
  }
}
</style>
