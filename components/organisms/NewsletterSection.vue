<template>
  <section class="newsletter">
    <div class="container-90">
      <div class="row align-stretch">
        <div class="col has-dflex flow-nw-col has-gap-1">
          <h4 class="title">Torne-se um parceiro agora</h4>
          <div class="text">
            <p>
              Fornecedores de todo território nacional estão por aqui.
              <br />
              Oferecemos as ferramentas e habilidades para seu marketplace.
            </p>
          </div>
        </div>
        <div class="col has-dflex flow-nw-col has-gap-2">
          <div class="group-input has-dflex flow-nw-col has-gap-1">
            <Input typeInput="text" idInput="name" labelInput="Nome" textInput=""/>
            <Input typeInput="mail" idInput="mail" labelInput="Email" textInput=""/>
          </div>
          <div class="row">
            <div class="col">
              <Button stylization="secondary" content="Cadastrar" />
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.newsletter {
  background-color: $gray-08;
  padding: 4rem 0;

  .title {
    color: $gray-01;
  }
}
</style>
