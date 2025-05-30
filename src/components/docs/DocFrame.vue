<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MaterialSymbolsLightKitesurfingOutlineRounded from '~icons/material-symbols-light/kitesurfing-outline-rounded'
import MaterialSymbolsHouseOutline from '~icons/material-symbols/house-outline'
import PhPlugsConnectedBold from '~icons/ph/plugs-connected-bold'
import MaterialSymbolsLightHandGestureOutlineRounded from '~icons/material-symbols-light/hand-gesture-outline-rounded'
import PhSelectionBackgroundDuotone from '~icons/ph/selection-background-duotone'
const route = useRoute()
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
                    <template #title>Home</template>
                </el-menu-item>
                <el-menu-item index="/doc">
                    <el-icon>
                        <MaterialSymbolsLightKitesurfingOutlineRounded />
                    </el-icon>
                    <template #title>Introductions</template>
                </el-menu-item>
                <el-sub-menu index="/doc/tutorial">
                    <template #title>
                        <el-icon>
                            <MaterialSymbolsLightHandGestureOutlineRounded />
                        </el-icon>
                        <span>Tutorials</span>
                    </template>
                    <el-menu-item index="/doc/tutorial/get-started">Get started</el-menu-item>
                    <el-menu-item index="/doc/tutorial/simplest-notification-robot">Simple notification robot</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/doc/api">
                    <template #title>
                        <el-icon>
                            <PhPlugsConnectedBold />
                        </el-icon>
                        <span>API integration</span>
                    </template>
                    <el-menu-item index="/doc/api/integration/overview">Overview</el-menu-item>
                    <el-menu-item index="/doc/api/integration/javascript">JavaScript</el-menu-item>
                    <el-menu-item index="/doc/api/integration/python">Python</el-menu-item>
                    <el-menu-item index="/doc/api/integration/java">Java</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/doc/node">
                    <template #title>
                        <el-icon>
                            <PhSelectionBackgroundDuotone />
                        </el-icon>
                        <span>Nodes</span>
                    </template>
                    <el-menu-item index="/doc/node/dialogNode">Dialog Node</el-menu-item>
                    <el-menu-item index="/doc/node/llmChatNode">LLM chat node</el-menu-item>
                    <el-menu-item index="/doc/node/knowledgeBaseAnswerNode">KB answer node</el-menu-item>
                    <el-menu-item index="/doc/node/conditionNode">Condition node</el-menu-item>
                    <el-menu-item index="/doc/node/gotoNode">Goto node</el-menu-item>
                    <el-menu-item index="/doc/node/collectNode">Collect node</el-menu-item>
                    <el-menu-item index="/doc/node/externalHttpNode">External HTTP node</el-menu-item>
                    <el-menu-item index="/doc/node/sendEmailNode">Send email node</el-menu-item>
                    <el-menu-item index="/doc/node/theEndNode">The end node</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
    </el-container>
</template>