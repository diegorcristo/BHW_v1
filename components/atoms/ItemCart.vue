<template>
  <div class="item-cart has-dflex">
    <figure class="image has-dflex-center">
      <img src="media/content/wine/Don Simon Reserva.png" alt="" />
    </figure>
    <div class="content has-dflex flow-nw-col align-stretch justify-between">
      <div class="header has-dflex flow-nw-row align-stretch justify-between">
        <h6 class="title">Don Simon Selección hueheuhue huehuehu</h6>
        <button class="close has-dflex-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.93164"
              y="14.8311"
              width="14"
              height="1.75"
              rx="0.875"
              transform="rotate(-45 4.93164 14.8311)"
              fill="#33303E"
            />
            <rect
              opacity="0.6"
              x="6.16895"
              y="4.93164"
              width="14"
              height="1.75"
              rx="0.875"
              transform="rotate(45 6.16895 4.93164)"
              fill="#33303E"
            />
          </svg>
        </button>
      </div>
      <div class="bottom has-dflex flow-nw-row justify-between">
        <span class="price">
          <span class="currency">R$</span>
          <span class="value">39,90</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.item-cart {
  gap: 8px;
  .image {
    padding: 0.375rem;
    height: 4.375rem;
    aspect-ratio: 1 / 1;
    border-radius: $bdr-medium;
    box-shadow: 0px 0px 0px 1px $gray-08;
  }
  .content {
    .header {
      .title {
        font-size: 0.875em;
        font-weight: 400;
      }
      .close {
        width: fit-content;
        width: moz-fit-content;
        aspect-ratio: 1 / 1;
        padding: 0;
        background-color: transparent;
      }
    }

    .bottom {
      .price {
        font-weight: 600;
        color: $gray-01;
      }
    }
  }
}
</style>
