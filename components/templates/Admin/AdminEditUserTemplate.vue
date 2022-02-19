<template>
  <main>
    <div class="container-40 has-dflex flow-nw-col">
      <section>
        <div class="row">
          <div class="col">
            <BackPageAdmin to="/admin/usuarios" content="Editar Usuário" />
          </div>
        </div>
      </section>
      <section class="provider-create-product">
        <div class="row image-row has-dflex flow-nw-row justify-start">
          <AdminEditUserIcon image="Fernando Azevedo edit" />
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col card-col has-dflex flow-nw-col has-gap-1">
            <InputAdmin
              idInput="name"
              typeInput="text"
              labelInput="Nome"
              textInput="Fernando Azevedo"
            />
            <hr />
            <InputAdmin
              idInput="permissions"
              typeInput="text"
              labelInput="Permissões"
              textInput=""
            />
            <hr />
            <InputAdmin
              idInput="phone"
              typeInput="text"
              labelInput="Telefone"
              textInput="(11) 9 8323-1234"
            />
            <hr />
            <InputAdmin
              idInput="email"
              typeInput="text"
              labelInput="E-mail"
              textInput="financeiro@bhw.com.br"
            />
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
            <Button stylization="secondary" content="Excluir" inputtype="" />
          </div>
          <div class="col">
            <Button stylization="tertiary" content="Salvar" inputtype="" />
          </div>
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
      .image-row {
        gap: 1.5rem;
        overflow-x: auto;
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
