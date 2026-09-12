<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import SectionHeader from '../SectionHeader.vue'
import SolarDocumentTextLinear from '~icons/solar/document-text-linear'

const { t, tm } = useI18n()
const md = new MarkdownIt()

const howToUse = computed(() => tm(`howToUse.tutorials`) || [])
</script>

<style scoped>
.how-to-use {
  background-color: var(--surface-1);
  border-block: 1px solid var(--border-1);
}

.how-to-use__timeline {
  max-width: 820px;
  margin-inline: auto;
  padding-left: 0.25rem;
}

/* Element Plus's default timeline dot is a neutral grey and its node colour
   does not follow the theme's primary — `$timeline: ('node-color': ...)` in
   `src/styles/element/index.scss` is what sets it. These rules only handle the
   connective line and the timestamp type. */
.how-to-use__timeline :deep(.el-timeline-item__tail) {
  border-left-color: var(--border-2);
}

.how-to-use__timeline :deep(.el-timeline-item__timestamp) {
  color: var(--ink-500);
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.how-to-use__timeline :deep(.el-card) {
  border-color: var(--border-1);
  border-radius: var(--r-md);
}

.how-to-use__title {
  font-weight: 700;
  font-size: var(--fs-h3);
  color: var(--ink-900);
  margin-bottom: 0.4rem;
}

.how-to-use__desc :deep(p) {
  margin: 0;
}
</style>

<template>
  <section class="how-to-use section" id="howToUse">
    <div class="container">
      <SectionHeader :title="t('howToUse.title')" level="h2" />

      <div class="how-to-use__timeline">
        <el-timeline>
          <el-timeline-item :timestamp="item.timestamp" placement="top" v-for="item in howToUse" :key="item.timestamp">
            <el-card shadow="never">
              <div class="how-to-use__title">{{ item.title }}</div>
              <div class="how-to-use__desc">
                <p v-html="md.render(item.desc)" />
              </div>
            </el-card>
          </el-timeline-item>

          <el-timeline-item :timestamp="t('howToUse.api.timestamp')" placement="top">
            <el-card shadow="never">
              <div class="how-to-use__title">{{ t('howToUse.api.title') }}</div>
              <router-link class="btn btn-outline btn-sm" to="/doc/api/integration/overview">
                <SolarDocumentTextLinear />{{ t('howToUse.api.linkText') }}
              </router-link>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </section>
</template>
