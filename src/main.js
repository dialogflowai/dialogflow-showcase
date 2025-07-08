import { createApp } from 'vue'
// import { ViteSSG } from 'vite-ssg'
import { createRouter, createWebHashHistory } from 'vue-router'
// import ElementPlus from 'element-plus'
// import ElementTiptapPlugin from 'element-tiptap-vue3-fixed';
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './assets/lang/i18n'
// import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import Home from './components/Home.vue'
// import Intro from './components/Intro.vue'
import DocFrame from './components/docs/DocFrame.vue'
import Doc from './components/docs/Index.vue'
// import Tutorial from './components/docs/Tutorial.vue'
import DocIntro from './components/docs/DocIntro.vue'
import ApiOverview from './components/docs/api/ApiOverview.vue'
import ApiJavaScript from './components/docs/api/ApiJavaScript.vue'
import ApiPython from './components/docs/api/ApiPython.vue'
import ApiJava from './components/docs/api/ApiJava.vue'
import GetStarted from './components/docs/tutorial/GetStarted.vue'
import SimpleNotifyRobot from './components/docs/tutorial/SimpleNotifyRobot.vue'
import NodesIntro from './components/docs/node/NodesIntro.vue'
import DialogNode from './components/docs/node/DialogNode.vue'
import LlmChatNode from './components/docs/node/LlmChatNode.vue'
import KnowledgeBaseAnswerNode from './components/docs/node/KnowledgeBaseAnswerNode.vue'
import ConditionNode from './components/docs/node/ConditionNode.vue'
import GotoNode from './components/docs/node/GotoNode.vue'
import CollectNode from './components/docs/node/CollectNode.vue'
import ExternalHttpNode from './components/docs/node/ExternalHttpNode.vue'
import SendEmailNode from './components/docs/node/SendEmailNode.vue'
import TheEndNode from './components/docs/node/TheEndNode.vue'
import NotFound from './components/404.vue'

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
  {
    path: '/doc', component: DocFrame, children: [
      { path: '', component: DocIntro },
      { path: '/doc/api/integration/overview', component: ApiOverview },
      { path: '/doc/api/integration/javascript', component: ApiJavaScript },
      { path: '/doc/api/integration/python', component: ApiPython },
      { path: '/doc/api/integration/java', component: ApiJava },
      { path: '/doc/tutorial/get-started', component: GetStarted },
      { path: '/doc/tutorial/simplest-notification-robot', component: SimpleNotifyRobot },
      { path: '/doc/node', component: NodesIntro },
      { path: '/doc/node/dialogNode', component: DialogNode },
      { path: '/doc/node/llmChatNode', component: LlmChatNode },
      { path: '/doc/node/knowledgeBaseAnswerNode', component: KnowledgeBaseAnswerNode },
      { path: '/doc/node/conditionNode', component: ConditionNode },
      { path: '/doc/node/gotoNode', component: GotoNode },
      { path: '/doc/node/collectNode', component: CollectNode },
      { path: '/doc/node/externalHttpNode', component: ExternalHttpNode },
      { path: '/doc/node/sendEmailNode', component: SendEmailNode },
      { path: '/doc/node/theEndNode', component: TheEndNode },
    ]
  },
  { path: '/doc/:docCatelog/:docDetail', name: 'docDetail', component: Doc },
  // { path: '/tutorial', component: Tutorial },
  // { path: '/node/llmChatNode', component: LlmChatNode },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

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

/*
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, initialState }) => {
    // install plugins etc.
    app.use(router)
    app.use(i18n)
  },
)
*/
