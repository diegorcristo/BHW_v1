<template>
  <div>
    <header>
      <div class="container-90">
        <div class="row content">
          <NuxtLink class="logo" to="/">
            <Logo />
          </NuxtLink>

          <CepSearch />

          <div class="search-content">
            <Search />
          </div>

          <div class="menu-content has-dflex align-center has-gap-1">
            <Menu />
            <CartMenu />
          </div>
        </div>
      </div>
    </header>
    <ContextMenu />
    <ContextCart />
    <CepModal />
  </div>
</template>

<style lang="scss" scoped>
header {
  z-index: 10;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.25rem 0;
  background-color: $bgc-02;
  box-shadow: 0px 0px 30px rgba(51, 48, 62, 0.2);

  .content {
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 3.75rem;
    position: relative;

    .search-content {
      width: 100%;
    }

    .menu-content {
      flex-flow: row nowrap;
    }
  }
}

// iPad Pro - 1024px
@media screen and (max-width: 64rem) {
  header {
    .content {
      gap: 1rem;
    }
  }
  .context-cart {
    padding: calc(130px + 1.25rem) 0 1rem 0 !important;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  header {
    padding: 1rem 0 0 0 !important;

    .content {
      flex-flow: column-reverse nowrap !important;
      .cep-search {
        display: none !important;
      }
      .logo {
        height: 48px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .search-content {
        padding: 8px 0;
      }
      .menu-content {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}

// Generic Smartphone - 500px
@media screen and (max-width: 31.25rem) {
  header {
    .content {
      align-items: stretch;
      .logo {
        height: 24px;
      }
    }
  }
}
</style>
