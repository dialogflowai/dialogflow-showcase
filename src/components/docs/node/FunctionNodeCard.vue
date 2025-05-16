<template>
  <div class="function-node-card">
    <img :src="resolvedImg" :alt="title" class="function-node-image" />
    <div class="function-node-content">
      <div class="function-node-title">{{ title }}</div>
      <div class="function-node-desc">
        <slot />
        <br />
        <router-link :to="link">Check detail</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  img: String,
  title: String,
  link: String,
})

const resolvedImg = computed(() => new URL(`../../../assets/${props.img}`, import.meta.url).href)
</script>

<style scoped>
.function-node-card {
  display: flex;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  padding: 20px;
  margin-bottom: 30px;
  align-items: center;
  gap: 20px;
}

.function-node-image {
  flex-shrink: 0;
  width: 270px;
  height: 120px;
  border: 1px solid #eee;
  border-radius: 6px;
  object-fit: contain;
  background-color: #f9f9f9;
}

.function-node-content {
  flex: 1;
}

.function-node-title {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 8px;
}

.function-node-desc {
  line-height: 1.6;
  font-size: 16px;
  color: #444;
}

.function-node-desc a {
  color: #409EFF;
  text-decoration: none;
}

.function-node-desc a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .function-node-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .function-node-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  .function-node-content {
    width: 100%;
  }

  .function-node-title {
    font-size: 20px;
  }

  .function-node-desc {
    font-size: 15px;
  }
}

</style>
