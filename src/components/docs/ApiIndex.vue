<script setup>
import { ref } from 'vue'
import ApiOverall from './ApiOverall.vue';
import ApiJavaScript from './ApiJavaScript.vue';
import ApiPython from './ApiPython.vue';
import ApiJava from './ApiJava.vue';
const currentDoc = ref('ApiOverall')
const docs = {
    ApiOverall,
    ApiJavaScript,
    ApiPython,
    ApiJava,
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
            <div class="item" v-for="(button, index) in Object.keys(docs)" :key="index" @click="currentDoc = button"
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