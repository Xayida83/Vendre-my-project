<template>
  <div class="image-text">
    <div class="image">
      <img :src="themeImg" alt="image" class="image" />
    </div>
    <div class="title">
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    themeImg: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';
@import '@/styles/title-image-style';

</style>
