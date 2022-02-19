<template>
  <figure :class="classStyle">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9098 27.1213C21.6169 27.1213 27.054 21.6945 27.054 15.0001C27.054 8.30576 21.6169 2.87891 14.9098 2.87891C8.20277 2.87891 2.76562 8.30576 2.76562 15.0001C2.76562 21.6945 8.20277 27.1213 14.9098 27.1213Z"
        fill="#2D842D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.124 8.72852C16.124 8.17623 15.6763 7.72852 15.124 7.72852H14.6952C14.1429 7.72852 13.6952 8.17623 13.6952 8.72852V13.7891H8.62305C8.07076 13.7891 7.62305 14.2368 7.62305 14.7891V15.2134C7.62305 15.7656 8.07076 16.2134 8.62305 16.2134H13.6952V21.274C13.6952 21.8263 14.1429 22.274 14.6952 22.274H15.124C15.6763 22.274 16.124 21.8263 16.124 21.274V16.2134H21.1961C21.7484 16.2134 22.1961 15.7656 22.1961 15.2134V14.7891C22.1961 14.2368 21.7484 13.7891 21.1961 13.7891H16.124V8.72852Z"
        fill="#2D842D"
      />
    </svg>
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      required: true,
    },
    

  },
}
</script>

<style lang="scss" scoped>
.new {
  width: 6rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;
}

.edit {
  width: 8.234rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;
}

</style>
