<template>
  <el-row class="section-title">
    <el-col :span="8"><div class="black-line" /></el-col>
    <el-col :span="8"><h1 class="text-center">{{ title }}</h1></el-col>
    <el-col :span="8"><div class="black-line" /></el-col>
  </el-row>
</template>

<script setup>
defineProps({ title: String })
</script>

<style scoped>
.black-line {
  height: 6px;
  background-color: black;
}
.text-center {
  text-align: center;
}
</style>
