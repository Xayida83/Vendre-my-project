<template>
  <div class="user-card">
    <div class="avatar">
      <img :src="user.avatar" alt="avatar" />
    </div>
    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
    <a :href="'mailto:' + user.email">Kontakta</a>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/user-card-style';

@include user-card-style;
</style>
