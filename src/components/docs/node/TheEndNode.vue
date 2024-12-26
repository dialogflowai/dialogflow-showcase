<script setup>
const tableData = [
    {
        name: '',
        description: 'This node can only be placed at the end of the dialog flow, indicating the end point of the process.',
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