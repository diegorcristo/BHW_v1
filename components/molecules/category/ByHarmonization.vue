<template>
  <div class="row by-harmonization">
    <div class="col content has-dflex flow-nw-col">
      <div class="row">
        <div class="col">
          <h4 class="title">{{ title }}</h4>
        </div>
      </div>
      <div class="row">
        <div
          id="by-harmonization-carousel"
          class="galaxy-carousel-container by-harmonization-carousel"
        >
          <div class="galaxy-item">
            <Harmonization to="/" content="Queijos" bgimage="cheese" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Massas" bgimage="pasta" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Carnes" bgimage="meat" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Peixes" bgimage="fish" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Entradas" bgimage="appetizer" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Aves" bgimage="birds" />
          </div>
          <div class="galaxy-item">
            <Harmonization to="/" content="Sobremesa" bgimage="dessert" />
          </div>
          <div class="galaxy-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Harmonização',
    },
  },
}
// export default {
//   mounted() {
//     window.addEventListener('load', () => {
//       galaxyCarousel({
//         container: '#galaxy-carousel',
//         showButtons: true,
//         shownItems: 1,
//       })
//     })
//   },
// }
</script>

<style lang="scss">
.by-harmonization {
  .content {
    gap: 1.5rem;

    .title {
      color: $gray-01;
    }
    .by-harmonization-carousel {
      height: auto;
      aspect-ratio: 1 / 0.18;

      .galaxy-item {
        aspect-ratio: 1 / 0.7;
        padding: 0.25rem 0.5rem;
      }

      &::before,
      &::after {
        content: '';
        width: 44px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 50%,
          #ffffff 100%
        );
      }

      div[id$='galaxy-next-button'],
      div[id$='galaxy-prev-button'] {
        border-radius: 2.75rem;
        background-color: $bgc-02;
        transform: translateY(calc(-50% - 1rem));
      }
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .by-harmonization {
    .content {
      gap: 1rem;

      .title {
        font-size: 1em;
      }

      .by-harmonization-carousel {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        overflow-x: auto;
        gap: 1rem;

        .galaxy-item {
          position: block;
          width: fit-content !important;
        }

        &::before,
        &::after {
          content: none;
        }
      }
    }
  }
}
</style>
