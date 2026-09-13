<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

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

/* The `.markdown :deep(...)` block that used to live here has been removed.
   It compiled to (0,2,1) — `:deep()` contributes the parent's scope attribute
   *plus* the descendant — which outranked the (0,1,1) rules in the global
   `doc-prose.css` sheet. Leaving it in would have kept tutorial code blocks
   light grey while the API pages' `<pre>` turned dark, producing a new
   inconsistency between two doc sections. */
</style>
<template>
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