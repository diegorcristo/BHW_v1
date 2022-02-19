<template>
  <div class="input-admin has-dflex flow-nw-col">
    <label :for="idInput" :class="classInput">
      {{ labelInput }}
    </label>
    <textarea :id="idInput" :type="typeInput" :value="textInput" />
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
    typeInput: {
      type: String,
      default: 'text',
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
    classInput: {
      type: String,
      default: 'none',
      required: false,
    },
  },
}
</script>

<style lang="scss">
.input-admin {
  width: 100%;
  gap: 0.25rem;

  textarea {
    min-height: 100px;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    font-family: Montserrat;
    font-size: 1rem;
    line-height: 1;
    color: $gray-01;
  }

  label {
    z-index: 1;

    // Font style
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1;
    color: $gray-05;
  }
}
</style>
