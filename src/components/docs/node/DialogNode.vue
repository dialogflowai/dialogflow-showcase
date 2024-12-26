<script setup>
const tableData = [
    {
        name: 'Text',
        description: 'Which returned to the user, TextBot supports rich text.',
    },
    {
        name: 'Next step',
        description: '"Waiting for user response" means: once the text is returned, it waits until the user requests it again. "Goto next node" means: when the text is returned, it is executed directly to the next node.',
    },
];
</script>
<template>
    <h1>Screenshot of the settings page</h1>
    <img src="@/assets/dialogNodeSettings.png" />
    <h1>Fields explanation</h1>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Field name" width="180" />
        <el-table-column prop="description" label="Description" width="600" />
    </el-table>
</template>