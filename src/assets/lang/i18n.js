import { createI18n } from "vue-i18n";
import messages from './lang.js'
// const language = ((navigator.language ? navigator.language : navigator.userLanguage) || 'en').toLowerCase()
const i18n = createI18n({
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    // locale: language.split('-')[0] || 'en',
    locale: 'en',
    messages,
})

export default i18n;