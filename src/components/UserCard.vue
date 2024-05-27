<template>
  <div class="user-card">
    <img :src="user.avatar" alt="avatar" class="avatar" />
    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
    <a :href="'mailto:' + user.email">Contact</a>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
