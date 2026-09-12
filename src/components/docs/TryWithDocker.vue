<script setup>
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

// `itfn()`/`htu()` used to live here. Neither was bound to any event, and
// `itfn` scrolled to `#functionNodes` — an id that only exists inside a
// commented-out block elsewhere on the page, so it would have thrown on click.
const { t, tm } = useI18n()
const md = new MarkdownIt()
</script>

<style scoped>
.try {
  padding-block: clamp(2rem, 1.4rem + 3vw, 3.5rem);
}

.try__card {
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding: clamp(1.5rem, 1.1rem + 2vw, 3rem);
  text-align: center;
  background: var(--grad-soft);
  border: 1px solid var(--border-1);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-md);
}

.try__card h2 {
  font-size: var(--fs-h1);
  margin-bottom: 0.75rem;
}

.try__card :deep(p) {
  color: var(--ink-600);
  line-height: 1.7;
}

.try__card :deep(code) {
  background: var(--surface-2);
  border: 1px solid var(--border-1);
  padding: 0.1em 0.4em;
  border-radius: 5px;
  font-size: 0.9em;
  color: var(--brand-700);
}

.try__actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}
</style>

<template>
  <section class="container try">
    <div class="try__card">
      <h2>{{ t('giveTry.title') }}</h2>
      <p v-html="md.render(t('giveTry.desc'))" />
      <!-- This used to be a `<router-link>` wrapping a `<button>`. Nested
           interactive elements are invalid HTML and the inner button's UA
           styles competed with the link's, so the two were fighting over the
           same box. `.btn` on the link itself renders identically and is
           correct. -->
      <div class="try__actions">
        <router-link class="btn btn-primary" to="/doc/tutorial/get-started">
          {{ t('giveTry.btnText') }}
        </router-link>
      </div>
    </div>
  </section>
</template>
