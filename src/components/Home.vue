<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

import SiteNav from './SiteNav.vue';
import TryWithDocker from './docs/TryWithDocker.vue'
import Why from './docs/Why.vue'
import NodesIntro from './docs/node/NodesIntro.vue'
import HowToUse from './docs/HowToUse.vue'
import Intro from './Intro.vue'
import Enterprise from './docs/Enterprise.vue';
import pkg from '../../package.json'
import BiDownload from '~icons/bi/download'
import BiGithub from '~icons/bi/github'
import BiFiletypeDoc from '~icons/bi/filetype-doc'

const { t } = useI18n()

// Read straight from package.json rather than fetching `version.json`:
// there is no `public/version.json`, so that request fell through to the SPA
// HTML fallback, `response.json()` threw, and the raw SyntaxError text ended
// up on the page. This also keeps the shown version in sync forever.
const currentVersion = ref(pkg.version)

const REPO = 'https://github.com/dialogflowai/dialogflow'
</script>

<style scoped>
/* --- Hero ------------------------------------------------------------- */
/* The old hero was a blue-bubbles JPG with a fixed-colour flow diagram PNG
   layered on top, set in 2vw/5vw type. The raster had to go: it hardcoded a
   palette that no longer matches, and the flow PNG is a fixed-colour graphic
   (charcoal + teal + coral) that clashes with indigo. */
.hero {
  position: relative;
  overflow: hidden;
  background: var(--grad-brand);
  color: #fff;
  padding-block: clamp(3rem, 2rem + 6vw, 6rem) clamp(3.5rem, 2rem + 7vw, 7rem);
}

/* Soft light blooms instead of a flat fill — gives the gradient some depth
   without shipping an image. */
.hero::before,
.hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero::before {
  width: 620px;
  height: 620px;
  top: -280px;
  right: -180px;
  background: radial-gradient(circle, rgb(255 255 255 / 0.22) 0%, transparent 70%);
}

.hero::after {
  width: 520px;
  height: 520px;
  bottom: -300px;
  left: -160px;
  background: radial-gradient(circle, rgb(255 255 255 / 0.14) 0%, transparent 70%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.hero__title {
  font-size: var(--fs-display);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: #fff;
  margin: 1.1rem 0 1rem;
  text-wrap: balance;
}

.hero__lead {
  font-size: clamp(1.125rem, 1rem + 0.7vw, 1.5rem);
  line-height: 1.5;
  color: rgb(255 255 255 / 0.94);
  margin: 0 0 0.75rem;
}

.hero__sub {
  font-size: var(--fs-body);
  line-height: 1.7;
  color: rgb(255 255 255 / 0.8);
  margin: 0 0 2rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.hero__version {
  margin: 1.5rem 0 0;
  font-size: var(--fs-xs);
  color: rgb(255 255 255 / 0.8);
}

/* --- Demo recording --------------------------------------------------- */
/* Was a `background-size: cover` background-image on a 400px box, which crops
   an arbitrary slice out of a screen recording — you could not tell what the
   recording showed. As a real image it keeps its own aspect ratio. */
.demo {
  padding-block: var(--section-y) 0;
}

.demo .title {
  font-size: var(--fs-h2);
  font-weight: 700;
  color: var(--ink-900);
  text-align: center;
  max-width: 720px;
  margin: 0 auto 2rem;
  text-wrap: balance;
}

.demo__frame {
  max-width: 960px;
  margin-inline: auto;
  padding: clamp(0.5rem, 0.3rem + 0.8vw, 0.9rem);
  background-color: var(--surface-1);
  border: 1px solid var(--border-1);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-lg);
}

.demo__frame img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--r-md);
}

/* --- Footer ----------------------------------------------------------- */
.site-footer {
  margin-top: var(--section-y);
  padding-block: clamp(2rem, 1.5rem + 2vw, 3rem);
  background-color: var(--surface-1);
  border-top: 1px solid var(--border-1);
  color: var(--ink-500);
  font-size: var(--fs-sm);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;
  justify-content: space-between;
  align-items: flex-start;
}

.site-footer p {
  margin: 0 0 0.5rem;
  max-width: 46ch;
  line-height: 1.7;
}

.site-footer__brand {
  font-weight: 700;
  color: var(--ink-800);
}

.site-footer__version {
  font-variant-numeric: tabular-nums;
}
</style>

<template>
  <SiteNav />

  <section class="hero">
    <div class="container hero__inner">
      <span class="chip">{{ t('home.heroEyebrow') }}</span>
      <h1 class="hero__title">{{ t('home.headerTitle1') }}</h1>
      <p class="hero__lead">{{ t('home.headerTitle2') }}</p>
      <p class="hero__sub">{{ t('home.headerTitle3') }}</p>

      <div class="hero__actions">
        <a class="btn btn-onbrand" :href="`${REPO}/releases`" target="_blank" rel="noopener">
          <BiDownload />{{ t('home.headerDownloadBtnText') }}
        </a>
        <a class="btn btn-onbrand-ghost" :href="REPO" target="_blank" rel="noopener">
          <BiGithub />Github
        </a>
        <router-link class="btn btn-onbrand-ghost" to="/doc">
          <BiFiletypeDoc />{{ t('home.headerDocBtnText') }}
        </router-link>
      </div>

      <p class="hero__version">
        {{ t('home.headerTheLatestVersion') }}: v{{ currentVersion }}
      </p>
    </div>
  </section>

  <section class="demo container">
    <p class="title">{{ t('home.slogan') }}</p>
    <div class="demo__frame">
      <img src="../assets/demo1.gif" :alt="t('home.heroShotAlt')" loading="lazy" width="960" height="600" />
    </div>
  </section>

  <TryWithDocker />
  <Why />
  <NodesIntro />
  <HowToUse />
  <Intro />
  <Enterprise />

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <p class="site-footer__brand">DialogFlowAI</p>
        <p class="site-footer__version">{{ t('footer.version') }}: {{ currentVersion }}</p>
      </div>
      <div>
        <p>
          {{ t('footer.questions') }}
          <a href="mailto:dialogflow@yeah.net">dialogflow@yeah.net</a>
          {{ t('footer.orCreate') }}
          <a :href="`${REPO}/discussions`" target="_blank" rel="noopener">{{ t('footer.discussion') }}</a>.
        </p>
        <p class="muted">
          {{ t('footer.credits') }}
          <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a> &amp;
          <a href="https://picsum.photos" target="_blank" rel="noopener">Picsum</a>,
          {{ t('footer.iconsBy') }}
          <a href="https://www.flaticon.com/" target="_blank" rel="noopener">Flaticon</a>.
        </p>
      </div>
    </div>
  </footer>
</template>
