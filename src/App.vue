<template>
  <VendreHeader :logoSrc="logoSrc" />
  <div class="background">
    <TitleComponent 
      :themeImg="themeImg"
      title="Anställda" 
      subtitle="Träffa vårt fantastiska team på Vendre – ett glatt gäng som alltid strävar efter att göra våra kunder nöjda. Och glöm inte att säga hej till vår charmiga kontorshund som sprider glädje varje dag!"
    />
    <div id="list-container">
      <UserList />
    </div>
  </div>
</template>

<script>
import VendreHeader from './components/VendreHeader.vue';
import TitleComponent from './components/TitleComponent.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    VendreHeader,
    TitleComponent,
    UserList,
  },
  data() {
    return {
      logoSrc:  require('@/assets/vendre-optimizers_logo-black.webp'),
      themeImg: require('@/assets/theme.webp'),
    };
  },
};
</script>

<style>
.background {
  background-image: linear-gradient(180deg, rgb(238, 235, 251), #fff);
}
#list-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
}

@import '@/styles/main';
</style>
