<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { javascript } from '@codemirror/lang-javascript';
const langJs = javascript();
const host = window.location.host;
const requestBody = ref(`const postData = {
  robotId: "",
  mainFlowId: "",
  sessionId: "",
  userInputResult: "Successful || Timeout",
  userInput: "hello",
  importVariables: [
    {
      varName: "var1",
      varType: "String",
      varValue: "abc"
    },
    {
      varName: "var2",
      varType: "Number",
      varValue: 123
    }
  ],
  userInputIntent: "IntentName"
};`)
const js = ref(`fetch('http://localhost:5173/flow/answer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => {
  if (data.status === 200) {
    console.log("Answers:", data.data.answers);
  } else {
    console.error("Error:", data.err);
  }
})
.catch(error => {
  console.error("Error:", error);
});`)
</script>

<template>
  <h1>Generate request body</h1>
  <code-mirror basic :lang="langJs" v-model="requestBody" />
  <h1>JavaScript request code</h1>
  <code-mirror basic :lang="langJs" v-model="js" />
</template>
