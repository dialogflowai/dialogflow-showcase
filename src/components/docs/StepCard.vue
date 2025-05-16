<template>
  <el-card>
    <div class="step-title">{{ title }}</div>
    <div v-if="description" class="description" v-html="description" />
    <div v-if="imgList.length" class="images">
      <img v-for="(img, i) in imgList" :key="i" :src="img" class="step-img" />
    </div>
    <slot />
  </el-card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imgList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.step-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.description {
  margin-bottom: 10px;
}
.step-img {
  max-width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
