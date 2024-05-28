<template>
  <header class="vendre-header">
    <VendreLogo :logoSrc="logoSrc" />
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
import VendreLogo from './VendreLogo.vue';

export default {
  name: 'VendreHeader',
  components: {
    VendreLogo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2em;
}
.title {
  font-size: 2em;
  color: #2c3e50;
}
</style>
