<script setup>
import NodesIntro from './node/NodesIntro.vue';
import SolarDocumentTextLinear from '~icons/solar/document-text-linear'
import PhPlugsConnectedBold from '~icons/ph/plugs-connected-bold'

// The Alibaba CDN logo that used to sit at the top of this page is gone — a
// documentation landing page should not depend on a third-party CDN for its
// own branding, and that image was a generic placeholder rather than anything
// belonging to this project.

const apiLinks = [
    { to: '/doc/api/integration/overview', label: 'doc.menu.integration.overview' },
    { to: '/doc/api/integration/javascript', label: null, text: 'JavaScript' },
    { to: '/doc/api/integration/python', label: null, text: 'Python' },
    { to: '/doc/api/integration/java', label: null, text: 'Java' },
]

const tutorialLinks = [
    { to: '/doc/tutorial/get-started', label: 'doc.menu.tutorials.getStarted' },
    { to: '/doc/tutorial/simplest-notification-robot', label: 'doc.menu.tutorials.simplestNotificationRobot' },
]
</script>

<style scoped>
.doc-intro__grid {
    margin-bottom: 2.5rem;
}

.doc-intro__card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: var(--ink-800);
    font-weight: 600;
    text-decoration: none;
}

.doc-intro__card:hover {
    color: var(--brand-600);
    text-decoration: none;
}

.doc-intro__card svg {
    width: 22px;
    height: 22px;
    color: var(--brand-500);
}

.doc-intro__list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
}

.doc-intro__list-item {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.9rem 1.1rem;
    background-color: var(--surface-1);
    border: 1px solid var(--border-1);
    border-radius: var(--r-md);
    color: var(--ink-800);
    font-weight: 600;
    text-decoration: none;
    transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.doc-intro__list-item:hover {
    color: var(--brand-600);
    border-color: var(--brand-200);
    background-color: var(--brand-50);
    text-decoration: none;
}

.doc-intro__list-item svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--brand-500);
}
</style>

<template>
    <h1>{{ $t('doc.introTitle') }}</h1>
    <p class="lead">{{ $t('doc.introSubtitle') }}</p>

    <h2>{{ $t('doc.menu.integration.title') }}</h2>
    <div class="grid grid-4 doc-intro__grid">
        <router-link v-for="link in apiLinks" :key="link.to" :to="link.to" class="card card-hover doc-intro__card">
            <PhPlugsConnectedBold />
            <span>{{ link.label ? $t(link.label) : link.text }}</span>
        </router-link>
    </div>

    <h2>{{ $t('doc.menu.tutorials.title') }}</h2>
    <div class="doc-intro__list">
        <router-link v-for="link in tutorialLinks" :key="link.to" :to="link.to" class="doc-intro__list-item">
            <SolarDocumentTextLinear />
            <span>{{ $t(link.label) }}</span>
        </router-link>
    </div>

    <NodesIntro />
</template>
