<template>
  <details>
    <summary>
      <h6>{{ title }}</h6>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0857 11.6715 16.0989 12.2811 15.7372 12.6757L10.2372 18.6757C9.86396 19.0828 9.23139 19.1103 8.82427 18.7372C8.41716 18.364 8.38965 17.7314 8.76284 17.3243L13.6159 12.0301L8.29289 6.70711Z"
          fill="#7F0E3D"
        />
      </svg>
    </summary>
    <div class="content has-dflex flow-nw-col has-gap-1">
      <!-- <span v-for="item in items" :key="item">
            {{ item.descricao }}
          </span>         -->

      <span v-for="item in items" :key="item">{{ item }}</span>
      <span class="more">ver todos</span>
    </div>
  </details>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    stylization: {
      type: String,
      default: '',
    },
    /*     type: {
      type: String,
      default: '',
    }, */
    items: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
details {
  width: 100%;
  border-radius: 0;

  summary {
    width: 100%;
    padding: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    cursor: pointer;
    user-select: none;
    color: $gray-01;

    &::before {
      content: '';
      width: calc(100% - 2rem);
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 1rem;
      background-color: $gray-07;
    }

    svg {
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
    }
    &::-webkit-details-marker {
      display: none;
    }
  }
  .content {
    padding: 1rem;

    span {
      font-size: 0.875em;
      font-weight: 400;
      cursor: pointer;
      color: $gray-01;
      transition-duration: $tsd;
      transition-property: color;
      transition-timing-function: $ttf;

      &.more {
        font-size: 0.8125em;
        font-weight: 600;
      }

      &:hover {
        color: $pri-n;
      }
    }
  }
  &[open] {
    summary ~ * {
      animation: open-details 0.5s ease-in-out;
    }
    summary {
      &::before {
        background-color: $gray-06;
      }
      svg {
        transform: rotate(-90deg);
      }
    }
  }
}
@keyframes open-details {
  from {
    opacity: 0;
    margin-left: -1.25rem;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
} ;
</style>
