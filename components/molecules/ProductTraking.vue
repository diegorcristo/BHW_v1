<template>
  <div class="traking-card">
    <accordion-product>
      <template v-slot:title>{{ statusOrder }}</template>
      <template v-slot:content>
        <div class="row">
          <div class="col has-flex flow-nw-col has-gap-1">
            <div class="text tiny">
              <p>Código de rastreamento</p>
            </div>
            <div
              class="
                detail-category
                has-dflex
                align-stretch
                justify-between
                has-gap-1
              "
            >
              <p>{{ trakingCode }}</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8182 4H6.18182C4.76751 4 4 4.76751 4 6.18182V13.8182C4 15.1706 4.70185 15.9316 6 15.9956V9C6 7.34315 7.34315 6 9 6H15.9956C15.9316 4.70185 15.1706 4 13.8182 4Z"
                  fill="#7F0E3D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1818 8H17.8182C19.2325 8 20 8.76751 20 10.1818V17.8182C20 19.2325 19.2325 20 17.8182 20H10.1818C8.76751 20 8 19.2325 8 17.8182V10.1818C8 8.76751 8.76751 8 10.1818 8Z"
                  fill="#7F0E3D"
                />
              </svg>
            </div>
          </div>
        </div>
      </template>
    </accordion-product>
  </div>
</template>


<script>
export default {
  props: {
    statusOrder: {
      type: String,
      default: '',
    },
    trakingCode: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.traking-card {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 1rem;

  .detail-category {
    p {
      color: $aux-blue-d;
      font-weight: 400;
    }
  }
  .tiny p {
    font-size: 0.875rem;
  }
}
</style>
