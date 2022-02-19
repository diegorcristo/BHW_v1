<template>
  <div class="input-date">
    <input :id="idInput" type="date" :value="textInput" />
    <label :for="idInput">
      {{ labelInput }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    idInput: {
      type: String,
      default: '',
      required: false,
    },
    labelInput: {
      type: String,
      default: '',
      required: false,
    },
    textInput: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
