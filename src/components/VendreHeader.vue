<template>
  <header class="vendre-header">
    <VendreLogo :logoSrc="logoSrc" />
    <button class="hamburger" @click="toggleMenu">
      <span class="hamburger-icon"></span>
    </button>
    <nav class="top-menu" :class="{ 'menu-open': isMenuOpen }">
      <div class="row">
        <ul class="inline-list">
          <li>
            <div class="header-links-position">
              <a href="https://vendre.se/produkt/" class="svg-icon top-menu-icon">Produkt</a>
            </div>
          </li>
          <li><a href="https://vendre.se/partners/">Partners</a></li>
          <li><a href="https://vendre.se/priser/">Priser</a></li>
          <li><a href="https://vendre.se/referenser/">Referenser</a></li>
          <li><a href="https://vendre.se/kundcase/">Kundcase</a></li>
          <li><a href="https://vendre.se/gallery.php?id=457">Kunskap</a></li>
        </ul>
      </div>
    </nav>
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
    logoSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';
@import '@/styles/nav-style';

</style>
