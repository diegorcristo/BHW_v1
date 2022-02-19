<template>
  <div class="row">
    <div class="admin-user row has-flex has-gap-1">
      <AdminUserIcon :image="image" />
      <div class="col has-flex flow-nw-col has-gap-1">
        <h6>{{ name }}</h6>
        <p>{{ role }}</p>
        <p>{{ email }}</p>
      </div>
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
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-user {
  width: 100%;
  background-color: $w;
  border-radius: $bdr;
  padding: 0.5rem;

  p {
    font-size: 0.875rem;
  }
}
</style>
