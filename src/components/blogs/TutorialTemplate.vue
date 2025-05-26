<template>
  <div class="tutorial-container">
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="200px" class="sidebar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            :index="index.toString()"
          >
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容区 -->
      <el-main class="main-content">
        <div class="step-indicator">
          <el-steps :active="activeStep" finish-status="success">
            <el-step
              v-for="(step, index) in steps"
              :key="index"
              :title="step.title"
            ></el-step>
          </el-steps>
        </div>

        <div class="tutorial-content">
          <h2>{{ currentContent.title }}</h2>
          
          <!-- 图文内容区 -->
          <div class="content-section">
            <div v-html="currentContent.text"></div>
            <el-image
              v-if="currentContent.image"
              :src="currentContent.image"
              fit="contain"
            ></el-image>
          </div>

          <!-- 代码演示区 -->
          <div v-if="currentContent.code" class="code-section">
            <el-tabs v-model="activeTab">
              <el-tab-pane
                v-for="(code, lang) in currentContent.code"
                :key="lang"
                :label="lang"
                :name="lang"
              >
                <pre><code>{{ code }}</code></pre>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const activeStep = ref(0)
const activeTab = ref('html')

const menuItems = ref([
  { title: '简介', text: '这里是教程简介...', image: '' },
  { title: '安装', text: '安装步骤说明...', code: { bash: 'npm install' } },
  // 更多菜单项...
])

const steps = ref([
  { title: '准备' },
  { title: '安装' },
  { title: '配置' },
  { title: '使用' }
])

const currentContent = computed(() => {
  return menuItems.value[activeIndex.value]
})

const handleSelect = (index) => {
  activeIndex.value = index
  activeStep.value = parseInt(index)
}
</script>

<style scoped>
.tutorial-container {
  height: 100vh;
}

.sidebar {
  background-color: #f5f7fa;
  height: 100%;
}

.main-content {
  padding: 20px;
}

.content-section {
  margin: 20px 0;
}

.code-section {
  margin-top: 30px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .el-aside {
    width: 100% !important;
    height: auto !important;
  }
  
  .el-container {
    flex-direction: column;
  }
  
  .el-menu-vertical {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>