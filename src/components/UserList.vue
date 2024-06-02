<template>
  <div>
    <div class="user-list">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage" :disabled="!hasMore">Next</button>
    </div>
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
      page: 1,
      hasMore: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${this.page}`);
        const data = await response.json();
        this.users = data.data;
        this.hasMore = this.page < data.total_pages;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    nextPage() {
      if (this.hasMore) {
        this.page += 1;
        this.fetchUsers();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchUsers();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.user-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  margin: 1em;
}
.pagination button {
  margin: 0 1em;
  padding: 0.5em 1em;
  cursor: pointer;
  border: none;
  background-color: $primary-color;
  color: $font-color;
  border-radius: 4px;
}
.pagination button:disabled {
  background-color: $secondary-color;
  cursor: not-allowed;
}
.pagination span {
  margin: 0 1em;
  line-height: 2.5em;
}
</style>
