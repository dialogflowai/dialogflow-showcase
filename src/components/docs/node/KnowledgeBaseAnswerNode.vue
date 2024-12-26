<script setup>
const tableData = [
    {
        name: 'Knowledge recall thresholds',
        description: 'Find similarities between the user\'s input and the data in the knowledge base. The higher the number, the greater the match for the knowledge found.',
    },
    {
        name: 'Retrieve answer from',
        description: 'Queries from Q&A and document libraries are supported. You can set the query from the Q&A library or the document library first, or only the Q&A library or the document library query.',
    },
];
</script>
<template>
    <h1>Screenshot of the settings page</h1>
    <img src="@/assets/knowledgeBaseAnswerNodeSettings.png" />
    <h1>Fields explanation</h1>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Field name" width="180" />
        <el-table-column prop="description" label="Description" width="600" />
    </el-table>
</template>