<template>
  <div>
    <Header />
    <main>
      <section class="sec-header">
        <div class="container-90">
          <div class="row align-end">
            <div class="col">
              <h4>Encontramos {{ resultqtde }} vinhos para você!</h4>
              <div class="filter has-dflex flow-w-row">
                <p>Filtros ativos</p>
                <BadgeFilter content="Tinto Leve" />
              </div>
            </div>
            <div class="col">
              <Ordering />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-90">
          <div class="row align-stretch">
            <div v-show="resultqtde" class="col is-3">
              <div class="row">
                <AccordionShowcase :title="'Harmonizações'"
                                   :items="['Queijos', 'Massas']" />
              </div>

              <div class="row">
                <AccordionShowcase :title="'Ocasião'"
                                   :items="['A Dois', 'Presente']" />
              </div>
              <div class="row">
                <AccordionShowcase :title="'Tipo'"
                                   :items="['Espumante', 'Branco Leve']" />
              </div>
              <div class="row">
                <AccordionShowcase :title="'Uva'"
                                   :items="['Cabernet Sauvignon', 'Merlot']" />
              </div>
              <div class="row">
                <AccordionShowcase :title="'País'"
                                   :items="['Queijos', 'Massas']" />
              </div>
              <div class="row">
                <AccordionShowcase :title="'Preço'"
                                   :items="['Espumante', 'Branco Leve']" />
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="grid-items">
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="14,90"
                                         name="Punta Negra"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="90"
                                         bestprice="65,10"
                                         name="Ponderado"
                                         :categories="['Tinto', 'Pinot Noir', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="14,90"
                                         name="Punta Negra"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="90"
                                         bestprice="65,10"
                                         name="Ponderado"
                                         :categories="['Tinto', 'Pinot Noir', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="14,90"
                                         name="Punta Negra"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="90"
                                         bestprice="65,10"
                                         name="Ponderado"
                                         :categories="['Tinto', 'Pinot Noir', 'Espanha']" />
                    <ProductCardShowcase image="Don Simon Reserva"
                                         imageDescription="Garrafa de vinho"
                                         points="50"
                                         disconts="true"
                                         price="34,90"
                                         bestprice="16,90"
                                         name="Don Simon Reserva"
                                         :categories="['Tinto', 'Tempranillo', 'Espanha']" />
                  </div>
                  <div class="load-more">
                    <div class="row">
                      <Button stylization="secondary" content="Carregar mais" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        resultqtde: 10,
      }
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  section {
    //background-color: $bgc-03;
  }

  .sec-header {
    padding: 1.5rem 0 2.5rem 0;
    .filter

  {
    padding: 8px 0 0 0;
    gap: 6px 12px;
    p

  {
    padding: 3px 0 3px 0;
  }

  }
  }

  .load-more {
    padding: 2.5rem 0;
    button

  {
    width: fit-content;
    width: moz-fit-content;
  }

  }

  .grid-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    &.no-result

  {
    grid-template-columns: repeat(6, 1fr);
  }
  }
</style>
