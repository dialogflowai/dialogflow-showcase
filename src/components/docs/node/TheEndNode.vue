<script setup>
const tableData = [
    {
        name: 'Chat model',
        description: 'The model using by this node, you can change this on settings page.',
    },
    {
        name: 'Prompt',
        description: 'Define LLM behavior.',
    },
    {
        name: 'Context length',
        description: 'How many chat history will be appended to prompt.',
    },
    {
        name: 'Exit condition',
        description: 'Define how to exit this chat node. There are three options: Intent (Exit when matching on intent), Special input (Once user input a special input then exit this node), Max chat times (Stay in this node until reach max chat times).',
    },
    {
        name: 'Timeout',
        description: 'You can override HTTP connection settings.',
    },
    {
        name: 'When timeout then',
        description: 'There are three options: Goto next node (if HTTP request timeout, goto next node), Response an alternate text (return another sentence instead of LLM response), Do nothing(Nothing will be returned to user and then waiting user\'s next inputs).',
    },
];
</script>
<template>
    <h1>Screenshot of the settings page</h1>
    <img src="@/assets/endNodeSettings.png" />
    <h1>Fields explanation</h1>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Field name" width="180" />
        <el-table-column prop="description" label="Description" width="600" />
    </el-table>
</template>