<template>
  <div>
    <Header />
    <main class="has-dflex flow-nw-col">
      <section class="sec-back">
        <div class="container-90">
          <div class="row">
            <div class="col">
              <BackPageProduct to="/vitrine" content="Voltar aos resultados vitrine" />
            </div>
          </div>
        </div>
      </section>
      <section class="sec-content">
        <CategoryShare />
        <div class="container-90">
          <div class="row align-stretch">
            <div class="col col-product">
              <ProductView />
            </div>
            <div class="col is-5">
              <ProductContent />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-90 has-dflex flow-nw-col has-gap-1">
          <div class="row">
            <div class="col">
              <accordion-product>
                <template v-slot:title>Mais detalhes</template>
                <template v-slot:content>
                  <div class="row">
                    <div class="col has-flex flow-nw-col has-gap-1">
                      <div class="text tiny">
                        <p>Harmoniza com</p>
                      </div>
                      <div class="detail-category has-dflex">
                        <BadgeProduct to="/" content="Pizza" />
                        <BadgeProduct to="/" content="Espaguete a bolonhesa" />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col has-flex flow-nw-col has-gap-1">
                      <div class="text tiny">
                        <p>Ocasião</p>
                      </div>
                      <div class="detail-category has-dflex">
                        <BadgeProduct to="/" content="A Dois" />
                        <BadgeProduct to="/" content="Presente" />
                        <BadgeProduct to="/" content="Casamento" />
                      </div>
                    </div>
                  </div>
                </template>
              </accordion-product>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <accordion-product>
                <template v-slot:title>Ficha técnica</template>
                <template v-slot:content>
                  <div class="row">
                    <div class="col has-dflex flow-nw-col has-gap-1">
                      <div class="row">
                        <div class="col">
                          <p class="title">Região</p>
                          <div class="text">
                            <p>Castilla-La Mancha</p>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <p class="title">Tipo de fechamento</p>
                          <div class="text">
                            <p>Rolha sintética</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="title">Serviço</p>
                          <div class="text">
                            <p>16°C</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="title">Safra</p>
                          <div class="text">
                            <p>1992</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col has-dflex flow-nw-col has-gap-1">
                      <div class="row">
                        <div class="col">
                          <p class="title">Teor alcoólico</p>
                          <div class="text">
                            <p>12,0%</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="title">Produtor</p>
                          <div class="text">
                            <p>J. García Carrión</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="title">Potencial de guarda</p>
                          <div class="text">
                            <p>Pronto para beber</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="title">Pontuação</p>
                          <div class="text">
                            <p>92 WS; 95 JL</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </accordion-product>
            </div>
          </div>

          <div class="row">
            <div class="row">
              <div class="col">
                <accordion-product>
                  <template v-slot:title>Especificações</template>
                  <template v-slot:content>
                    <div class="row">
                      <div class="col has-dflex flow-nw-col has-gap-1">
                        <div class="row">
                          <div class="col">
                            <p class="title">Visual</p>
                            <div class="text">
                              <p>Vermelho-rubi com reflexos violáceos.</p>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <p class="title">Nariz</p>
                            <div class="text">
                              <p>
                                Frutas vermelhas como cereja e morango com
                                toques de alcaçuz.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <p class="title">Boca</p>
                            <div class="text">
                              <p>
                                Corpo médio, taninos macios, ótimo equilíbrio e
                                fruta.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </accordion-product>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContextFreight />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-left: 6.25rem;
  padding-bottom: 6.25rem;
  gap: 1.5rem;
  background-color: $bgc-02;
}

.sec-content {
  position: relative;
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  main {
    padding-left: 0;
    background-color: #faf9f8;
    gap: 2.5rem;
  }

  .sec-back {
    display: none;
  }

  .sec-content {
    &::before {
      z-index: 1;
      content: '';
      width: 100%;
      aspect-ratio: 1 / 0.9;
      position: absolute;
      top: 0;
      left: 0;
      background-color: $bgc-02;
      border-radius: 0 0 $bdr-medium $bdr-medium;
    }

    .row {
      flex-flow: column nowrap;

      .is-5 {
        width: 100%;
      }
    }
  }
}

// iPad - 768px
@media screen and (max-width: 31.25rem) {
  main {
    padding-top: 6.75rem;
  }
}
</style>
