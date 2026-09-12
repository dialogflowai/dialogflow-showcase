<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
import SiteNav from '../SiteNav.vue'
import MaterialSymbolsLightKitesurfingOutlineRounded from '~icons/material-symbols-light/kitesurfing-outline-rounded'
import MaterialSymbolsHouseOutline from '~icons/material-symbols/house-outline'
import PhPlugsConnectedBold from '~icons/ph/plugs-connected-bold'
import MaterialSymbolsLightHandGestureOutlineRounded from '~icons/material-symbols-light/hand-gesture-outline-rounded'
import PhSelectionBackgroundDuotone from '~icons/ph/selection-background-duotone'
import BiChevronLeft from '~icons/bi/chevron-left'
import BiChevronRight from '~icons/bi/chevron-right'

const route = useRoute()
const { t, tm } = useI18n()

const isCollapse = ref(false)

// The sidebar costs 220px of a phone's width, so below 900px we start it
// collapsed (icons only) rather than dropping navigation entirely.
let mq = null
const applyViewport = (e) => { isCollapse.value = e.matches }
onMounted(() => {
    mq = window.matchMedia('(max-width: 900px)')
    applyViewport(mq)
    mq.addEventListener('change', applyViewport)
})
onUnmounted(() => mq && mq.removeEventListener('change', applyViewport))
</script>

<style scoped>
.doc-shell {
    display: flex;
    /* `flex-start` is required for the sticky sidebar to work: with the default
       `stretch`, the aside would already be as tall as the content column and
       `position: sticky` would have nothing left to travel. */
    align-items: flex-start;
}

.doc-sidebar {
    position: sticky;
    top: var(--nav-h);
    flex-shrink: 0;
    width: 240px;
    height: calc(100vh - var(--nav-h));
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 0.75rem 0 2rem;
    background-color: var(--surface-1);
    border-right: 1px solid var(--border-1);
    transition: width 0.2s ease;
}

.doc-sidebar.is-collapsed {
    width: 68px;
}

.doc-sidebar__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    width: calc(100% - 1rem);
    margin: 0 0.5rem 0.6rem;
    padding: 0.4rem;
    font-size: var(--fs-xs);
    font-weight: 600;
    color: var(--ink-500);
    background-color: transparent;
    border: 1px solid var(--border-1);
    border-radius: var(--r-sm);
    cursor: pointer;
    transition: color 0.18s ease, background-color 0.18s ease;
}

.doc-sidebar__toggle:hover {
    color: var(--brand-600);
    background-color: var(--surface-0);
}

.doc-sidebar__toggle svg {
    width: 1.1em;
    height: 1.1em;
}

/* --- Element Plus menu, retuned ---------------------------------------
   The three props this menu used to carry on the element itself
   (`active-text-color="#409Eff"`, `background-color="#545c64"`,
   `text-color="#fff"`) are gone. Element Plus turns those into *inline* CSS
   custom properties, and inline declarations outrank every stylesheet — no
   amount of theming could have overridden them from here. */
.doc-sidebar :deep(.el-menu) {
    --el-menu-bg-color: transparent;
    --el-menu-text-color: var(--ink-600);
    --el-menu-active-color: var(--brand-600);
    --el-menu-hover-bg-color: var(--brand-50);
    --el-menu-item-height: 42px;
    --el-menu-sub-item-height: 38px;
    --el-menu-border-color: transparent;
    border-right: 0;
    padding: 0 0.5rem;
}

.doc-sidebar :deep(.el-menu-item),
.doc-sidebar :deep(.el-sub-menu__title) {
    border-radius: var(--r-sm);
    font-size: var(--fs-sm);
    /* Element Plus fixes the item height and sets `white-space: nowrap`, so
       the longer labels ("Creating a notification bot") were clipped at the
       sidebar edge with no ellipsis and no way to read them. Let them wrap. */
    height: auto;
    min-height: var(--el-menu-item-height);
    line-height: 1.4;
    padding-block: 0.55rem;
}

.doc-sidebar :deep(.el-menu-item:hover),
.doc-sidebar :deep(.el-sub-menu__title:hover) {
    color: var(--brand-600);
}

/* Element Plus's vertical menu only recolours the label on the active item;
   the pill background has to be drawn here. */
.doc-sidebar :deep(.el-menu-item.is-active) {
    background-color: var(--brand-50);
    color: var(--brand-600);
    font-weight: 600;
}

/* Sub-items are intentionally tight-set against their parent group. */
.doc-sidebar :deep(.el-menu--inline) {
    padding-left: 0;
}

.doc-sidebar :deep(.el-sub-menu .el-menu-item) {
    padding-left: 44px !important;
    min-width: 0;
}

/* --- Content column ---------------------------------------------------- */
.doc-main {
    flex: 1;
    /* Without `min-width: 0` a flex child refuses to shrink below its
       content's intrinsic width, so wide tables and code blocks would push
       the whole page into horizontal scroll instead of scrolling locally. */
    min-width: 0;
}

@media (max-width: 900px) {
    .doc-sidebar {
        width: 68px;
    }
}
</style>

<template>
    <SiteNav />
    <div class="doc-shell">
        <aside class="doc-sidebar" :class="{ 'is-collapsed': isCollapse }">
            <button class="doc-sidebar__toggle" type="button" :aria-expanded="!isCollapse"
                @click="isCollapse = !isCollapse">
                <BiChevronRight v-if="isCollapse" />
                <BiChevronLeft v-else />
                <span v-if="!isCollapse">{{ $t('nav.docs') }}</span>
            </button>
            <el-menu :collapse="isCollapse" :collapse-transition="false" router :default-active="route.path">
                <el-menu-item index="/">
                    <el-icon>
                        <MaterialSymbolsHouseOutline />
                    </el-icon>
                    <template #title>{{ $t('doc.menu.home') }}</template>
                </el-menu-item>
                <el-menu-item index="/doc">
                    <el-icon>
                        <MaterialSymbolsLightKitesurfingOutlineRounded />
                    </el-icon>
                    <template #title>{{ $t('doc.menu.intro') }}</template>
                </el-menu-item>
                <el-sub-menu index="/doc/tutorial">
                    <template #title>
                        <el-icon>
                            <MaterialSymbolsLightHandGestureOutlineRounded />
                        </el-icon>
                        <span>{{ $t('doc.menu.tutorials.title') }}</span>
                    </template>
                    <el-menu-item index="/doc/tutorial/get-started">{{ $t('doc.menu.tutorials.getStarted') }}</el-menu-item>
                    <el-menu-item index="/doc/tutorial/simplest-notification-robot">{{ $t('doc.menu.tutorials.simplestNotificationRobot') }}</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/doc/api">
                    <template #title>
                        <el-icon>
                            <PhPlugsConnectedBold />
                        </el-icon>
                        <span>{{ $t('doc.menu.integration.title') }}</span>
                    </template>
                    <el-menu-item index="/doc/api/integration/overview">{{ $t('doc.menu.integration.overview') }}</el-menu-item>
                    <el-menu-item index="/doc/api/integration/javascript">JavaScript</el-menu-item>
                    <el-menu-item index="/doc/api/integration/python">Python</el-menu-item>
                    <el-menu-item index="/doc/api/integration/java">Java</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/doc/node">
                    <template #title>
                        <el-icon>
                            <PhSelectionBackgroundDuotone />
                        </el-icon>
                        <span>{{ t('doc.menu.nodes.title') }}</span>
                    </template>
                    <el-menu-item index="/doc/node/dialogNode">{{ t('doc.menu.nodes.dialogNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/llmChatNode">{{ t('doc.menu.nodes.llmChatNOde') }}</el-menu-item>
                    <el-menu-item index="/doc/node/knowledgeBaseAnswerNode">{{ t('doc.menu.nodes.kbAnswerNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/conditionNode">{{ t('doc.menu.nodes.conditionNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/gotoNode">{{ t('doc.menu.nodes.gotoNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/collectNode">{{ t('doc.menu.nodes.collectNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/externalHttpNode">{{ t('doc.menu.nodes.externalHttpNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/sendEmailNode">{{ t('doc.menu.nodes.sendEmailNode') }}</el-menu-item>
                    <el-menu-item index="/doc/node/theEndNode">{{ t('doc.menu.nodes.theEndNode') }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </aside>
        <!-- `.doc-content` is the hook the global `doc-prose.css` sheet styles.
             It is the single reason most doc content components needed no
             changes at all. -->
        <main class="doc-main">
            <div class="doc-content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
