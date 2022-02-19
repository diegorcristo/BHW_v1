<template>
  <div class="row flow-nw-col has-gap-1 group-button" :class="stylization">
    <Button stylization="google" content="Continuar com o Google" />
    <Button stylization="facebook" content="Continuar com o Facebook" />
  </div>
</template>

<script>
export default {
  props: {
    stylization: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.group-button {
  button {
    &.google,
    &.facebook {
      color: $w;
    }

    &.google {
      background-color: #dd4b39;
    }

    &.facebook {
      background-color: #1877f2;
    }
  }
  &.uncolored {
    button {
      background-color: $w;
      color: $pri-n;
      font-weight: 400;

      &:hover {
        background-color: hsla(335, 80%, 28%, 0.05);
      }
    }
  }
}
</style>
