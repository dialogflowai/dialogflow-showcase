<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm, locale } = useI18n();
const list1 = computed(() => tm(`why.list1`) || [])
const list2 = computed(() => tm(`why.list2`) || [])
</script>

<template>
  <section class="why-container">
    <div class="title">
      <h1>{{ t('why.title') }}</h1>
      <h2>{{ t('why.desc') }}</h2>
    </div>
    <el-row :gutter="30" class="why-row">
      <el-col :xs="24" :sm="12" :md="8" v-for="(item, idx) in list1" :key="'w1-' + idx">
        <div class="why-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="30" class="why-row">
      <el-col :xs="24" :sm="12" :md="8" v-for="(item, idx) in list2" :key="'w2-' + idx">
        <div class="why-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.why-container {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.title h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.title h2 {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
}

.why-row {
  margin-bottom: 50px;
}

.why-card {
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  text-align: left;
  height: 100%;
}

.why-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.why-card p {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}
.bg1 {
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}

.bg2 {
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

.bg3 {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .why-row {
    flex-direction: column;
  }

  .why-card {
    margin-bottom: 20px;
  }

  .title h1 {
    font-size: 28px;
  }

  .title h2 {
    font-size: 18px;
  }
}
</style>