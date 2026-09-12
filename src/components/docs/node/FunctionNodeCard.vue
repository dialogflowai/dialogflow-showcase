<template>
  <div class="function-node-card">
    <div class="function-node-media">
      <!-- The "create your own node" card is passed `img=""`. Resolving that
           used to produce the assets *directory* URL, so a broken-image glyph
           rendered wherever the card appeared. -->
      <img v-if="img" :src="resolvedImg" :alt="title" loading="lazy" class="function-node-image" />
      <span v-else class="function-node-placeholder"><PhPlusCircleBold /></span>
    </div>
    <div class="function-node-content">
      <h3 class="function-node-title">{{ title }}</h3>
      <div class="function-node-desc">
        <slot />
      </div>
      <router-link v-if="isInternal" :to="link" class="function-node-link">
        {{ $t('common.toDetail') }}<BiArrowRight />
      </router-link>
      <a v-else :href="link" target="_blank" rel="noopener" class="function-node-link">
        {{ $t('common.toDetail') }}<BiArrowRight />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PhPlusCircleBold from '~icons/ph/plus-circle-bold'
import BiArrowRight from '~icons/bi/arrow-right'

const props = defineProps({
  img: String,
  title: String,
  link: String,
})

const resolvedImg = computed(() => {
  if (!props.img) return ''
  return new URL(`../../../assets/${props.img}`, import.meta.url).href
})

// The last card links to a GitHub discussion rather than an in-app route, so
// it needs an `<a>`; `router-link` would try to resolve the URL against the
// hash router and navigate nowhere.
const isInternal = computed(() => !!props.link && props.link.startsWith('/'))
</script>

<style scoped>
.function-node-card {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: clamp(1rem, 0.7rem + 1vw, 1.75rem);
  align-items: center;
  padding: clamp(1rem, 0.8rem + 0.8vw, 1.5rem);
  margin-bottom: 1rem;
  background-color: var(--surface-0);
  border: 1px solid var(--border-1);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.function-node-card:hover {
  transform: translateY(-2px);
  border-color: var(--brand-200);
  box-shadow: var(--shadow-lg);
}

.function-node-media {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  padding: 0.5rem;
  background-color: var(--surface-2);
  border: 1px solid var(--border-1);
  border-radius: var(--r-md);
  overflow: hidden;
}

.function-node-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--r-sm);
}

.function-node-placeholder {
  color: var(--brand-400);
}

.function-node-placeholder svg {
  width: 34px;
  height: 34px;
}

.function-node-content {
  min-width: 0;
}

.function-node-title {
  font-size: var(--fs-h3);
  margin: 0 0 0.5rem;
}

.function-node-desc {
  line-height: 1.7;
  font-size: var(--fs-sm);
  color: var(--ink-600);
}

.function-node-desc :deep(p) {
  margin: 0;
}

.function-node-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.85rem;
  color: var(--brand-600);
  font-size: var(--fs-sm);
  font-weight: 600;
  text-decoration: none;
}

.function-node-link:hover {
  color: var(--brand-500);
  text-decoration: none;
}

.function-node-link svg {
  width: 1em;
  height: 1em;
  transition: transform 0.2s ease;
}

.function-node-link:hover svg {
  transform: translateX(2px);
}

@media (max-width: 720px) {
  .function-node-card {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .function-node-media {
    aspect-ratio: 16 / 9;
  }
}
</style>
