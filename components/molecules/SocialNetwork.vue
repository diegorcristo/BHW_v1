<template>
  <div class="social-network has-dflex flow-nw-row justify-left align-center">
    <SocialLink
      icon="facebook"
      name="Facebook"
      to="https://www.facebook.com/"
    ></SocialLink>
    <SocialLink
      icon="instagram"
      name="Instagram"
      to="https://www.instagram.com/"
    ></SocialLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.social-network {
  gap: 0.5rem 1rem;
}
</style>
