<template>
    <div class="language-switcher">
        <button @click="toggleDropdown" class="lang-button">
            <span class="flag-icon">
                <img :src="currentFlag" alt="language flag" />
            </span>
            <span class="lang-label">{{ currentLangLabel }}</span>
            <span class="arrow">▼</span>
        </button>

        <transition name="dropdown">
            <div v-show="isOpen" class="dropdown-menu">
                <div v-for="lang in languages" :key="lang.code" class="dropdown-item"
                    @click="switchLanguage(lang.code)">
                    <img :src="lang.flag" alt="" />
                    {{ lang.label }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
// https://www.jsdelivr.com/package/npm/flag-icons-svg
import zhFlag from '../assets/flags/cn.svg'
import ukFlag from '../assets/flags/gb.svg'
const { locale } = useI18n()

// 模拟 i18n 切换逻辑
const supportedLanguages = {
    en: {
        code: 'en',
        label: 'English',
        flag: ukFlag
    },
    zh: {
        code: 'zh',
        label: '简体中文',
        flag: zhFlag
    }
}

const languages = Object.values(supportedLanguages)

const selectedLang = ref(locale.value)

const isOpen = ref(false)

const currentLangLabel = computed(() => {
    return supportedLanguages[selectedLang.value]?.label || 'Language'
})

const currentFlag = computed(() => {
    return supportedLanguages[selectedLang.value]?.flag
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function switchLanguage(lang) {
    if (lang === locale.value) return
    locale.value = lang
    localStorage.setItem('lang', lang)
    selectedLang.value = lang
    isOpen.value = false
    // 在实际项目中可以调用 i18n 的方法来切换语言
    console.log('切换语言至:', lang)
}
</script>

<style scoped>
.language-switcher {
    position: relative;
    font-family: Arial, sans-serif;
}

.lang-button {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.lang-button:hover {
    background-color: #f5f5f5;
}

.flag-icon img {
    width: 20px;
    height: auto;
    margin-right: 8px;
}

.lang-label {
    margin-right: 6px;
}

.arrow {
    font-size: 10px;
    color: #666;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    min-width: 140px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-top: 6px;
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
}

.dropdown-item img {
    width: 18px;
    height: auto;
    margin-right: 10px;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
}
</style>