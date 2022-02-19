<template>
  <main>
    <div class="container-40 has-dflex flow-nw-col">
      <section>
        <div class="row">
          <div class="col">
            <BackPageAdmin to="/admin/usuarios" content="Adicionar Usuários" />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin idInput="name" typeInput="text" labelInput="Nome" />
            <hr />
            <InputAdmin
              idInput="permissions"
              typeInput="text"
              labelInput="Permissões"
            />
            <hr />
            <InputAdmin
              idInput="phone"
              typeInput="text"
              labelInput="Telefone"
            />
            <hr />
            <InputAdmin idInput="email" typeInput="text" labelInput="E-mail" />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin
              idInput="password"
              typeInput="password"
              labelInput="Senha"
            />
            <hr />
            <InputAdmin
              idInput="repeatpassword"
              typeInput="password"
              labelInput="Repetir senha"
            />
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col">
            <Button stylization="tertiary" content="Adicionar" inputtype="" />
          </div>
          <div class="col"></div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
main {
  gap: 1.5rem;

  .container-40 {
    gap: 1.5rem;
  }

  section {
    .provider-create-product {
      padding-bottom: 1rem;
      .col {
        gap: 1.5rem;
      }
    }

    .card-col {
      padding: 1rem;
      background-color: $bgc-02;
      border-radius: $bdr-small;
    }
  }
}
</style>
