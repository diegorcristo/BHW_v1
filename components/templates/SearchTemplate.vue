<template>
  <div>
    <Header />
    <main class="ps-relative">
      <section class="sec-header">
        <div class="container-90">
          <div class="row align-end">
            <div class="col">
              <ResultSearch :qtde="resultqtde" content="content" />
            </div>
            <div class="col col-headerfilter">
              <Ordering />
            </div>
          </div>
        </div>
      </section>
      <section class="sec-content ps-relative">
        <div class="container-90">
          <div class="row align-stretch">
            <div v-show="resultqtde" class="col is-3 col-filter">
              <div class="row">
                <AccordionShowcase
                  :title="'Harmonizações'"
                  :items="['Queijos', 'Massas']"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="'Ocasião'"
                  :items="['A Dois', 'Presente']"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="'Tipo'"
                  :items="['Espumante', 'Branco Leve']"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="'Uva'"
                  :items="['Cabernet Sauvignon', 'Merlot']"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="'País'"
                  :items="['Queijos', 'Massas']"
                />
              </div>
              <div class="row">
                <AccordionShowcase
                  :title="'Preço'"
                  :items="['Espumante', 'Branco Leve']"
                />
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="grid-items">
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      disconts="true"
                      price="34,90"
                      bestprice="14,90"
                      name="Punta Negra"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="90"
                      bestprice="65,10"
                      name="Ponderado"
                      :categories="['Tinto', 'Pinot Noir', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      disconts="true"
                      price="34,90"
                      bestprice="14,90"
                      name="Punta Negra"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="90"
                      bestprice="65,10"
                      name="Ponderado"
                      :categories="['Tinto', 'Pinot Noir', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      disconts="true"
                      price="34,90"
                      bestprice="14,90"
                      name="Punta Negra"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="90"
                      bestprice="65,10"
                      name="Ponderado"
                      :categories="['Tinto', 'Pinot Noir', 'Espanha']"
                    />
                    <ProductCardShowcase
                      image="Don Simon Reserva"
                      imageDescription="Garrafa de vinho"
                      points="50"
                      disconts="true"
                      price="34,90"
                      bestprice="16,90"
                      name="Don Simon Reserva"
                      :categories="['Tinto', 'Tempranillo', 'Espanha']"
                    />
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
        <div class="filter-more has-dflex-center" @click="addActive">
          <new-button stylization="filter">
            <template v-slot:content>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.93337 4.13398C3.68616 3.80437 3.92135 3.33398 4.33337 3.33398L15.6667 3.33398C16.0787 3.33398 16.3139 3.80437 16.0667 4.13398L11.6667 10.0007V16.6916C11.6667 17.0633 11.2756 17.3051 10.9431 17.1388L8.33337 15.834L8.33337 10.0007L3.93337 4.13398Z"
                  fill="white"
                />
              </svg>
              Filtros
            </template>
          </new-button>
        </div>
      </section>
      <ModalFilter />
    </main>
    <Footer />
  </div>
</template>

<script>
import NewButton from '../atoms/form/NewButton.vue'
export default {
  components: { NewButton },
  data() {
    return {
      resultqtde: 1,
    }
  },
  methods: {
    addActive() {
      document.querySelector('.modal-filter').classList.add('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.sec-header {
  padding: 1.5rem 0 2.5rem 0;
}

.grid-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  &.no-result {
    grid-template-columns: repeat(6, 1fr);
  }
}

.load-more {
  padding: 2.5rem 0;
  button {
    width: fit-content;
    width: moz-fit-content;
  }
}

.filter-more {
  z-index: 9;
  display: none !important;
  position: sticky;
  bottom: 0;
  left: 0;
  padding: 2.375rem 0;
  background: linear-gradient(180deg, rgba(250, 249, 248, 0) 0%, #faf9f8 100%);
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .col-headerfilter,
  .col-filter {
    display: none !important;
  }

  .grid-items {
    grid-template-columns: repeat(3, 1fr);
  }

  .filter-more {
    display: flex !important;
  }
}

@media screen and (max-width: 31.25rem) {
  .grid-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
