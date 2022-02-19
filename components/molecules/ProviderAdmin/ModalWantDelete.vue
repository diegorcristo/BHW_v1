<template>
  <aside class="notification-clear has-dflex-center">
    <div class="modal has-dflex flow-nw-col">
      <div class="row">
        <svg
          width="200"
          height="185"
          viewBox="0 0 200 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64C0 28.6538 28.6538 0 64 0H200V121C200 156.346 171.346 185 136 185H0V64Z"
            fill="#F2F7F9"
          />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M100.893 50.2136C100.494 49.56 99.5377 49.5798 99.1657 50.2494L51.6574 135.764C51.2871 136.431 51.7691 137.25 52.5315 137.25H152.299C153.08 137.25 153.559 136.395 153.152 135.729L100.893 50.2136Z"
            fill="#7F0E3D"
          />
          <rect
            x="95.082"
            y="78.25"
            width="9.83333"
            height="34.4167"
            rx="1"
            fill="#7F0E3D"
          />
          <rect
            x="95.082"
            y="117.583"
            width="9.83333"
            height="9.83334"
            rx="1"
            fill="#7F0E3D"
          />
        </svg>
      </div>
      <div class="row">
        <div class="col has-dflex flow-nw-col has-gap-1">
          <h4 class="title">Tem certeza que deseja excluir?</h4>
          <p class="description">Essa ação é <b>irreversível</b>.</p>
          <div class="row">
            <div class="col">
              <Button stylization="secondary" content="Cancelar" />
            </div>
            <div class="col">
              <Button stylization="primary" content="Excluir" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" @click="removeActive"></div>
  </aside>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document.querySelector('.notification-clear').classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.notification-clear {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  .modal {
    z-index: 2;
    width: fit-content;
    width: moz-fit-content;
    position: relative;
    gap: 1.5rem;
    padding: 1.125rem 1rem;
    border-radius: $bdr-small;
    background-color: $bgc-03;
    transform: scale(0);
    transition-duration: $tsd;
    transition-property: opacity, transform;
    transition-timing-function: $ttf;

    .title,
    .description {
      text-align: center;
    }

    .title {
      color: $gray-01;
      padding-bottom: 0.5rem;
    }

    .description {
      font-size: 0.875em;
      color: $gray-05;
    }
  }

  .bg {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;
  }

  &.active {
    z-index: 10;

    .modal {
      opacity: 1;
      transform: scale(1);
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .context-cart {
    .modal {
      max-width: 85%;
    }
  }
}
</style>
