<template>
  <div class="flags">
    <figure>
      <img
        src="/media/icon/payment/paypal.svg"
        title="PayPal"
        alt="Ícone da bandeira do PayPal"
        aria-label="Ícone da bandeira do PayPal"
      />
    </figure>
    <figure>
      <img
        src="/media/icon/payment/visa.svg"
        title="Visa"
        alt="Ícone da bandeira da Visa"
        aria-label="Ícone da bandeira da Visa"
      />
    </figure>
    <figure>
      <img
        src="/media/icon/payment/amex.svg"
        title="American Express"
        alt="Ícone da bandeira da American Express"
        aria-label="Ícone da bandeira da American Express"
      />
    </figure>
    <figure>
      <img
        src="/media/icon/payment/mastercard.svg"
        title="Mastercard"
        alt="Ícone da bandeira da Mastercard"
        aria-label="Ícone da bandeira da Mastercard"
      />
    </figure>
    <figure>
      <img
        src="/media/icon/payment/barcode.svg"
        title="Boleto Bancário"
        alt="Ícone de boleto bancário"
        aria-label="Ícone de boleto bancário"
      />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.flags {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem 1rem;

  figure {
    display: flex;
    user-select: none;
  }
}
</style>
