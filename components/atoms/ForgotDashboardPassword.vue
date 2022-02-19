<template>
  <div class="row forgot-password has-dflex align-center justify-between">
    <div class="remember-me has-dflex align-center justify-start">
      <input
        type="checkbox"
        id="remember"
        name="remember"
        class="input-check"
      />
      <p>Lembrar-me</p>
    </div>
    <button type="button" class="btn-forgot" @click="openModal">Esqueceu a senha?</button>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      document.querySelector('.modal-forgot-password').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.forgot-password {
  .remember-me {
    gap: 0.5rem;
    .input-check {
      width: 13px;
      padding: 0;
      border-radius: 3px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      word-break: keep-all;
    }
  }

  .btn-forgot {
    padding: 0;
    font-weight: 600;
    font-size: 0.625em;
    line-height: 1;
    color: $pri-l;
    background-color: transparent;
  }
}
</style>
