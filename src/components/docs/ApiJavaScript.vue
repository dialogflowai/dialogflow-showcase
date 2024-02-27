<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { json, jsonParseLinter } from '@codemirror/lang-json';
const langJson = json();
const linter = jsonParseLinter();
const host = window.location.host;
const requestBody = ref(`{
    "mainFlowId": "",
    "sessionId": "",
    "userInputResult": "Successful || Timeout",
    "userInput": "hello",
    "importVariables": [
        {
            "varName": "var1",
            "varType": "String",
            "varValue": "abc"
        },
        {
            "varName": "var2",
            "varType": "Number",
            "varValue": "123"
        }
    ],
    "userInputIntent": "IntentName"
}`)
</script>
<template>
    <h1>Generate request body</h1>
    <code-mirror basic :lang="langJson" :linter="linter" v-model="requestBody" />
</template>