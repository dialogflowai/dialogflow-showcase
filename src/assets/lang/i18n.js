import { watch } from "vue";
import { createI18n } from "vue-i18n";
// import messages from './lang.js'
import zh from './zh.js'
import en from './en.js'
// const language = ((navigator.language ? navigator.language : navigator.userLanguage) || 'en').toLowerCase()
function detectLocale() {
    const queryLang = new URLSearchParams(window.location.search).get('lang')
    if (queryLang && ['en', 'zh'].includes(queryLang)) return queryLang

    const savedLang = localStorage.getItem('lang')
    if (savedLang && ['en', 'zh'].includes(savedLang)) return savedLang

    const browserLang = ((navigator.language ? navigator.language : navigator.userLanguage) || 'en').toLowerCase()
    if (browserLang.includes('zh')) return 'zh'
    if (browserLang.includes('en')) return 'en'

    return 'en' // fallback
}
const i18n = createI18n({
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    locale: detectLocale(),
    // locale: language.split('-')[0] || 'en',
    // messages,
    messages: {
        zh,
        en
    }
})

// `index.html` hardcodes `<html lang="en">` and nothing ever updated it, so
// `:lang(zh)` could never match (see the CJK line-height rule in `base.css`)
// and screen readers pronounced Chinese content with an English voice.
// `legacy: false` means `locale` is a ref, so watch it directly; keeping this
// in the i18n module rather than a component means it holds for whatever route
// mounts first.
const syncDocumentLang = (locale) => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : 'en'
}

syncDocumentLang(i18n.global.locale.value)
watch(i18n.global.locale, syncDocumentLang)

export { syncDocumentLang }
export default i18n;