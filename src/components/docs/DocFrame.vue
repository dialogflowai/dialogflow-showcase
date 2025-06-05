<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
import MaterialSymbolsLightKitesurfingOutlineRounded from '~icons/material-symbols-light/kitesurfing-outline-rounded'
import MaterialSymbolsHouseOutline from '~icons/material-symbols/house-outline'
import PhPlugsConnectedBold from '~icons/ph/plugs-connected-bold'
import MaterialSymbolsLightHandGestureOutlineRounded from '~icons/material-symbols-light/hand-gesture-outline-rounded'
import PhSelectionBackgroundDuotone from '~icons/ph/selection-background-duotone'
const route = useRoute()
const { t, tm } = useI18n()
const isCollapse = ref(false)
</script>
<style scoped>
.toggle-button {
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>
<template>
    <el-container style="min-height: 100vh">
        <el-aside :width="isCollapse ? '65px' : '220px'" style="background-color: #545c64">
            <div class="toggle-button" @click="isCollapse = !isCollapse">
                {{ isCollapse ? '&gt;&gt;&gt;' :
                    '&lt;&lt;&lt;' }}
            </div>
            <el-menu active-text-color="#409Eff" background-color="#545c64" text-color="#fff" :collapse="isCollapse"
                :collapse-transition="false" router :default-active="route.path">
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
        </el-aside>
        <el-main><router-view></router-view></el-main>
    </el-container>
</template>