<template>
  <div class="input-content" :class="stylization">
    <input :id="idInput" :type="typeInput" :value="textInput" />
    <label :for="idInput" :class="classInput">
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
    stylization: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      varEmail: '',
      varPassword: '',
      // 'diego.cristo@besthunter.com.br',
      // '7SEBT/wD'
    }
  },

  //  methods: {
  //  labelAnimation() {
  //    const input = document.querySelector(`input[id="${this.idInput}"]`)
  //    const label = document.querySelector(`label[for="${this.idInput}"]`)

  //    if (input.value.trim() || document.activeElement === input) {
  //      return label.classList.add('active')
  //    } else {
  //      return label.classList.remove('active')
  //    }
  //  },
  // },
}
</script>

<style lang="scss">
.input-content {
  width: 100%;
  position: relative;
  border-radius: $bdr-small;
  background-color: $w;

  input {
    padding: 0.75rem 1rem 0.25rem 1rem;
  }

  label {
    z-index: 1;
    position: absolute;
    width: fit-content;
    width: moz-fit-content;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);

    // Font style
    font-size: 0.875em;
    font-weight: 400;
    line-height: 150%;
    color: $gray-04;

    // Animation
    transition-duration: $tsd;
    transition-property: transform, font-size, color;
    transition-timing-function: $ttf;

    &.active {
      transform: translateY(-150%);
      font-size: 0.5em;
      color: $gray-04;
    }
  }

  // &:focus-within {
  //   label {
  //   }
  // }
}
</style>
