<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

import LanguageSwitcher from './LanguageSwitcher.vue';
import TryWithDocker from './docs/TryWithDocker.vue'
import Why from './docs/Why.vue'
import WhatCanBeDoneWithIt from './docs/WhatCanBeDoneWithIt.vue'
import NodesIntro from './docs/node/NodesIntro.vue'
import HowToUse from './docs/HowToUse.vue'
import Intro from './Intro.vue'
import Enterprise from './docs/Enterprise.vue';
import { httpReq } from '../assets/tools.js'
import BiDownload from '~icons/bi/download'
import BiGithub from '~icons/bi/github'
import BiFiletypeDoc from '~icons/bi/filetype-doc'

// import {
//     Printer,
//     Star,
// } from '@element-plus/icons-vue'

const router = useRouter();
const { t, tm } = useI18n()
const md = new MarkdownIt()
// const checkUpdateResult = ref(0)
const currentVersion = ref('')
// const newVersion = ref('')
// const changelog = reactive([])
// const updateLoading = ref(false)
// navigator.language; //"en-US"
// navigator.languages; //["en-US", "zh-CN", "ja-JP"]
function download() {
  window.location.href = 'https://github.com/dialogflowai/dialogflow/releases';
}
function repository() {
  window.location.href = 'https://github.com/dialogflowai/dialogflow';
}
function docs() {
  router.push('/doc');
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
  background-size: contain, cover;
  height: 450px;
  color: white;
  padding-top: 50px;
  padding-left: 70px;
  font-size: 2vw;
}

#header .name {
  font-weight: bold;
  font-size: 5vw;
  display: block;
  margin-bottom: 10px;
}

#header .download {
  background-color: gold;
  border-radius: 10px;
  border: 3px #000 solid;
  font-size: 20px;
  padding: 12px;
  margin-right: 10px;
}

#header .tutorial {
  background-color: aliceblue;
  border-radius: 10px;
  border: 3px #000 solid;
  font-size: 20px;
  padding: 12px;
}

#header .v {
  font-size: 14px;
  margin-left: 12px;
}

.btns {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btns button {
  background-color: white;
  border-radius: 30px;
  border: 3px #000 solid;
  font-size: 30px;
  padding: 12px 16px;
  flex: 1 1 auto;
  max-width: 220px;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 180%;
  font-weight: bold;
  margin: 30px 10px 10px;
}

.sub-title {
  font-weight: bold;
  font-size: 18px;
  color: gray;
  margin: 20px 0;
}

.bg1 {
  background-image: url("../assets/demo1.gif");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  height: 400px;
  margin-top: 20px;
}

.text-center {
  text-align: center;
  padding: 10px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  #header {
    padding-left: 20px;
    padding-top: 30px;
    height: auto;
    font-size: 4vw;
  }

  #header .name {
    font-size: 7vw;
  }

  .btns {
    flex-direction: column;
    align-items: stretch;
  }

  .btns button {
    font-size: 18px;
    width: 100%;
    margin: 5px 0;
  }

  .title {
    font-size: 150%;
  }

  .bg1 {
    height: 250px;
  }
}
</style>


<template>
  <LanguageSwitcher />
  <div id="header">
    <span class="name">{{ t('home.headerTitle1') }}</span>
    <p>{{ t('home.headerTitle2') }}</p>
    <p>
      {{ t('home.headerTitle3') }}<br />
      <!-- It's AI powered. Integrated OpenAI, Ollama and HuggingFace local LLMs, empowered your business.<br />
            It's easy to use. Use the mouse to drag and drop with our intuitive node-based editor.<br />
            It's fast. Built on Rust and Vue3.<br />
            It's safe. Open source and all data is saved locally. -->
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
        </el-icon> {{ t('home.headerDownloadBtnText') }}
      </button>
      <button @click="repository">
        <el-icon :size="27">
          <BiGithub />
        </el-icon> Github
      </button>
      <button @click="docs()">
        <el-icon :size="27">
          <BiFiletypeDoc />
        </el-icon> {{ t('home.headerDocBtnText') }}
      </button>
    </div>
    <div style="font-size: 16px;">{{ t('home.headerTheLatestVersion') }}: {{ currentVersion }}</div>
  </div>
  <p class="title">
    {{ t('home.slogan') }}
  </p>
  <div class="bg1"></div>
  <!-- <div><img src="../assets/demo1.gif" /></div> -->
  <TryWithDocker />
  <Why />
  <!-- <WhatCanBeDoneWithIt /> -->
  <NodesIntro />
  <HowToUse />
  <Intro />
  <Enterprise />
  <hr />
  <div class="text-center">
    Version: {{ currentVersion }}<br />
    If you have any questions or suggestions, please email to:
    dialogflow@yeah.net
    or create a <a href="https://github.com/dialogflowai/dialogflow/discussions">Discussions</a>
  </div>
  <div class="text-center">
    Images were from
    <a href="https://unsplash.com">Unsplash</a> &amp; <a href="https://picsum.photos">Picsum</a>
    , Icons created by
    <a href="https://www.flaticon.com/">Flaticon</a>
  </div>
</template>