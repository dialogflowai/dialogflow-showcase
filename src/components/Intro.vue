<script setup>
// import { useRouter } from 'vue-router';
// import { useI18n } from 'vue-i18n'
// import VueScrollTo from 'vue-scrollto';
import { winScrollTo } from '../assets/tools.js'
import IntroDoc from './docs/IntroDoc.vue'
/*
import HowToUse from './docs/HowToUse.vue'
useI18n();
const router = useRouter();
// navigator.language; //"en-US"
// navigator.languages; //["en-US", "zh-CN", "ja-JP"]
function guide() {
    router.push('/guide');
}
function howToUse() {
    // VueScrollTo.scrollTo(document.getElementById('howToUse'))
    winScrollTo(document.getElementById('howToUse'))
}
function demo() {
    // VueScrollTo.scrollTo(document.getElementById('demosList'))
    winScrollTo(document.getElementById('demosList'))
}
function doc() {
    router.push('/docs');
}
*/
</script>

<style scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/hero_bg2.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 50px;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.download {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: aliceblue;
    text-align: center;
}
</style>

<template>
    <div class="hero-image">
        <div class="hero-text">
            <h1 style="font-size: 60px;">Create powerful chatbots without code.</h1>
            <p style="font-size: 30px;">try Dialogflow Chatbot now!</p>
        </div>
    </div>
    <div class="download">
        <h1>Download</h1>
        <p>You can download the latest releases on Github: <a
                href="https://github.com/dialogflowchatbot/dialogflow/releases">https://github.com/dialogflowchatbot/dialogflow/releases</a>
        </p>
        <p>
            If you have any issues or feedback, please email to: dialogflow(AT)yeah.net or create an <a
                href="https://github.com/dialogflowchatbot/dialogflow/issues">issue</a>
        </p>
    </div>
    <IntroDoc />
    <!-- <HowToUse />
    <p>
        <hr />
    </p> -->
</template>