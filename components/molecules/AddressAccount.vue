<template>
  <div class="address">
    <div class="row flow-nw-row align-stretch justify-between has-gap-1">
      <div class="row">
        <div class="col has-dflex flow-nw-col">
          <p class="title">{{ addressLabel }}</p>
          <p class="content">{{ complementLabel }}<br />{{ zipcodeLabel }}</p>
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
          d="M19.9249 6.31856C20.5106 6.90435 20.5106 7.8541 19.9249 8.43988L11.4764 16.8884C11.1915 17.1733 10.8039 17.3316 10.401 17.3276L6.87763 17.293C6.06962 17.285 5.41312 16.6384 5.39286 15.8306L5.30692 12.4035C5.29662 11.9928 5.45526 11.5958 5.74579 11.3052L14.268 2.78303C14.8538 2.19724 15.8035 2.19724 16.3893 2.78303L19.9249 6.31856Z"
          fill="#7F0E3D"
        />
        <rect
          opacity="0.3"
          x="5"
          y="20"
          width="15"
          height="2"
          rx="1"
          fill="#7F0E3D"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addressLabel: {
      type: String,
      required: false,
    },
    complementLabel: {
      type: String,
      required: false,
    },
    zipcodeLabel: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
.address {
  width: 100%;

  .title {
    color: $gray-01;
  }

  .content {
    color: $gray-05;
    font-size: 0.75em;
    line-height: 1.2;
  }
}
</style>
