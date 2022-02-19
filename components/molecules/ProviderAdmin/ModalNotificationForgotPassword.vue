<template>
  <aside class="modal-notification-forgot-password has-dflex-center active">
    <div class="modal has-dflex flow-nw-col">
      <div class="head">
        <div class="row flow-nw-row justify-between align-center">
          <svg
            width="63"
            height="26"
            viewBox="0 0 63 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.6006 8.54883H57.9692C57.6243 8.55236 57.2909 8.67346 57.0242 8.89212C56.7574 9.11079 56.5732 9.41392 56.5021 9.75143V9.84764L54.9026 19.2039L52.9003 9.81156V9.69731C52.8186 9.36982 52.6299 9.07897 52.3641 8.87092C52.0983 8.66286 51.7706 8.54951 51.4331 8.54883H48.9317C48.6001 8.56849 48.2842 8.69699 48.0331 8.91442C47.782 9.13185 47.6096 9.42606 47.5427 9.75143V9.79352L45.5704 19.2039L43.9589 9.79954C43.8861 9.45953 43.6989 9.15474 43.4287 8.93592C43.1585 8.7171 42.8214 8.59746 42.4737 8.59693H38L41.6078 22.8297L42.3895 25.8783H47.9215L50.2124 17.2316L52.5034 25.8783H58.0354L58.8171 22.8297L62.4249 8.59693H58.5886L58.6006 8.54883Z"
              fill="#C4165E"
            />
            <path
              d="M35.3933 10.0651C34.9003 8.68816 33.5173 7.8704 31.6713 7.8704C29.8253 7.8704 27.847 8.82646 26.0371 10.5642V1.67098C26.0211 1.29223 25.8642 0.933098 25.5973 0.663934C25.3304 0.39477 24.9725 0.234961 24.5939 0.21582H20V12.5425V24.0935C20.0031 24.4944 20.1638 24.878 20.4473 25.1615C20.7308 25.445 21.1144 25.6056 21.5153 25.6088H26.0732V15.1461C27.1675 14.16 27.9853 13.703 28.6888 13.703C29.3923 13.703 29.6749 14.0458 29.7411 15.0319V24.0935C29.7505 24.4881 29.9134 24.8634 30.1953 25.1396C30.4772 25.4159 30.8557 25.5713 31.2504 25.5727H35.8142V12.5245C35.822 11.6861 35.6794 10.8532 35.3933 10.0651Z"
              fill="#C4165E"
            />
            <path
              d="M10.5408 7.70869C9.67023 7.68148 8.805 7.85434 8.0117 8.21398C7.2184 8.57363 6.51818 9.11046 5.96491 9.78318V1.49123C5.96177 1.09671 5.80365 0.719231 5.52467 0.44025C5.24569 0.16127 4.86821 0.00314378 4.47369 0H0V24.0942C0.00296305 24.4836 0.156932 24.8566 0.429481 25.1348C0.70203 25.413 1.07189 25.5745 1.46116 25.5854H5.67027V23.7815C6.95105 25.387 8.07548 25.9943 9.81324 25.9943C14.0224 25.9943 16.7102 22.2782 16.7102 16.5599C16.7222 11.106 14.3651 7.70869 10.5408 7.70869ZM8.28594 21.3222C7.54032 21.3222 6.7887 20.9313 5.96491 20.0715V13.9261C6.27345 13.5658 6.65 13.2699 7.07304 13.0553C7.49607 12.8407 7.95727 12.7116 8.43025 12.6754C9.82527 12.6754 10.5408 14.1787 10.5408 17.0349C10.5408 19.8911 9.75311 21.3222 8.28594 21.3222Z"
              fill="#C4165E"
            />
          </svg>
          <button
            class="close has-dflex flow-nw-row align-center"
            @click="removeActive"
          >
            Fechar
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.92969"
                y="15.3281"
                width="14"
                height="1.75"
                rx="0.875"
                transform="rotate(-45 4.92969 15.3281)"
                fill="#33303E"
              />
              <rect
                opacity="0.6"
                x="6.16797"
                y="5.42871"
                width="14"
                height="1.75"
                rx="0.875"
                transform="rotate(45 6.16797 5.42871)"
                fill="#33303E"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="main">
        <div class="row">
          <div class="col content has-dflex flow-nw-col">
            <div class="row">
              <svg
                width="200"
                height="185"
                viewBox="0 0 200 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 64C0 28.6538 28.6538 0 64 0H200V121C200 156.346 171.346 185 136 185H0V64Z"
                  fill="#F2F7F9"
                />
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62.084 38.917C62.084 38.3647 62.5317 37.917 63.084 37.917H136.917C137.47 37.917 137.917 38.3647 137.917 38.917V96.9587C137.917 97.5109 137.47 97.9587 136.917 97.9587H63.084C62.5317 97.9587 62.084 97.5109 62.084 96.9587V38.917ZM72.9173 55.292C72.9173 54.7397 73.365 54.292 73.9173 54.292H109.834C110.386 54.292 110.834 54.7397 110.834 55.292V58.7503C110.834 59.3026 110.386 59.7503 109.834 59.7503H73.9173C73.365 59.7503 72.9173 59.3026 72.9173 58.7503V55.292ZM73.9173 65.2087C73.365 65.2087 72.9173 65.6564 72.9173 66.2087V69.667C72.9173 70.2193 73.365 70.667 73.9173 70.667H93.584C94.1363 70.667 94.584 70.2193 94.584 69.667V66.2087C94.584 65.6564 94.1363 65.2087 93.584 65.2087H73.9173Z"
                  fill="#7F0E3D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.25 60.732C51.25 60.3233 51.7138 60.0873 52.0442 60.3278L100 95.2289L147.956 60.3278C148.286 60.0873 148.75 60.3233 148.75 60.732V128.708C148.75 129.813 147.855 130.708 146.75 130.708H53.25C52.1454 130.708 51.25 129.813 51.25 128.708V60.732Z"
                  fill="#7F0E3D"
                />
              </svg>
            </div>
            <div class="row">
              <div class="col has-dflex flow-nw-col align-center">
                <h3>Confira seu e-mail</h3>
                <p>
                  Enviamos instruções de redefinição da senha para o endereço de
                  e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col contact-row">
          <p>Não recebeu o e-mail? Verifique sua caixa de SPAM ou</p>
          <p class="color-contato">tente um e-mail diferente</p>
        </div>
      </div>
    </div>
    <div class="bg" @click="removeActive"></div>
  </aside>
</template>

<script>
export default {
  methods: {
    removeActive() {
      document
        .querySelector('.modal-notification-forgot-password')
        .classList.remove('active')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-notification-forgot-password {
  z-index: -1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  p {
    font-size: 0.875rem;
    line-height: 21px;
  }
  .modal {
    z-index: 2;
    width: 100%;
    max-width: 28rem;
    position: relative;
    gap: 4rem;
    padding: 3rem 2rem;
    border-radius: $bdr-small;
    background-color: $bgc-03;
    transform: scale(0);
    transition-duration: $tsd;
    transition-property: opacity, transform;
    transition-timing-function: $ttf;

    .head {
      .close {
        padding: 0;
        gap: 0.5rem;
        font-size: 0.875em;
        color: $gray-01;
        background-color: transparent;
      }
    }

    .main {
      .content {
        gap: 1.5rem;
        padding-bottom: 29.5%;
        h3,
        p {
          color: $gray-01;
          text-align: center;
        }
      }
      .contact-row {
        width: 100%;
        bottom: 5%;
        left: 0;
        gap: 0.25rem;
        text-align: center;

        .color-contato {
          color: $pri-l;
          font-weight: 700;
        }
      }
    }
  }

  .bg {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-duration: $tsd;
    transition-property: background-color;
    transition-timing-function: $ttf;
  }

  &.active {
    z-index: 10;

    .modal {
      opacity: 1;
      transform: scale(1);
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .context-cart {
    .modal {
      max-width: 85%;
    }
  }
}
</style>
