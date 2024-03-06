<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NodesIntro from './docs/NodesIntro.vue'
import HowToUse from './docs/HowToUse.vue'
import Intro from './Intro.vue'
import { httpReq } from '../assets/tools.js'
import BiDownload from '~icons/bi/download'
import BiGithub from '~icons/bi/github'
import BiFiletypeDoc from '~icons/bi/filetype-doc'

// import {
//     Printer,
//     Star,
// } from '@element-plus/icons-vue'

const router = useRouter();
// const checkUpdateResult = ref(0)
const currentVersion = ref('')
// const newVersion = ref('')
// const changelog = reactive([])
// const updateLoading = ref(false)
// navigator.language; //"en-US"
// navigator.languages; //["en-US", "zh-CN", "ja-JP"]
function download() {
    window.location.href = 'https://github.com/dialogflowchatbot/dialogflow/releases';
}
function repository() {
    window.location.href = 'https://github.com/dialogflowchatbot/dialogflow';
}
function docs() {
    router.push('/docs');
}
// function introduction() {
//     router.push('/introduction');
// }
// function howToUse() {
//     VueScrollTo.scrollTo(document.getElementById('howToUse'))
// }
// function demo() {
//     VueScrollTo.scrollTo(document.getElementById('demosList'))
// }
onMounted(async () => {
    const t = await httpReq('GET', 'version.json', null, null, null);
    currentVersion.value = t
    // console.log(currentVersion.value)
})
/*
const checkUpdate = async () => {
    updateLoading.value = true
    const t = await httpReq('GET', 'check-new-version.json', null, null, null);
    // console.log(t)
    if (t.status == 200) {
        if (t.data != null) {
            newVersion.value = t.data.version;
            changelog.splice(0, changelog.length)
            copyProperties(t.data.changelog, changelog)
            // changelog.push(t.data.changelog)
            checkUpdateResult.value = 1
        } else {
            checkUpdateResult.value = 2
        }
    } else {
        checkUpdateResult.value = 3
    }
    updateLoading.value = false
}
*/
</script>

<style scoped>
#header {
    background-image: url(../assets/flow.png), url(../assets/header_bg.jpg);
    background-position: right center, left top;
    background-repeat: no-repeat, repeat;
    height: 450px;
    color: white;
    padding-top: 50px;
    padding-left: 70px;
    font-size: 30px;
}

#header button {
    cursor: pointer;
}

#header .name {
    font-weight: bold;
    font-size: 70px;
}

#header .download {
    background-color: gold;
    border-radius: 10px;
    border: 3px #000 solid;
    font-size: 30px;
    padding: 12px;
    margin-right: 20px;
}

#header .tutorial {
    background-color: aliceblue;
    border-radius: 10px;
    border: 3px #000 solid;
    font-size: 30px;
    padding: 12px;
}

#header .v {
    /* margin-left: 20px;
    margin-right: 10px; */
    font-size: 16px;
    line-height: 23px;
    /* padding-top: 7px; */
    vertical-align: middle;
    margin-left: 16px;
}

.title {
    text-align: center;
    font-size: 200%;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
}

.sub-title {
    font-weight: bold;
    font-size: 18px;
    color: gray;
    margin-top: 20px;
    margin-bottom: 20px;
}

.btns {
    margin-top: 20px;
    margin-bottom: 20px;
}

.btns button {
    background-color: white;
    border-radius: 30px;
    border: 3px #000 solid;
    font-size: 30px;
    padding: 12px;
}

.bg1 {
    background-image: url("../assets/canvasEditor.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 350px;
    margin-top: 20px;
}
</style>

<template>
    <div id="header">
        <span class="name">Dialog flow chat bot</span>
        <p>
            It's fast. Built on Rust and Vue3.<br />
            It's easy to use. Drag &amp; drop various function nodes to build your chatbot's logic.<br />
            It's safe. Open source and all data is saved locally.
            <!-- Create your own conversational bot in under 1 minute. -->
        </p>
        <!-- <p>
            <button class="download" @click="guide">Get started</button>
            <button class="tutorial" @click="introduction">Introduction</button>
            <span class="v">Current verion is: v1.8.0</span><br/>
            <button class="cu" @click="introduction">Check update</button>
        </p> -->
        <div class="btns">
            <button @click="download">
                <el-icon :size="27">
                    <BiDownload />
                </el-icon> Download
            </button>
            <button style="margin-left: 20px;" @click="repository">
                <el-icon :size="27">
                    <BiGithub />
                </el-icon> Github
            </button>
            <button style="margin-left: 20px;" @click="docs()">
                <el-icon :size="27">
                    <BiFiletypeDoc />
                </el-icon> Docs
            </button>
        </div>
        <div style="font-size: 16px;">The latest version: {{ currentVersion }}</div>
    </div>
    <p class="title">
    Build powerful chatbots in minutes with our intuitive node-based editor
    </p>
    <div class="bg1"></div>
    <NodesIntro />
    <HowToUse />
    <Intro />
    <p>
        <hr />
    </p>
    <p>
    <div class="text-center">
        Version: {{ currentVersion }}<br />
        If you have any questions or suggestions, please email to:
        dialogflow@yeah.net
        or create a <a href="https://github.com/dialogflowchatbot/dialogflow/discussions">Discussions</a>
    </div>
    <div class="text-center">
        Images were from
        <a href="https://unsplash.com">Unsplash</a> &amp; <a href="https://picsum.photos">Picsum</a>
        , Icons created by
        <a href="https://www.flaticon.com/free-icons/seo-and-web" title="seo and web icons">Seo and web icons created by
            Freepik - Flaticon</a>
    </div>
    </p>
</template>