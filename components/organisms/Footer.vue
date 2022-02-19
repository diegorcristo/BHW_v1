<template>
  <footer>
    <div class="container-90">
      <div class="row align-stretch">
        <div class="col has-dflex align-center">
          <LogoTiny />
        </div>
        <div class="col">
          <h6>Institucional</h6>
          <ul class="list-s-none">
            <li>
              <NuxtLink to="/contato">Contato</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vitrine">Vitrine</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/quemsomos">Quem Somos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/fornecedores/parceiro"
                >Seja nosso parceiro</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h6>Redes sociais</h6>
          <SocialNetwork />
        </div>
        <div class="col">
          <h6>Formas de pagamento</h6>
          <PaymentLink />
        </div>
        <div class="col">
          <h6>Site seguro</h6>
          <figure class="image">
            <img src="media/content/google-safe-browser.jpg" alt="" />
          </figure>
          <div class="text">
            <small>2021 Todos os direitos reservados</small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
  padding: 2.5rem 0;
  background-color: $pri-d;
  //user-select: none;

  .row {
    gap: 32px;
    h6 {
      color: $w;
      margin: 0 0 1rem;
    }

    small {
      color: $w;
    }
  }
  ul {
    display: grid;
    grid-auto-flow: row;
    gap: 0.5rem;
    margin: 0;
    padding-left: 0;
    list-style: none;

    li {
      a {
        color: $w !important;
        text-decoration: none;
      }
    }
  }
}
.logo-tiny {
  svg {
    path {
      fill: $w !important;
    }
  }
}

@media screen and (max-width: 31.25rem) {
  footer {
    .row {
      .logo-tiny {
        width: 100%;
      }

      .text {
        text-align: center;
        small {
        }
      }
    }
  }
}
</style>
