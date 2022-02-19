<template>
  <div class="cep-modal has-dflex-center">
    <div class="container-40">
      <div class="row">
        <div class="content">
          <div class="row flow-nw-row justify-end">
            <button
              class="close-cep has-dflex-center flow-nw-row"
              @click="removeActive"
            >
              Fechar
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.63672"
                  y="16.9502"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 5.63672 16.9502)"
                  fill="white"
                />
                <rect
                  opacity="0.6"
                  x="7.05078"
                  y="5.63574"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.05078 5.63574)"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div class="row">
            <div class="col col-content has-dflex flow-nw-col">
              <div class="row">
                <h3 class="title">Calcule seu frete e prazo</h3>
              </div>
              <div class="row">
                <Input typeInput="text" labelInput="Digite seu CEP" />
                <Button stylization="primary fit" content="Ok" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document.querySelector('.cep-modal').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.cep-modal {
  z-index: -1;
  display: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  padding: 1.25rem 0.75rem;
  background-color: rgba(51, 48, 62, 0.95);
  transition-duration: $tsd;
  transition-property: opacity;
  transition-timing-function: $ttf;

  .content {
    width: 100%;

    .close-cep {
      gap: 0.75rem;
      font-size: 1.25em;
      font-weight: 700;
      color: $bgc-02;
      background-color: transparent;
    }

    .col-content {
      gap: 1.5rem;
      padding: 3.125rem 3.125rem 5rem 3.125rem;

      .title {
        color: $bgc-02;
      }
    }
  }

  &.active {
    z-index: 10;
    display: block;
    opacity: 1;
  }
}
</style>
