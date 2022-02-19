<template>
  <figure class="image">
    <img :src="setImage" />
    <div class="delete-item has-dflex-center">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.785 40.7851C47.2938 34.2764 47.2938 23.7236 40.785 17.2149C34.2763 10.7061 23.7235 10.7061 17.2148 17.2149C10.7061 23.7236 10.7061 34.2764 17.2148 40.7851C23.7235 47.2939 34.2763 47.2939 40.785 40.7851Z"
          fill="#7F0E3D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.8141 21.4575C23.4236 21.067 22.7904 21.067 22.3999 21.4575L21.4571 22.4003C21.0666 22.7909 21.0666 23.424 21.4571 23.8145L26.6425 29L21.4571 34.1855C21.0666 34.576 21.0666 35.2091 21.4571 35.5997L22.3999 36.5425C22.7904 36.933 23.4236 36.933 23.8141 36.5425L28.9996 31.357L34.185 36.5425C34.5755 36.933 35.2087 36.933 35.5992 36.5425L36.542 35.5997C36.9326 35.2091 36.9326 34.576 36.542 34.1854L31.3566 29L36.542 23.8146C36.9326 23.424 36.9326 22.7909 36.542 22.4003L35.5992 21.4575C35.2087 21.067 34.5755 21.067 34.185 21.4575L28.9996 26.643L23.8141 21.4575Z"
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
      return `media/content/wineItem/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 8.234rem;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 1px solid $gray-08;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $w;

  img {
    width: 1.895rem;
  }

  .delete-item {
    position: absolute;
    top: -1.75rem;
    right: -1.75rem;
    width: 3.75rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
}
</style>
