<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import ApiIndex from './api/ApiIndex.vue';
import FlowEditDoc from './flow/FlowEdit.vue';
import HowToUseDoc from './HowToUse.vue';
import VariableDoc from './var/VarDoc.vue';
import VariableHttpDoc from './var/VarHttpDoc.vue';
import NodeIndex from './node/NodeIndex.vue';
import { useI18n } from 'vue-i18n'
import BiChatSquareDots from '~icons/bi/chat-square-dots'
import SolarDownloadOutline from '~icons/solar/download-outline'
const { t, tm, rt } = useI18n();
const route = useRoute();
console.log('route', route);
const router = useRouter();
const docCatelog = route.params.docCatelog
const docDetail = route.params.docDetail
console.log('docCatelog', docCatelog);
console.log('docDetail', docDetail);
const docs = {
    ApiIndex,
    FlowEditDoc,
    HowToUseDoc,
    VariableDoc,
    VariableHttpDoc,
    NodeIndex,
}
const currentDoc = ref(docs[docCatelog] ? docCatelog : 'ApiIndex')
function goBack() {
    router.push('/');
}
const menuItemClassObject = computed(() => ({
    item: currentDoc.value === '',
    itemSelected: false,
}))
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
    margin-left: 10px;
}

.item {
    color: black;
    background-color: white;
    padding: 10px;
    border-bottom: #ccc solid 1px;
    cursor: pointer;
}

.item-bg {
    color: white;
    background-color: #a0cfff;
}
</style>
<template>
    <el-page-header :title="t('common.back')" @back="goBack">
        <template #content>
            <span class="text-large font-600 mr-3"> Dialog flow chat bot tool usage documents </span>
        </template>
    </el-page-header>
    <br />
    <el-menu default-active="1" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="currentDoc = 'ApiIndex'">API integrate guide</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Dialog flow</template>
            <el-menu-item index="2-1">Main flow</el-menu-item>
            <el-menu-item index="2-2">Sub flow</el-menu-item>
            <el-menu-item index="2-3" @click="currentDoc = 'NodeIndex'">Nodes</el-menu-item>
            <!-- <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
        </el-sub-menu>
        <el-menu-item index="3">Intent</el-menu-item>
        <el-menu-item index="4">Variable</el-menu-item>
        <el-menu-item index="5">External HTTP API</el-menu-item>
        <el-menu-item index="6">Settings</el-menu-item>
    </el-menu>
    <keep-alive>
        <component :is="docs[currentDoc]" :docDetail="docDetail"></component>
    </keep-alive>
</template>