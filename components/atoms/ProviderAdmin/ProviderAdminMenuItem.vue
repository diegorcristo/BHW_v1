<template>
  <NuxtLink
    :to="to"
    class="provider-admin-menu-item has-dflex flow-nw-row align-center"
  >
    <slot name="content" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.provider-admin-menu-item {
  gap: 1.5rem;
  text-decoration: none;
  color: $w;
}
</style>
