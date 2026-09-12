<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { scrollToId } from '../assets/tools.js'
import BiGithub from '~icons/bi/github'
import BiDownload from '~icons/bi/download'
import BiList from '~icons/bi/list'
import BiX from '~icons/bi/x'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Sections live on the landing page only. They are scrolled to by id rather
// than linked as `#anchor` URLs because the app uses hash-history routing:
// the router already owns the fragment, so a native anchor would produce
// `/#/#features` and the browser's own fragment handling would fight
// vue-router's scrollBehavior.
const sections = [
  { label: 'nav.features', id: 'features' },
  { label: 'nav.nodes', id: 'nodes' },
  { label: 'nav.howToUse', id: 'howToUse' },
]

const menuOpen = ref(false)
const scrolled = ref(false)

function goToSection(id) {
  menuOpen.value = false
  const scroll = () => scrollToId(id)
  if (route.path !== '/') {
    // The section does not exist yet — mount the landing page first, then wait
    // a tick for it to render before looking the element up.
    router.push('/').then(() => requestAnimationFrame(scroll))
  } else {
    scroll()
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 4
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Leaving the landing page with the mobile drawer open would otherwise keep it
// open over the docs.
watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="site-nav" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <div class="container site-nav__inner">
      <router-link to="/" class="brand" @click="menuOpen = false">
        <!-- Inline SVG rather than an image asset: `dialogflow-en.png` is a
             screenshot of the flow editor, not a wordmark, and the one raster
             logo in the repo is a fixed-colour graphic that clashes with the
             indigo palette. `currentColor` means this inherits any theme. -->
        <svg class="brand__mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="2" width="6" height="4.5" rx="1.6" fill="currentColor" />
          <rect x="1.5" y="17.5" width="6" height="4.5" rx="1.6" fill="currentColor" />
          <rect x="16.5" y="17.5" width="6" height="4.5" rx="1.6" fill="currentColor" />
          <path d="M12 6.5v5.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M4.5 17.5v-3.6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3.6" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <span class="brand__name">DialogFlowAI</span>
      </router-link>

      <button class="site-nav__toggle" type="button" :aria-expanded="menuOpen"
        :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')" @click="menuOpen = !menuOpen">
        <BiX v-if="menuOpen" />
        <BiList v-else />
      </button>

      <nav class="site-nav__links">
        <a v-for="s in sections" :key="s.id" href="#" class="site-nav__link"
          @click.prevent="goToSection(s.id)">{{ t(s.label) }}</a>
        <router-link to="/doc" class="site-nav__link">{{ t('nav.docs') }}</router-link>
        <a class="site-nav__link" href="https://github.com/dialogflowai/dialogflow" target="_blank"
          rel="noopener">
          <BiGithub class="site-nav__icon" />{{ t('nav.github') }}
        </a>
      </nav>

      <div class="site-nav__actions">
        <LanguageSwitcher />
        <a class="btn btn-primary btn-sm site-nav__cta" href="https://github.com/dialogflowai/dialogflow/releases"
          target="_blank" rel="noopener">
          <BiDownload class="site-nav__icon" />{{ t('nav.download') }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgb(255 255 255 / 0.85);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

/* Blur is progressive enhancement — on its own the translucent white is
   already legible, so browsers without backdrop-filter lose nothing but
   polish. */
@supports (backdrop-filter: blur(8px)) {
  .site-nav {
    backdrop-filter: saturate(180%) blur(12px);
  }
}

.site-nav.is-scrolled {
  border-bottom-color: var(--border-1);
  box-shadow: var(--shadow-xs);
}

.site-nav__inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--ink-900);
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
  text-decoration: none;
  flex-shrink: 0;
}

.brand:hover {
  color: var(--ink-900);
  text-decoration: none;
}

.brand__mark {
  width: 26px;
  height: 26px;
  color: var(--brand-500);
  flex-shrink: 0;
}

.site-nav__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 0.5rem;
}

.site-nav__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.7rem;
  border-radius: var(--r-sm);
  color: var(--ink-600);
  font-size: var(--fs-sm);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.18s ease, background-color 0.18s ease;
}

.site-nav__link:hover {
  color: var(--brand-600);
  background-color: var(--brand-50);
  text-decoration: none;
}

.site-nav__icon {
  width: 1.05em;
  height: 1.05em;
}

.site-nav__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;
  flex-shrink: 0;
}

.site-nav__toggle {
  display: none;
  margin-left: auto;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  color: var(--ink-700);
  background: transparent;
  border: 1px solid var(--border-1);
  border-radius: var(--r-sm);
  cursor: pointer;
}

.site-nav__toggle:hover {
  background-color: var(--surface-2);
}

@media (max-width: 900px) {
  .site-nav__toggle {
    display: inline-flex;
  }

  .site-nav__cta {
    display: none;
  }

  /* Below 900px the links become a drawer under the bar instead of being
     crammed on one line. */
  .site-nav__links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin: 0;
    padding: 0.5rem 1rem 1rem;
    background-color: var(--surface-0);
    border-bottom: 1px solid var(--border-1);
    box-shadow: var(--shadow-md);
    display: none;
  }

  .site-nav.is-open .site-nav__links {
    display: flex;
  }

  .site-nav__link {
    padding: 0.75rem 0.5rem;
    font-size: var(--fs-body);
  }
}
</style>
