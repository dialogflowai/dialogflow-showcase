<template>
  <el-row class="mid" id="howToUse">
    <el-col :span="6">
      <div class="black-line"></div>
    </el-col>
    <el-col :span="9">
      <h1 style="text-align: center;">We also provide enterprise edition</h1>
    </el-col>
    <el-col :span="6">
      <div class="black-line"></div>
    </el-col>
  </el-row>
  <div style="width: 50%; margin: auto;">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="feature" label="Feature"></el-table-column>
      <el-table-column label="Community" width="150">
        <template #default="scope">
          {{ getCellValue(scope.row.community) }}
        </template>
      </el-table-column>
      <el-table-column label="Enterprise" width="150">
        <template #default="scope">
          {{ getCellValue(scope.row.enterprise) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  { feature: 'Intuitive nodes editor', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Dialog node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'LLM chat node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Knowledge base answer node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Conditions node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Collect node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Goto node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'External HTTP node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Send email node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'The end node', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Intent detection', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Knowledge base', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Variable support', community: 'Yes', enterprise: 'Yes' },
  { feature: 'Create dialog flow by API', community: 'No', enterprise: 'Yes' },
  { feature: 'Data exporting / importing', community: 'No', enterprise: 'Yes' },
  { feature: 'SQL Server', community: 'No', enterprise: 'Yes' },
  { feature: 'SQLite', community: 'Partially supported', enterprise: 'Yes' },
  { feature: 'PostgreSQL', community: 'No', enterprise: 'Yes' },
  { feature: 'MySQL', community: 'No', enterprise: 'Yes' },
  { feature: 'Licence', community: 'Apache license 2.0', enterprise: 'Apache license 2.0' },
  { feature: 'Technical Support', community: 'Github issues', enterprise: 'Email' }
]);

function getCellValue(value) {
  if (value === 'Yes') {
    return '✔️';
  } else if (value === 'No') {
    return '';
  } else {
    return value;
  }
}
</script>

<style scoped>
.el-table .cell {
  text-align: center;
}

.mid {
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.black-line {
  height: 6px;
  background-color: black;
}

.title {
  font-weight: bold;
  font-size: 18px;
}
</style>