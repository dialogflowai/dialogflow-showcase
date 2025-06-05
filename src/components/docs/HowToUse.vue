<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import { useRoute } from 'vue-router'
import SolarDocumentTextLinear from '~icons/solar/document-text-linear'

const { t, tm } = useI18n()
const md = new MarkdownIt()

const howToUse = computed(() => tm(`howToUse`) || [])
</script>

<style scoped>
.mid {
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.black-line {
  height: 6px;
  background-color: black;
}

.title {
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <el-row class="mid" id="howToUse">
    <el-col :span="8">
      <div class="black-line"></div>
    </el-col>
    <el-col :span="4">
      <h1 style="text-align: center;">How to use</h1>
    </el-col>
    <el-col :span="8">
      <div class="black-line"></div>
    </el-col>
  </el-row>

  <el-timeline>
    <el-timeline-item :timestamp="item.timestamp" placement="top" v-for="item in howToUse">
      <el-card>
        <div class="title">{{ item.title }}</div>
        <div class="description">
          <p v-html="md.render(item.desc)" />
        </div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#3 Integrating" placement="top">
      <el-card>
        <div class="title">Integrate to your application</div>
        <p>
          <el-icon>
            <SolarDocumentTextLinear />
          </el-icon>
          Checkout <router-link to="/doc/api/integration/overview">request API doc</router-link>
        </p>
        <div class="description"></div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
