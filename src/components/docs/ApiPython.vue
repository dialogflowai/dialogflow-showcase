<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { python } from '@codemirror/lang-python';
const langPython = python();
const host = window.location.host;
const pythonCode = ref(`import requests
import json

# Data preparation
main_flow_id = ""
session_id = ""
user_input_result = "Successful || Timeout"
user_input = "hello"
import_variables = [
    {"varName": "var1", "varType": "String", "varValue": "abc"},
    {"varName": "var2", "varType": "Number", "varValue": "123"}
]
user_intent = "IntentName"

# Build JSON data
data = {
    "mainFlowId": main_flow_id,
    "sessionId": session_id,
    "userInputResult": user_input_result,
    "userInput": user_input,
    "importVariables": import_variables,
    "userInputIntent": user_intent
}

# Send HTTP POST request
url = "http://localhost:5173/flow/answer"
headers = {"Content-Type": "application/json"}
response = requests.post(url, json=data, headers=headers)

# Check for successful response
if response.status_code == 200:
    # Deserialize JSON response
    response_data = response.json()
    
    # Print answers
    print("Answers:")
    for answer in response_data["data"]["answers"]:
        print(answer)
else:
    print("Error:", response.status_code)`)
</script>
<template>
    <h1>Python Code:</h1>
    <code-mirror basic :lang="langPython" v-model="pythonCode" />
</template>