<script setup>
import { useI18n } from 'vue-i18n'
import { scrollToId } from '../../assets/tools.js'
import Demos from '../Demos.vue'
import SectionHeader from '../SectionHeader.vue'
import PhChatCircleDotsBold from '~icons/ph/chat-circle-dots-bold'
import PhPenNibBold from '~icons/ph/pen-nib-bold'
import PhShareNetworkBold from '~icons/ph/share-network-bold'
import PhPackageBold from '~icons/ph/package-bold'
import PhSquaresFourBold from '~icons/ph/squares-four-bold'
import PhDatabaseBold from '~icons/ph/database-bold'
import PhCursorClickBold from '~icons/ph/cursor-click-bold'
import PhRocketLaunchBold from '~icons/ph/rocket-launch-bold'
import PhUsersThreeBold from '~icons/ph/users-three-bold'
import PhBrowsersBold from '~icons/ph/browsers-bold'
import PhPlugsConnectedBold from '~icons/ph/plugs-connected-bold'
import BiGithub from '~icons/bi/github'

const { t } = useI18n()

// The old markup decided column spans by sniffing `navigator.language` to
// guess whether the translated string would fit a 7- or 8-column span. A
// responsive grid removes the need to guess: the browser measures the actual
// text, in whatever language, at whatever width.
const introPoints = [
    { icon: PhChatCircleDotsBold, key: 'intro1' },
    { icon: PhPenNibBold, key: 'intro2' },
    { icon: PhShareNetworkBold, key: 'intro3', demoLink: true },
    { icon: PhPackageBold, key: 'intro4' },
    { icon: PhSquaresFourBold, key: 'intro5' },
    { icon: PhDatabaseBold, key: 'intro6' },
]

// Five advantages, each a text/image pair that alternates sides.
const advantages = [
    { icon: PhCursorClickBold, title: 'adv1Title' },
    { icon: PhRocketLaunchBold, title: 'adv2Title' },
    { icon: PhUsersThreeBold, title: 'adv3Title' },
    { icon: PhBrowsersBold, title: 'adv4Title' },
    { icon: PhPlugsConnectedBold, title: 'adv5Title' },
]

function demo() {
    scrollToId('demosList')
}
</script>

<style scoped>
.intro-points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.intro-point {
    display: flex;
    gap: 0.9rem;
    padding: 1.1rem 1.25rem;
    background-color: var(--surface-1);
    border: 1px solid var(--border-1);
    border-radius: var(--r-md);
    line-height: 1.7;
    color: var(--ink-700);
}

.intro-point__icon {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: var(--r-sm);
    background-color: var(--brand-50);
    color: var(--brand-600);
}

.intro-point__icon svg {
    width: 19px;
    height: 19px;
}

.intro-point__body {
    min-width: 0;
}

.intro-point__cta {
    margin-top: 0.7rem;
}

/* --- Advantage rows ---------------------------------------------------- */

.advantage {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(1.25rem, 1rem + 2vw, 3rem);
    align-items: center;
    padding-block: clamp(1.5rem, 1rem + 2vw, 2.75rem);
}

@media (min-width: 900px) {
    .advantage {
        grid-template-columns: 1fr 1fr;
    }

    /* Alternate which side the illustration sits on. `order` rather than
       `row-reverse` so the reading order in the DOM stays text-then-image,
       which is what a screen reader should get. */
    .advantage--reverse .advantage__text {
        order: 2;
    }
}

.advantage__heading {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.advantage__heading h3 {
    margin: 0;
    font-size: var(--fs-h2);
    letter-spacing: -0.01em;
}

.advantage__badge {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: var(--r-md);
    background: var(--grad-brand);
    color: #fff;
    box-shadow: var(--shadow-brand);
}

.advantage__badge svg {
    width: 22px;
    height: 22px;
}

.advantage__text {
    color: var(--ink-600);
    line-height: 1.75;
    font-size: var(--fs-body);
}

.advantage__media {
    display: grid;
    place-items: center;
    padding: clamp(1rem, 0.6rem + 1.5vw, 2rem);
    background-color: var(--surface-1);
    border: 1px solid var(--border-1);
    border-radius: var(--r-lg);
}

.advantage__media img {
    width: 100%;
    max-width: 460px;
    height: auto;
    border: 0;
    margin: 0;
    background: transparent;
    box-shadow: none;
}

.advantage__actions {
    margin-top: 1rem;
}

/* The "tiny and fast" row's illustration slot. It used to hold the four
   unlabelled progress bars, and with those gone the slot needs something
   that actually states a fact. `< 6M` is the figure given in `home.intro4`. */
.advantage__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: clamp(1.25rem, 1rem + 1.5vw, 2.25rem) clamp(1.5rem, 1rem + 2vw, 3rem);
    background-color: var(--surface-0);
    border: 1px solid var(--border-1);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    text-align: center;
}

.advantage__stat-value {
    font-size: clamp(2.75rem, 2rem + 3vw, 4rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    background: var(--grad-brand);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.advantage__stat-label {
    color: var(--ink-500);
    font-size: var(--fs-sm);
    max-width: 24ch;
}
</style>

<template>
    <section class="section container">
        <SectionHeader :title="t('home.introTitle')" level="h2" />

        <div class="intro-points">
            <div class="intro-point" v-for="point in introPoints" :key="point.key">
                <span class="intro-point__icon"><component :is="point.icon" /></span>
                <div class="intro-point__body">
                    <span>{{ t(`home.${point.key}`) }}</span>
                    <div v-if="point.demoLink" class="intro-point__cta">
                        <button type="button" class="btn btn-outline btn-sm" @click="demo">
                            {{ t('home.demo') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- <el-button color="#b3e19d" @click="demo"> used to live here. The
             inline `color` prop compiles to an inline CSS custom property, which
             no stylesheet can override, so it had to go rather than be themed. -->
        <p id="demosList" class="advantage__actions">
            <!-- No `parentPage` prop: it defaults to 'home', which is what the
                 old `:parentPage="home"` actually passed anyway — `home` was an
                 undefined identifier, so the prop fell back to its default. -->
            <Demos />
        </p>
    </section>

    <section class="section container" id="introDocAdvantage">
        <SectionHeader :title="t('home.midTitle')" level="h2" />

        <!-- The four unlabelled progress bars (150px / 100% / 90% / 60%, in
             green/blue/orange/red) that used to sit in the second row have been
             removed. Four bars with no labels and no shared scale read as a
             chart but encode nothing, which is worse than no chart at all. -->
        <article class="advantage" v-for="(adv, i) in advantages" :key="adv.title"
            :class="{ 'advantage--reverse': i % 2 === 1 }">
            <div class="advantage__text">
                <div class="advantage__heading">
                    <span class="advantage__badge"><component :is="adv.icon" /></span>
                    <h3>{{ t(`home.${adv.title}`) }}</h3>
                </div>
                <div v-html="t(`home.adv${i + 1}`)"></div>
                <p v-if="i === 4" class="advantage__actions">
                    <router-link class="btn btn-primary" to="/doc">{{ t('home.adv5Doc') }}</router-link>
                </p>
            </div>
            <div class="advantage__media">
                <img v-if="i === 0" src="../../assets/easy-b.png" alt="" loading="lazy" />
                <img v-else-if="i === 2" src="../../assets/diversity-b.png" alt="" loading="lazy" />
                <img v-else-if="i === 4" src="../../assets/link-b.png" alt="" loading="lazy" />
                <template v-else-if="i === 3">
                    <div>
                        <p><img src="../../assets/browsers.png" alt="" loading="lazy" /></p>
                        <p><img src="../../assets/os.png" alt="" loading="lazy" /></p>
                    </div>
                </template>
                <div v-else-if="i === 1" class="advantage__stat">
                    <span class="advantage__stat-value">&lt; 6M</span>
                    <span class="advantage__stat-label">{{ t('home.adv2Stat') }}</span>
                </div>
                <a v-else class="btn btn-ghost" href="https://github.com/dialogflowai/dialogflow"
                    target="_blank" rel="noopener">
                    <BiGithub /> GitHub
                </a>
            </div>
        </article>
    </section>
</template>
