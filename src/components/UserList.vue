<template>
  <div class="user-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCard from './UserCard.vue';

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        this.users = data.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
};
</script>

<style scoped>
.user-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
  justify-content: center;
}
</style>
