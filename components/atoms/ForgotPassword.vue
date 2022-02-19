<template>
  <span>
    <a :href="to">Esqueceu a senha?</a><br />
    (8 ou mais dígitos com letras e números)
  </span>
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
span {
  font-size: 0.625em;
  font-weight: 400;

  a {
    font-weight: 600;
    color: $pri-l;

    transition-duration: $tsd;
    transition-property: color;
    transition-timing-function: $ttf;

    &:hover {
      color: $pri-d;
    }
  }
}
</style>
