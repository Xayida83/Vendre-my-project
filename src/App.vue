<template>
  <div id="list-container">
    <VendreHeader title="Anställda" :logoSrc="logoSrc" />
    <UserList />
  </div>
</template>

<script>
import VendreHeader from './components/VendreHeader.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    VendreHeader,
    UserList,
  },
  data() {
    return {
      logoSrc:  require('@/assets/vendre-optimizers_logo-black.webp'),
    };
  },
};
</script>

<style>
#list-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
