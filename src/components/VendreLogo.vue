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
  position: relative;
  display: flex;
  height: 48px;
  width: 170px;
}
img {
  height: 48px;
  width: auto;
}
</style>
