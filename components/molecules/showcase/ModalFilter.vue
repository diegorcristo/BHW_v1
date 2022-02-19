<template>
  <div class="modal-filter ps-relative has-dflex flow-nw-col justify-between">
    <div class="top">
      <div
        class="modal-header has-dflex flow-nw-row justify-between align-start"
      >
        <h4>Filtros: 43 opções</h4>
        <button
          class="close-button has-dflex flow-nw-row align-center"
          @click="removeActive"
        >
          Fechar
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.93164"
              y="14.8301"
              width="14"
              height="1.75"
              rx="0.875"
              transform="rotate(-45 4.93164 14.8301)"
              fill="#33303E"
            />
            <rect
              opacity="0.6"
              x="6.16919"
              y="4.93164"
              width="14"
              height="1.75"
              rx="0.875"
              transform="rotate(45 6.16919 4.93164)"
              fill="#33303E"
            />
          </svg>
        </button>
      </div>

      <div class="modal-main">
        <div class="row">
          <ByHarmonization />
        </div>
        <div class="row">
          <ByOccasion />
        </div>
        <div class="row">
          <ByType />
        </div>
        <div class="row item">
          <ByGrape />
        </div>
        <div class="row item">
          <ByPrice />
        </div>
        <div class="row item">
          <ByCountry />
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <div class="apply-filter has-dflex-center">
        <new-button stylization="filter">
          <template v-slot:content>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7817 5.79361C15.0798 5.44294 15.6057 5.4003 15.9564 5.69837C16.307 5.99644 16.3497 6.52235 16.0516 6.87303L8.96827 15.2064C8.66552 15.5625 8.12907 15.6001 7.77968 15.2895L4.02968 11.9562C3.68569 11.6504 3.65471 11.1237 3.96048 10.7797C4.26624 10.4357 4.79297 10.4047 5.13695 10.7105L8.25016 13.4778L14.7817 5.79361Z"
                fill="white"
              />
            </svg>

            Aplicar filtros
          </template>
        </new-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document.querySelector('.modal-filter').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-filter {
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: $bgc-03;
  transition-duration: $tsd;
  transition-property: transform;
  transition-duration: $tsd;
  transform: translateY(100%);

  .top {
    max-height: 100vh;
    .modal-header {
      width: 100%;
      display: block;
      padding: 1.25rem;
      h4 {
        color: $gray-01;
      }
      .close-button {
        gap: 0.5rem;
        word-break: keep-all;
        margin: 0;
        background-color: transparent;
      }
      .row {
        .content {
          .carousel-scroll {
            .cs-content {
              &::before,
              &::after {
                content: none !important;
              }
            }
          }
        }
      }
    }

    .modal-main {
      padding: 0.25rem 0 7.5rem 1.25rem;
      overflow-y: scroll;
      height: calc(100vh - 80px);

      .title {
        font-weight: 600;
        color: $gray-01;
      }

      .item {
        padding: 0 0 1.5rem 0;
      }
    }
  }
  .modal-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .apply-filter {
      padding: 2.375rem 0;
      background: linear-gradient(
        180deg,
        rgba(250, 249, 248, 0) 0%,
        #faf9f8 100%
      );
    }
  }

  &.active {
    transform: translateY(0);
  }
}
</style>
