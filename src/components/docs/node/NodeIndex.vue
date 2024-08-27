<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router';
import NodesIntro from './NodesIntro.vue';
import LlmChatNode from './LlmChatNode.vue';
const props = defineProps({
    docDetail: String,
})
const docs = {
    NodesIntro,
    LlmChatNode,
}
console.log('props.docDetail', props.docDetail);
const currentDoc = ref(docs[props.docDetail] ? props.docDetail : 'NodesIntro')
const router = useRouter();
const g = (t) => {
    router.push({ name: 'docDetail', params: { docCatelog: 'NodeIndex', docDetail: t } });
}
</script>

<style scoped>
.item {
    cursor: pointer;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 15px;
    margin-bottom: 5px;
}

.activeBtn {
    background-color: #000;
    color: white;
    font-weight: bold;
    padding-left: 30px;
}

.inactiveBtn {
    background-color: #fff;
    color: black;
    font-weight: normal;
    padding-left: 15px;
}
</style>

<template>
    <el-row>
        <el-col :span="3">
            <!-- <div class="item" @click="currentDoc = 'ApiOverall'">Overall</div>
            <div class="item" @click="currentDoc = 'ApiJavaScript'">JavaScript</div>
            <div class="item" @click="currentDoc = 'ApiPython'">Python</div>
            <div class="item" @click="currentDoc = 'ApiJava'">Java</div> -->
            <div class="item" v-for="(button, index) in Object.keys(docs)" :key="index" @click="currentDoc = button;g(button)"
                :class="{ activeBtn: currentDoc === button, inactiveBtn: currentDoc !== button }">
                {{ button }}
            </div>
        </el-col>
        <el-col :span="21" style="padding-left: 6px;">
            <keep-alive>
                <component :is="docs[currentDoc]"></component>
            </keep-alive>
        </el-col>
    </el-row>
</template>