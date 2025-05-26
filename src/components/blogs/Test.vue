<template>
  <div class="guide-container">
    <!-- 步骤指示器 -->
    <el-steps :active="activeStep" finish-status="success" simple>
      <el-step 
        v-for="(step, index) in steps" 
        :key="index" 
        :title="step.title"
        @click="activeStep = index"
      ></el-step>
    </el-steps>

    <!-- 向导内容区 -->
    <div class="guide-content">
      <div 
        v-for="(step, index) in steps" 
        :key="index" 
        class="step-section"
        :class="{ 'active-step': activeStep === index }"
      >
        <h2>{{ step.title }}</h2>
        
        <!-- 图文内容 -->
        <div class="content" v-html="step.content"></div>
        
        <!-- 图片展示 -->
        <el-image 
          v-if="step.image" 
          :src="step.image" 
          fit="contain" 
          class="guide-image"
        ></el-image>
        
        <!-- 配置表单 -->
        <el-form 
          v-if="step.form" 
          :model="formData" 
          label-position="top"
          class="config-form"
        >
          <el-form-item 
            v-for="(field, name) in step.form" 
            :key="name"
            :label="field.label"
          >
            <el-input 
              v-if="field.type === 'input'"
              v-model="formData[name]"
              :placeholder="field.placeholder"
            ></el-input>
            <el-select
              v-else-if="field.type === 'select'"
              v-model="formData[name]"
              :placeholder="field.placeholder"
            >
              <el-option
                v-for="opt in field.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(0)

const formData = ref({})

const steps = ref([
  {
    title: '第一步: 基础配置',
    content: '请填写基础配置信息...',
    image: '/images/step1.png',
    form: {
      name: {
        type: 'input',
        label: '项目名称',
        placeholder: '请输入项目名称'
      },
      type: {
        type: 'select',
        label: '项目类型',
        options: [
          { value: 'web', label: 'Web应用' },
          { value: 'mobile', label: '移动应用' }
        ]
      }
    }
  },
  // 更多步骤...
])
</script>

<style scoped>
.guide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.el-steps {
  margin-bottom: 30px;
}

.guide-content {
  position: relative;
  min-height: 500px;
}

.step-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.step-section.active-step {
  opacity: 1;
  pointer-events: all;
}

.guide-image {
  margin: 20px 0;
  max-height: 300px;
}

.config-form {
  margin-top: 30px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .el-steps {
    padding: 0 10px;
  }
  
  .el-step__title {
    font-size: 12px;
  }
  
  .guide-content {
    min-height: 400px;
  }
}
</style>