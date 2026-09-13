<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import FunctionNodeCard from './FunctionNodeCard.vue'
import SectionHeader from '../../SectionHeader.vue'

const { t, tm } = useI18n()
const md = new MarkdownIt()
const nodesIntro = computed(() => tm(`nodesIntro.nodes`) || [])
</script>

<style scoped>
/* Was `el-row justify="center"` + `el-col :span="16"`, which at 1440px threw
   away a third of the width on each side and left the cards narrower than the
   text they contained. */
.nodes-intro__list {
  max-width: 900px;
  margin-inline: auto;
}
</style>

<template>
    <section class="section" id="nodes">
        <SectionHeader :title="t('nodesIntro.title')" level="h2" />

        <div class="nodes-intro__list">
            <FunctionNodeCard :img="node.img" :title="node.name" :link="node.link" v-for="node in nodesIntro"
                :key="node.name">
                <p v-html="md.render(node.desc)" />
            </FunctionNodeCard>

            <FunctionNodeCard img="" :title="t('nodesIntro.yourOwnNodeTitle')"
                link="https://github.com/dialogflowai/dialogflow/discussions">
                <div v-html="md.render(t('nodesIntro.yourOwnNode'))" />
            </FunctionNodeCard>
        </div>
    </section>
</template>
