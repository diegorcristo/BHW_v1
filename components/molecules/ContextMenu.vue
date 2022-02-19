<template>
  <aside class="context-menu">
    <h5 class="title">Olá!</h5>

    <nav>
      <ul>
        <li>
          <MenuLink
            content="Início"
            icon="house"
            name="Ícone de casa"
            to="/"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Minha conta"
            icon="people"
            name="Ícone de pessoa"
            to="/minhaconta"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Minhas compras"
            icon="truck"
            name="Ícone de caminhão"
            to="/minhaconta/compras"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Seja um parceiro"
            icon="group"
            name="Ícone de um grupo de pessoas"
            to="/fornecedores/parceiro"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Quem somos"
            icon="smile"
            name="Ícone de um rosto feliz"
            to="/quemsomos"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Contato"
            icon="mail"
            name="Ícone de carta"
            to="/contato"
          ></MenuLink>
        </li>
        <li>
          <MenuLink
            content="Ajuda"
            icon="chat"
            name="Ícone de balões de conversa"
            to="/ajuda"
          ></MenuLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.context-menu {
  width: fit-content;
  width: moz-fit-contain;
  position: fixed;
  z-index: 12;
  top: 0;
  right: 11%;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  opacity: 0;
  transform: translateY(-100%);
  border-radius: $bdr-tiny;
  box-shadow: $bsw-medium;
  background-color: $bgc-02;
  transition-duration: $tsd;
  transition-property: transform, opacity;
  transition-timing-function: $ttf;

  .title {
    font-size: 1rem;
  }

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-flow: column nowrap;
      gap: 0.25rem;

      li {
      }
    }
  }

  &.active {
    transform: translateY(75px);
    opacity: 1;
  }
}

@media screen and (max-width: 48rem) {
  .context-menu {
    right: auto;
    left: 0.5rem;
  }
}
</style>
