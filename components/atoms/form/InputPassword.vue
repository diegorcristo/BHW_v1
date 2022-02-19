<template>
  <div class="inputpassword-content">
    <Input typeInput="password" idInput="password" labelInput="Senha" />

    <button class="hide">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0957 17.9607C11.3881 17.9865 11.6895 18 12.0002 18C16.9093 18 21.0002 12 21.0002 12C21.0002 12 20.3306 11.0179 19.2081 9.84839L11.0957 17.9607Z"
          fill="#7F0E3D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5051 6.49485C13.7076 6.18695 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75006 13.8335 5.52661 15.4734L9 12C9 10.3431 10.3431 9 12 9L14.5051 6.49485Z"
          fill="#7F0E3D"
        />
        <rect
          opacity="0.3"
          x="5.1001"
          y="18.4351"
          width="19"
          height="2"
          transform="rotate(-45 5.1001 18.4351)"
          fill="#7F0E3D"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    idInput: {
      type: String,
      default: '',
    },
    typeInput: {
      type: String,
      default: 'text',
    },
    labelInput: {
      type: String,
      default: '',
    },
    stylization: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.inputpassword-content {
  width: 100%;
  position: relative;
  .hide {
    z-index: 2;
    height: 100%;
    padding: 0 0.5rem;
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 0 $bdr-small $bdr-small 0;
    transform: translateY(-50%);
    background-color: transparent;
  }
}

.show {
  --default-y: -12px;
  --default-o: 0;
  --default-pe: none;
  --clear-y: 0;
  --clear-o: 1;
  --clear-pe: auto;
}
</style>
