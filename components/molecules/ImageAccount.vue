<template>
  <div class="has-dflex-center flow-nw-col">
    <figure class="image">
      <img :src="setImage" />
      <div class="icon">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#7F0E3D" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 10.834C8.39543 10.834 7.5 11.7294 7.5 12.834V18.834C7.5 19.9386 8.39543 20.834 9.5 20.834H20.5C21.6046 20.834 22.5 19.9386 22.5 18.834V12.834C22.5 11.7294 21.6046 10.834 20.5 10.834H9.5ZM11.6667 15.834C11.6667 17.6749 13.1591 19.1673 15 19.1673C16.841 19.1673 18.3333 17.6749 18.3333 15.834C18.3333 13.993 16.841 12.5007 15 12.5007C13.1591 12.5007 11.6667 13.993 11.6667 15.834Z"
            fill="white"
          />
          <rect
            opacity="0.3"
            x="12.5"
            y="8.33398"
            width="5"
            height="1.66667"
            rx="0.833333"
            fill="white"
          />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0002 17.4993C15.9206 17.4993 16.6668 16.7532 16.6668 15.8327C16.6668 14.9122 15.9206 14.166 15.0002 14.166C14.0797 14.166 13.3335 14.9122 13.3335 15.8327C13.3335 16.7532 14.0797 17.4993 15.0002 17.4993Z"
            fill="white"
          />
        </svg>
      </div>
    </figure>
  </div>
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
      return `media/content/profile/${this.image}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 150px;
  position: relative;
  aspect-ratio: 1 / 1;
  border: 5px solid #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 100%;
  }

  .icon {
    position: absolute;
    top: 1.25rem;
    right: 0rem;
  }
}
</style>
