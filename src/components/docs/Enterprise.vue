<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import SectionHeader from '../SectionHeader.vue'

const { t } = useI18n()

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

// `✔️` and `''` are replaced with a labelled badge and a muted dash. An empty
// table cell reads as missing data; a dash reads as "deliberately not
// included", which is what is meant here.
function cellKind(value) {
  if (value === 'Yes') return 'yes';
  if (value === 'No') return 'no';
  return 'text';
}

function cellLabel(value) {
  if (value === 'Yes') return t('enterprise.included');
  if (value === 'No') return t('enterprise.notIncluded');
  return value;
}
</script>

<style scoped>
.enterprise__table {
  max-width: 860px;
  margin-inline: auto;
}

/* `:deep()` is required: the cells are rendered by el-table's own template,
   which does not carry this component's `data-v-*` attribute, so a plain
   descendant selector compiles to `.cell[data-v-x]` and matches nothing —
   which is how the centring rule that used to live here silently did nothing. */
:deep(.el-table .cell) {
  text-align: center;
}

/* The feature column reads as prose, so it stays left-aligned while the two
   answer columns are centred as a matrix. `class-name` puts a class on the
   `<td>` itself, which is the only hook el-table offers into its own markup. */
:deep(.el-table .col-feature .cell) {
  text-align: left;
  font-weight: 500;
  color: var(--ink-800);
}

.enterprise__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3.25rem;
  padding: 0.15rem 0.55rem;
  border-radius: var(--r-pill);
  font-size: var(--fs-xs);
  font-weight: 600;
}

.enterprise__badge--yes {
  background-color: var(--brand-50);
  color: var(--brand-700);
}

.enterprise__badge--no {
  background-color: var(--surface-2);
  color: var(--ink-400);
}
</style>

<template>
  <section class="section" id="enterprise">
    <div class="container">
      <SectionHeader :title="t('home.enterpriseTitle')" level="h2" />

      <div class="enterprise__table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="feature" :label="t('enterprise.feature')" class-name="col-feature" />
          <el-table-column :label="t('enterprise.community')" width="150">
            <template #default="scope">
              <span class="enterprise__badge" :class="`enterprise__badge--${cellKind(scope.row.community)}`">
                {{ cellLabel(scope.row.community) }}
              </span>
            </template>
          </el-table-column>
          <el-table-column :label="t('enterprise.enterprise')" width="150">
            <template #default="scope">
              <span class="enterprise__badge" :class="`enterprise__badge--${cellKind(scope.row.enterprise)}`">
                {{ cellLabel(scope.row.enterprise) }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>
