// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import ElementPlus from 'element-plus'
// import ElementTiptapPlugin from 'element-tiptap-vue3-fixed';
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './assets/lang/i18n'
// import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import Home from './components/Home.vue'
// import Intro from './components/Intro.vue'
import Doc from './components/docs/Index.vue'
// import Tutorial from './components/docs/Tutorial.vue'
import LlmChatNode from './components/docs/node/LlmChatNode.vue'

// import 'element-plus/dist/index.css'
// import 'element-tiptap-vue3-fixed/lib/style.css';

/*
const routes = [
  { path: '/', component: Home },
  { path: '/introduction', component: Intro },
  { path: '/docs', component: Doc },
//   { path: '/demo/:demo', component: SubFlow },
  { path: '/tutorial', component: Tutorial },
]
*/

export const routes = [
  { path: '/', component: Home },
  { path: '/docs', component: Doc },
  { path: '/docs/:docCatelog/:docDetail', name: 'docDetail', component: Doc },
  // { path: '/tutorial', component: Tutorial },
  { path: '/node/llmChatNode', component: LlmChatNode },
];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return { top: 0 }
//   }
// })

import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'virtual:uno.css'

/*
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
*/

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(router)
    app.use(i18n)
  },
)
