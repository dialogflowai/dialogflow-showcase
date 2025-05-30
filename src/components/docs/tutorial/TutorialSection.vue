<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import LanguageSwitcher from '../../LanguageSwitcher.vue';
import ClarityLanguageLine from '~icons/clarity/language-line'

const { t, tm, rt } = useI18n();
const md = new MarkdownIt()

const props = defineProps({
    i18nKey: {
        type: String,
        required: true
    }
})

const resolvedImg = computed(() => {
    return (img) => {
        return new URL(`../../../assets/tutorial/${img}`, import.meta.url).href;
    }
})
const title = computed(() => t(`${props.i18nKey}.title`))
const desc = computed(() => t(`${props.i18nKey}.desc`))
const steps = computed(() => tm(`${props.i18nKey}.steps`) || [])
</script>
<style scoped>
.how-to-use {
    /* max-width: 800px; */
    margin: auto;
    padding: 10px;
}

.step {
    margin-bottom: 2rem;
}

img {
    border: gray 1px solid;
    max-width: 100%;
    border-radius: 4px;
    margin-top: 8px;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.markdown :deep(p) {
    /* margin: 0.5em 0; */
    line-height: 1.6;
}

.markdown :deep(ol) {
    margin: 0;
    padding: 0;
}

.markdown :deep(code) {
    background: #f2f2f2;
    padding: 2px 6px;
    border-radius: 8px;
    font-family: monospace;
}

.markdown :deep(pre) {
    background: #f8f8f8;
    padding: 10px;
    overflow-x: auto;
    border-radius: 6px;
}
</style>
<template>
    <LanguageSwitcher />
    <div class="how-to-use">
        <h1>{{ title || '教程指南' }}</h1>
        <p>{{ desc || '教程指南' }}</p>
        <div v-for="(step, index) in steps" :key="index" class="step">
            <h2 v-if="step.title">{{ step.title }}</h2>
            <!-- <p>{{ step.text }}</p> -->
            <div class="markdown" v-html="md.render(txt || '')" v-for="(txt, index) in step.texts" />
            <div class="images" v-if="step.images && step.images.length">
                <img v-for="(img, i) in step.images" :key="i" :src="resolvedImg(img)" loading="lazy" alt="Step image" />
            </div>
            <img v-if="step.img" :src="resolvedImg(step.img)" loading="lazy" alt="Tutorial image" />
        </div>
    </div>
</template>