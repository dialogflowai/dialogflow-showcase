<template>
    <div class="lang-switch">
        Language:
        <button v-for="lang in ['zh', 'en']" :key="lang" :class="{ active: lang === $i18n.locale }"
            @click="switchLang(lang)">
            {{ lang === 'zh' ? '中' : 'En' }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

function switchLang(lang: string) {
    if (lang === locale.value) return

    const newQuery = { ...route.query, lang }
    locale.value = lang
    localStorage.setItem('lang', lang)

    // 刷新页面或直接跳转（推荐刷新）
    router.replace({ path: route.path, query: newQuery }).then(() => {
        // location.reload() // 强制刷新，确保所有内容重载语言
    })
}
</script>

<style scoped>
.lang-switch {
    text-align: right;
}

.lang-switch button {
    margin-right: 10px;
    padding: 6px 12px;
}

.lang-switch .active {
    font-weight: bold;
    text-decoration: underline;
}
</style>