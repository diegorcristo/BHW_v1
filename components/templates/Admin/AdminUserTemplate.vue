<template>
  <main class="has-dflex flow-nw-col justify-start">
    <section>
      <div class="container-40">
        <div class="row">
          <div class="col has-dflex flow-nw-row justify-between align-center">
            <BackPageAdmin to="/admin" content="Usuários" />
            <BtnProviderAdminAddNew to="/admin/usuarios/adicionar" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-40">
        <div class="row">
          <div class="col has-dflex flow-nw-col has-gap-1">
            <UserAdminItem
              name="Fernando Azevedo"
              image="Fernando Azevedo"
              role="Financeiro"
              email="financeiro@bhw.com.br"
            />
            <UserAdminItem
              name="Pedro Yoki"
              image="Pedro Yoki"
              role="Financeiro"
              email="financeiro2@bhw.com.br"
            />
            <UserAdminItem
              name="José Luis"
              image="José Luis"
              role="Administrativo"
              email="admin@bhw.com.br"
            />
            <UserAdminItem
              name="Pedro Augusto"
              image="Pedro Augusto"
              role="Operador"
              email="pedro@bhw.com.br"
            />
            <UserAdminItem
              name="Heloísa Montefusco"
              image="Heloísa Montefusco"
              role="Operador"
              email="heloisa@bhw.com.br"
            />
            <UserAdminItem
              name="Thiago Campos"
              image="Thiago Campos"
              role="Operador"
              email="vendas@bhw.com.br"
            />
            <UserAdminItem
              name="Luana Silva"
              image="Luana Silva"
              role="Operador"
              email="contabilidade@bhw.com.br"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  gap: 1.5rem;
  padding-bottom: 3.75rem;
}
</style>
