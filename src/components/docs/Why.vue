<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '../SectionHeader.vue'
import PhLightbulbBold from '~icons/ph/lightbulb-bold'
import PhFeatherBold from '~icons/ph/feather-bold'
import PhSparkleBold from '~icons/ph/sparkle-bold'
import PhWrenchBold from '~icons/ph/wrench-bold'
import PhLightningBold from '~icons/ph/lightning-bold'
import PhLockKeyBold from '~icons/ph/lock-key-bold'

const { t, tm } = useI18n()

const icons = [
  PhLightbulbBold, PhFeatherBold, PhSparkleBold,
  PhWrenchBold, PhLightningBold, PhLockKeyBold,
]

// The emoji live in the translation strings, and are stripped at render time
// rather than deleted from `en.js`/`zh.js`. Editing them would mean touching
// six strings across two 400-line files, and `🐱🏍` is a ZWJ sequence that is
// very easy to corrupt by hand. These are printed in real icons instead.
//
// The character class has to cover the ZWJ (U+200D) and variation selectors
// as well as the pictographs themselves, otherwise `🐱🏍` loses only its first
// half and a stray motorbike stays on the card.
const EMOJI_PREFIX = /^[\p{Extended_Pictographic}\p{Emoji_Component}\u200d\uFE0F\s]+/u
const stripEmoji = (s) => (s || '').replace(EMOJI_PREFIX, '')

const items = computed(() => {
  const list1 = tm('why.list1') || []
  const list2 = tm('why.list2') || []
  return [...list1, ...list2].map((item, i) => ({
    icon: icons[i],
    title: stripEmoji(item.title),
    content: item.content,
  }))
})
</script>

<style scoped>
.why {
  background-color: var(--surface-1);
  border-block: 1px solid var(--border-1);
}

.why-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  height: 100%;
  padding: clamp(1.25rem, 0.9rem + 1vw, 1.75rem);
  background-color: var(--surface-0);
  border: 1px solid var(--border-1);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.why-card:hover {
  transform: translateY(-3px);
  border-color: var(--brand-200);
  box-shadow: var(--shadow-lg);
}

.why-card__icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: var(--r-md);
  background-color: var(--brand-50);
  color: var(--brand-600);
}

.why-card__icon svg {
  width: 21px;
  height: 21px;
}

.why-card h3 {
  font-size: var(--fs-h3);
  margin: 0;
}

.why-card p {
  margin: 0;
  color: var(--ink-600);
  font-size: var(--fs-sm);
  line-height: 1.7;
}
</style>

<template>
    <section class="why section" id="features">
        <div class="container">
            <SectionHeader :title="t('why.title')" :subtitle="t('why.desc')" level="h2" />
            <div class="grid grid-3">
                <article class="why-card" v-for="item in items" :key="item.title">
                    <span class="why-card__icon"><component :is="item.icon" /></span>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.content }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
