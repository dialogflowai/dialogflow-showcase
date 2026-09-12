<script setup>
// import { useRouter } from 'vue-router';
// import { useI18n } from 'vue-i18n'
// import VueScrollTo from 'vue-scrollto';
import { useI18n } from 'vue-i18n'
import IntroDoc from './docs/IntroDoc.vue'
import BiGithub from '~icons/bi/github'

const { t } = useI18n()
</script>

<style scoped>
.download {
  padding-block: var(--section-y) 0;
}

.download__card {
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding: clamp(1.5rem, 1.1rem + 2vw, 2.75rem);
  background-color: var(--surface-0);
  border: 1px solid var(--border-1);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-md);
}

.download__card h2 {
  font-size: var(--fs-h1);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.download__card p {
  color: var(--ink-600);
  line-height: 1.75;
}

.download__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
</style>

<template>
  <!-- The 500px photo hero with a 50%-black overlay is gone. It was the third
       competing "hero" treatment on the page and its headline was hardcoded
       English, so it stayed English on the Chinese site. The copy now uses the
       `home.dlTitle` / `home.dl1` / `home.dl2` keys, which already existed in
       both locales and were never wired up. -->
  <section class="download container" id="download">
    <div class="download__card">
      <h2>{{ t('home.dlTitle') }}</h2>
      <p>{{ t('home.dl1') }}</p>
      <p v-html="t('home.dl2')"></p>
      <div class="download__actions">
        <a class="btn btn-primary" href="https://github.com/dialogflowai/dialogflow/releases" target="_blank"
          rel="noopener">
          <BiGithub />Github Releases
        </a>
        <a class="btn btn-ghost" href="mailto:dialogflow@yeah.net">dialogflow@yeah.net</a>
      </div>
    </div>
  </section>

  <IntroDoc />
</template>
