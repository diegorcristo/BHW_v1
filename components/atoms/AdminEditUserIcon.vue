<template>
  <figure class="image">
    <img :src="setImage" />
    <div class="delete-item has-dflex-center">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.875 31.4668C5.18388 25.7865 5.18388 16.5768 10.875 10.8965V10.8965C16.5661 5.2161 25.7933 5.2161 31.4844 10.8965V10.8965C37.1755 16.5768 37.1755 25.7865 31.4844 31.4668V31.4668C25.7933 37.1472 16.5661 37.1472 10.875 31.4668V31.4668Z"
          fill="#FAF9F8"
        />
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.7657 29.7526C34.5083 25.019 34.5083 17.3443 29.7657 12.6106C25.023 7.87702 17.3338 7.87702 12.5912 12.6106C7.84855 17.3443 7.84855 25.019 12.5912 29.7526C17.3338 34.4863 25.023 34.4863 29.7657 29.7526Z"
          fill="#7F0E3D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5939 15.8884C17.203 15.4982 16.5692 15.4982 16.1783 15.8884L15.8764 16.1897C15.4855 16.5799 15.4855 17.2124 15.8764 17.6026L19.4622 21.1816L15.8764 24.7607C15.4855 25.1509 15.4855 25.7834 15.8764 26.1736L16.1783 26.4749C16.5692 26.8651 17.203 26.8651 17.5938 26.4749L21.1797 22.8958L24.7655 26.4749C25.1564 26.8651 25.7902 26.8651 26.1811 26.4749L26.483 26.1736C26.8739 25.7834 26.8739 25.1509 26.483 24.7607L22.8971 21.1816L26.483 17.6026C26.8739 17.2124 26.8739 16.5799 26.483 16.1897L26.1811 15.8884C25.7902 15.4982 25.1564 15.4982 24.7655 15.8884L21.1797 19.4674L17.5939 15.8884Z"
          fill="#7F0E3D"
        />
      </svg>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    setImage() {
      return `media/content/users/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 6rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;

  img {
    height: 6rem;
  }

  .delete-item {
    position: absolute;
    top: -1.30rem;
    right: -1.30rem;
    width: 2.75rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.625rem;
  }
}
</style>
