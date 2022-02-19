<template>
  <div class="card-cred">
    <div class="row flow-nw-row align-stretch justify-between has-gap-1">
      <div class="row">
        <div
          class="col has-dflex flow-nw-row justify-start align-center has-gap-1"
        >
          <figure class="image has-dflex-center">
            <img :src="setImage" />
          </figure>
          <div class="row">
            <div class="col has-dflex flow-nw-col">
              <p class="title">Terminado em {{ number }}</p>
              <p class="content">
                {{ nomeCredCard }}<br />Vencimento {{ expiration }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 8V20.5C6 21.3284 6.67157 22 7.5 22H16.5C17.3284 22 18 21.3284 18 20.5V8H6Z"
          fill="#7F0E3D"
        />
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 4.5V4C14 3.44772 13.5523 3 13 3H11C10.4477 3 10 3.44772 10 4V4.5H5.5C5.22386 4.5 5 4.72386 5 5V5.5C5 5.77614 5.22386 6 5.5 6H18.5C18.7761 6 19 5.77614 19 5.5V5C19 4.72386 18.7761 4.5 18.5 4.5H14Z"
          fill="#7F0E3D"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    nomeCredCard: {
      type: String,
      required: true,
    },
    expiration: {
      type: String,
      required: true,
    },
  },
  computed: {
    setImage() {
      return `media/icon/payment/${this.image}.svg`
    },
  },
}
</script>

<style lang="scss">
.card-cred {
  width: 100%;

  .title {
    padding-bottom: 0.25rem;
    color: $gray-01;
  }

  .content {
    color: $gray-05;
    font-size: 0.75em;
    line-height: 1.2;
  }

  svg {
    cursor: pointer;
  }
}
</style>
