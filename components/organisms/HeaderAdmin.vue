<template>
  <div>
    <header>
      <div class="container-90">
        <div class="row content">
          <div class="has-dflex flow-nw-row has-gap-3 align-center">
            <BtnMenu />
            <NuxtLink class="logo" to="/">
              <Logo />
            </NuxtLink>
          </div>

          <BtnNotification />
        </div>
      </div>
    </header>
    <AdminMenuContext />
    <AdminNotificationContext />
    <ModalNotificationClear />
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
  box-shadow: 0px 0px 30px rgba(58, 51, 80, 0.2);

  .content {
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 3.75rem;
    position: relative;
  }
}

// iPad Pro - 1024px
@media screen and (max-width: 64rem) {
  header {
    .content {
      gap: 1rem;
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  header {
    padding: 1rem 0 0 0 !important;

    .content {
      flex-flow: column-reverse nowrap !important;
      .logo {
        height: 48px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
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
