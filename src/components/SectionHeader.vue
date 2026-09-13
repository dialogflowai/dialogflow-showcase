<script setup>
/**
 * Replaces the `<div class="black-line"></div><h1>Title</h1><div class="black-line">`
 * block that was copy-pasted into four sections. Beyond being repetitive, that
 * pattern emitted an `<h1>` per section — there were a dozen `<h1>` elements on
 * the landing page and none of them was the page's actual heading.
 *
 * `level` defaults to `h2` so sections nest under the page's single `h1`;
 * pass `level="h1"` for a standalone page.
 */
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  level: { type: String, default: 'h2' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <header class="section-header" :class="`section-header--${align}`">
    <p v-if="eyebrow" class="section-header__eyebrow">{{ eyebrow }}</p>
    <component :is="level" class="section-header__title">{{ title }}</component>
    <p v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.section-header {
  margin-bottom: clamp(1.75rem, 1.2rem + 2vw, 3rem);
}

.section-header--center {
  text-align: center;
  max-width: 720px;
  margin-inline: auto;
}

.section-header__eyebrow {
  margin: 0 0 0.6rem;
  color: var(--brand-600);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-header__title {
  font-size: var(--fs-h1);
  letter-spacing: -0.02em;
  margin: 0;
  /* `doc-prose.css` underlines every `h2` inside `.doc-content` to mark it as
     a section break. This header is already visually distinct, and the
     underline stretches across the full column because the header is
     centred — so neutralise it explicitly rather than leave a stray rule. */
  border-bottom: 0;
}

.section-header__subtitle {
  margin: 0.85rem 0 0;
  color: var(--ink-500);
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  line-height: 1.65;
}

/* The subtitle sits under a centred title, so it needs its own centring once
   it has been given a max-width by the parent. */
.section-header--center .section-header__subtitle {
  margin-inline: auto;
}
</style>
