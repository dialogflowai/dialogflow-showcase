<script setup>
import { ref } from 'vue'
import ApiOverall from './ApiOverall.vue';
import ApiJavaScript from './ApiJavaScript.vue';
import ApiPython from './ApiPython.vue';
import ApiJava from './ApiJava.vue';
const currentDoc = ref('ApiJavaScript')
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
    padding: 6px;
    margin-bottom: 5px;
}
</style>
<template>
    <el-row>
        <el-col :span="3">
            <div class="item" @click="currentDoc = 'ApiOverall'">Overall</div>
            <div class="item" @click="currentDoc = 'ApiJavaScript'">JavaScript</div>
            <div class="item" @click="currentDoc = 'ApiPython'">Python</div>
            <div class="item" @click="currentDoc = 'ApiJava'">Java</div>
        </el-col>
        <el-col :span="21" style="padding-left: 6px;">
            <keep-alive>
                <component :is="docs[currentDoc]"></component>
            </keep-alive>
        </el-col>
    </el-row>
</template>