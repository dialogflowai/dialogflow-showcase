<script setup>
import { ref } from 'vue'
import CodeMirror from 'vue-codemirror6';
import { json, jsonParseLinter } from '@codemirror/lang-json';
const langJson = json();
const linter = jsonParseLinter();
const host = window.location.host;
const requestBody = ref(`{
    "robotId": "",
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
const tableData = [{
    field: 'robotId',
    required: true,
    comment: 'Specify the robot id',
}, {
    field: 'mainFlowId',
    required: true,
    comment: 'Specify the main flow id that needs to be entered. You can find them on main flow list page',
}, {
    field: 'sessionId',
    required: true,
    comment: 'Represent an unique conversation or leave empty, backend will generate a new one.',
},
{
    field: 'userInputResult',
    required: true,
    comment: 'User input status, there are two options: Successful or Timeout(Usually used for phone calls)',
}, {
    field: 'userInput',
    required: true,
    comment: 'User input content, pass empty string when userInputResult equals Timeout',
}, {
    field: 'importVariables',
    required: false,
    comment: 'These are used by variables. For instance: Good morning, Mr. Jackson. The {jackson} here is the value of a variable',
}, {
    field: 'userInputIntent',
    required: false,
    comment: 'An intent representing a user input hit. if this field is absent, system will detect intent instead.',
}];
const res = ref(`{
	"status": 200,
	"data": {
		"answers": [{
			"text": "Successfully collected: 123",
			"answerType": "TextPlain"
		}, {
			"text": "Please enter some letters",
			"answerType": "TextPlain"
		}],
		"collectData": [{
			"var_name": "CollectionVar",
			"value": "123"
		}],
		"nextAction": "None",
		"extraData": {
			"externalLink": ""
		}
	},
	"err": null
}`)
</script>

<template>
    <h1>Program interface integration guide</h1>
    <p>This tool provides an API based on the HTTP protocol</p>
    <h3>Request url</h3>
    <pre class="bg-#eee">
            POST http://&lt;IP&gt;:&lt;port&gt;/flow/answer
        </pre>
    <h3>Request body</h3>
    <code-mirror basic :lang="langJson" :linter="linter" v-model="requestBody" />
    <h3>Field detail</h3>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="field" label="Field" width="170" />
        <el-table-column prop="required" label="Required" width="120" />
        <el-table-column prop="comment" label="Explanation" />
    </el-table>
    <h3>Response</h3>
    <code-mirror basic :lang="langJson" :linter="linter" v-model="res" />
    <h3>Request by curl</h3>
    <p></p>
</template>
