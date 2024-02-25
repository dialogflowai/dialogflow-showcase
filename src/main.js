import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import ElementPlus from 'element-plus'
// import ElementTiptapPlugin from 'element-tiptap-vue3-fixed';
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './assets/lang/i18n'
// import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import Home from './components/Home.vue'
import Intro from './components/Intro.vue'
import Doc from './components/docs/Index.vue'
import Tutorial from './components/docs/Tutorial.vue'

// import 'element-plus/dist/index.css'
// import 'element-tiptap-vue3-fixed/lib/style.css';

const routes = [
  { path: '/', component: Home },
  { path: '/introduction', component: Intro },
  { path: '/docs', component: Doc },
//   { path: '/demo/:demo', component: SubFlow },
  { path: '/tutorial', component: Tutorial },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'virtual:uno.css'

// createApp(App).mount('#app')
const app = createApp(App)

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // app.component(key, component)
// }

// app.use(ElementPlus)
// app.use(ElementTiptapPlugin)
app.use(router)
app.use(i18n)
// app.use(VueScrollTo)
app.mount('#app')
