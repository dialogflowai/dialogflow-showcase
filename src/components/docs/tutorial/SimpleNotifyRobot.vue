<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n();
import LanguageSwitcher from '../../LanguageSwitcher.vue';
import ClarityLanguageLine from '~icons/clarity/language-line'
</script>
<style scoped>
.how-to-use {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.step {
  margin-bottom: 2rem;
}
</style>
<template>
  <LanguageSwitcher />
  <div class="how-to-use">
    <h1>{{ $t('lang.tutorial.SimplestNotificationRobot.title') || '教程指南' }}</h1>
    <p>{{ $t('lang.tutorial.SimplestNotificationRobot.desc') || '教程指南' }}</p>
    <div v-for="(step, index) in $tm('lang.tutorial.SimplestNotificationRobot.steps')" :key="index" class="step">
      <h2 v-if="step.title">{{ step.title }}</h2>
      <p>{{ step.text }}</p>
      <img v-if="step.image" :src="step.image" alt="Step image" />
    </div>
  </div>
</template>