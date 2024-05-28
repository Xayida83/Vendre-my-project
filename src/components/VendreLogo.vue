<template>
  <div class="logo-container">
    <img :src="logoSrc" alt="Vendre Logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'VendreLogo',
  props: {
    logoSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.logo {
  max-width: 100%;
  height: auto;
}
</style>
