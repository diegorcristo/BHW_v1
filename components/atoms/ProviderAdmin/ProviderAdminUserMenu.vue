<template>
  <div
    class="
      provider-admin-user-menu
      has-dflex
      flow-nw-row
      justify-start
      align-center
    "
  >
    <figure class="image has-dflex-center">
      <img :src="userImage" alt="" />
    </figure>
    <h4 class="title"><span>Olá, </span><br />{{ userName }}!</h4>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.provider-admin-user-menu {
  gap: 1.25rem;

  .image {
    max-width: 5rem;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    color: $w;

    span {
      font-weight: 400;
    }
  }
}
</style>
