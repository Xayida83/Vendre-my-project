<template>
  <header class="vendre-header">
    <VendreLogo :logoSrc="logoSrc" />
    <nav class="top-menu">
      <div class="row">
        <ul class="inline-list">
          <li>
            <div class="header-links-position">
              <a href="https://vendre.se/produkt/" class="svg-icon top-menu-icon">Produkt</a>
            </div>
          </li>
          <li>
              <div class="header-links-position">
                <a href="https://vendre.se/partners/" class="svg-icon top-menu-icon">Partners</a>
              </div>
            </li>
            <li><a href="https://vendre.se/priser/">Priser</a></li>
            <li><a href="https://vendre.se/referenser/">Referenser</a></li>
            <li><a href="https://vendre.se/kundcase/">Kundcase</a></li>
            <li>
              <div class="header-links-position">
                <a href="https://vendre.se/gallery.php?id=457" class="svg-icon top-menu-icon">Kunskap</a>
              </div>
            </li>
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

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';
@import '@/styles/nav-style';

</style>
