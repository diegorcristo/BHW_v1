<template>
  <details class="accordion-product">
    <summary>
      <h6><slot name="title" /></h6>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="5"
          y="13"
          width="2"
          height="14"
          rx="1"
          transform="rotate(-90 5 13)"
          fill="#7F0E3D"
        />
        <path
          d="M11.2929 17.2929C10.9024 17.6834 10.9024 18.3166 11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.7071 12.7071C19.0857 12.3285 19.0989 11.7189 18.7372 11.3243L13.2372 5.32428C12.864 4.91716 12.2314 4.88965 11.8243 5.26285C11.4172 5.63604 11.3897 6.26861 11.7628 6.67572L16.6159 11.9699L11.2929 17.2929Z"
          fill="#7F0E3D"
        />
      </svg>
    </summary>
    <div class="content has-dflex flow-nw-col has-gap-1">
      <slot name="content" />
    </div>
  </details>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
details {
  width: 100%;
  border-radius: $bdr-medium;

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

    .title {
      padding-bottom: 0.25rem;
      font-size: 0.75rem;
      line-height: 1.2;
      color: $gray-05;
    }

    .text {
      padding-bottom: 0.5rem;
      color: $gray-01;
    }

    .detail-category {
      width: 100%;
      gap: 0.5rem;
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
