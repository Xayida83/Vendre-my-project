<template>
  <div class="user-card">
    <div class="avatar">
      <img :src="user.avatar" alt="avatar" />
    </div>
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
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
  min-width: 15em;
}
.avatar {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}
.avatar::before{
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #a0b3c9;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.user-card:hover .avatar::before {
  height: 100%;
}
.avatar::after {
  content: "";
  width: 100%; 
  height: 100%;
  border-radius: 50%;
  background-color: #a0b3c9;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}
.user-card:hover img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}
h3 {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}
a {
  width: 100%;
  padding: 10px 0px;
  margin: 0;
  background-color: #a0b3c9;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s; 
  color: black;
  font-weight: 700;
}
.user-card:hover a {
  bottom: 0px;
}

</style>
