<template>
    <div class="language-switcher" ref="rootEl">
        <button @click="toggleDropdown" class="lang-button" type="button" aria-haspopup="listbox"
            :aria-expanded="isOpen" :aria-label="currentLangLabel">
            <img class="lang-flag" :src="currentFlag" alt="" />
            <span class="lang-label">{{ currentLangLabel }}</span>
            <svg class="lang-chevron" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.75"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

        <transition name="dropdown">
            <div v-show="isOpen" class="dropdown-menu" role="listbox">
                <button v-for="lang in languages" :key="lang.code" type="button" class="dropdown-item"
                    role="option" :aria-selected="lang.code === selectedLang" @click="switchLanguage(lang.code)">
                    <img class="lang-flag" :src="lang.flag" alt="" />
                    <span>{{ lang.label }}</span>
                    <span v-if="lang.code === selectedLang" class="dropdown-check">✓</span>
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
// https://www.jsdelivr.com/package/npm/flag-icons-svg
import zhFlag from '../assets/flags/cn.svg'
import ukFlag from '../assets/flags/gb.svg'
const { locale } = useI18n()

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

const rootEl = ref(null)

const currentLangLabel = computed(() => {
    return supportedLanguages[selectedLang.value]?.label || 'Language'
})

const currentFlag = computed(() => {
    return supportedLanguages[selectedLang.value]?.flag
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function onDocumentClick(e) {
    if (rootEl.value && !rootEl.value.contains(e.target)) isOpen.value = false
}

function onKeydown(e) {
    if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
    document.addEventListener('click', onDocumentClick)
    document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
    document.removeEventListener('click', onDocumentClick)
    document.removeEventListener('keydown', onKeydown)
})

function switchLanguage(lang) {
    if (lang === locale.value) {
        isOpen.value = false
        return
    }
    // `<html lang>` is kept in sync by a watcher in `assets/lang/i18n.js`, so
    // there is nothing to update here beyond the locale itself.
    locale.value = lang
    localStorage.setItem('lang', lang)
    selectedLang.value = lang
    isOpen.value = false
}
</script>

<style scoped>
.language-switcher {
    position: relative;
    font-family: var(--font-sans);
}

.lang-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.6rem;
    background-color: transparent;
    color: var(--ink-600);
    border: 1px solid var(--border-1);
    border-radius: var(--r-pill);
    font: inherit;
    font-size: var(--fs-xs);
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.18s ease, background-color 0.18s ease, color 0.18s ease;
}

.lang-button:hover {
    background-color: var(--surface-1);
    border-color: var(--brand-200);
    color: var(--brand-600);
}

.lang-flag {
    width: 18px;
    height: 13px;
    border-radius: 2px;
    object-fit: cover;
    flex-shrink: 0;
}

.lang-chevron {
    width: 14px;
    height: 14px;
    color: var(--ink-400);
    flex-shrink: 0;
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 1200;
    background-color: var(--surface-0);
    border: 1px solid var(--border-1);
    border-radius: var(--r-md);
    min-width: 160px;
    padding: 4px;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.6rem;
    background: transparent;
    border: 0;
    border-radius: var(--r-sm);
    color: var(--ink-700);
    font: inherit;
    font-size: var(--fs-sm);
    text-align: left;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
}

.dropdown-item:hover {
    background-color: var(--brand-50);
    color: var(--brand-600);
}

.dropdown-check {
    margin-left: auto;
    color: var(--brand-500);
    font-size: 0.75rem;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.16s ease, transform 0.16s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
