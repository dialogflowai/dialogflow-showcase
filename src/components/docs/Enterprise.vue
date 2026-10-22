<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import SectionHeader from '../SectionHeader.vue'

const { t } = useI18n()

const tableData = ref([
  { feature: 'Intuitive nodes editor', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Dialog node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'LLM chat node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Knowledge base answer node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Conditions node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Collect node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Goto node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'External HTTP node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Send email node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'The end node', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Intent detection', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Knowledge base', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Variable support', community: 'Yes', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Create dialog flow by API', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'Data exporting / importing', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'SQL Server', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'SQLite', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'PostgreSQL', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: 'MySQL', community: 'No', enterprise: 'Yes', gov: 'Yes' },
  { feature: '审计/Audit', community: 'No', enterprise: 'No', gov: 'Yes' },
  { feature: '信创/Xinchuang (domestic IT stack)', community: 'No', enterprise: 'No', gov: 'Yes' },
  { feature: 'Licence', community: 'Apache license 2.0', enterprise: 'Apache license 2.0', gov: 'Apache license 2.0' },
  { feature: 'Technical Support', community: 'Github issues', enterprise: 'Email', gov: 'Email' },
  { feature: 'Project link', community: 'https://github.com/dialogflowai/dialogflow', enterprise: 'WIP', gov: '' }
]);

// The three editions are declared once, so adding a column means appending
// here instead of copying a `<el-table-column>` block and its cell rendering.
const editions = [
  { key: 'community', label: 'enterprise.community' },
  { key: 'enterprise', label: 'enterprise.enterprise' },
  { key: 'gov', label: 'enterprise.gov' },
];

// `Yes`/`No` are replaced with a labelled badge, `WIP`/`Coming soon` with a
// quieter one, and everything else (licences, support channels) stays plain
// text. An empty table cell reads as missing data, which is not the intent.
function cellKind(value) {
  if (value === 'Yes') return 'yes';
  if (value === 'No') return 'no';
  if (value === 'WIP' || value === 'Coming soon') return 'pending';
  return 'text';
}

function cellLabel(value) {
  if (value === 'Yes') return t('enterprise.included');
  if (value === 'No') return t('enterprise.notIncluded');
  return value;
}

// The last row carries download addresses rather than feature answers, and a
// URL is the only cell that should be clickable.
function isUrl(value) {
  return /^https?:\/\//i.test(value);
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

/* The feature column reads as prose, so it stays left-aligned while the answer
   columns are centred as a matrix. `class-name` puts a class on the `<td>`
   itself, which is the only hook el-table offers into its own markup. */
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

/* WIP / Coming soon are not "not included" — the edition simply has no address
   yet — so they stay quiet instead of borrowing the grey badge. */
.enterprise__badge--pending {
  background-color: transparent;
  color: var(--ink-500);
  font-weight: 500;
}

/* A project URL is far longer than a badge, so it wraps inside its cell rather
   than widening the table. `break-all` because a bare URL has no break point in
   a 170px column. */
.enterprise__link {
  font-size: var(--fs-xs);
  color: var(--brand-600);
  text-decoration: none;
  word-break: break-all;
}

.enterprise__link:hover {
  text-decoration: underline;
}
</style>

<template>
  <section class="section" id="enterprise">
    <div class="container">
      <SectionHeader :title="t('home.enterpriseTitle')" level="h2" />

      <div class="enterprise__table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="feature" :label="t('enterprise.feature')" class-name="col-feature" />
          <el-table-column
            v-for="edition in editions"
            :key="edition.key"
            :label="t(edition.label)"
            width="170"
          >
            <template #default="scope">
              <a
                v-if="isUrl(scope.row[edition.key])"
                class="enterprise__link"
                :href="scope.row[edition.key]"
                target="_blank"
                rel="noopener noreferrer"
              >{{ scope.row[edition.key] }}</a>
              <span
                v-else
                class="enterprise__badge"
                :class="`enterprise__badge--${cellKind(scope.row[edition.key])}`"
              >{{ cellLabel(scope.row[edition.key]) }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>
