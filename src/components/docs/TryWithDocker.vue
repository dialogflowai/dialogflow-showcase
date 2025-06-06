<script setup>
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

const { t, tm } = useI18n()
const md = new MarkdownIt()

import { winScrollTo } from '../../assets/tools.js'

const itfn = () => {
  winScrollTo(document.getElementById('functionNodes'))
}

const htu = () => {
  winScrollTo(document.getElementById('howToUse'))
}
</script>

<template>
  <div class="dcontainer">
    <section class="docker">
      <h1>{{ t('giveTry.title') }}</h1>
      <p v-html="md.render(t('giveTry.desc'))" />
      <div class="button-group">
        <router-link to="/doc/tutorial/get-started">
          <button type="button">{{ t('giveTry.btnText') }}</button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dcontainer {
  background-color: aliceblue;
}

.docker {
  margin: 5% auto;
  padding: 20px 30px;
  max-width: 720px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.note {
  color: gray;
  font-size: 14px;
}

.docker code {
  background: #f2f2f2;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.button-group {
  margin-top: 30px;
  text-align: center;
}

.button-group button {
  background-color: white;
  border-radius: 30px;
  border: 2px solid #000;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s ease;
}

.button-group button:hover {
  background-color: #000;
  color: white;
}
</style>
