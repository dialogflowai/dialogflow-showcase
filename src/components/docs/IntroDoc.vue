<script setup>
import { useI18n } from 'vue-i18n'
// import VueScrollTo from 'vue-scrollto';
import { winScrollTo } from '../../assets/tools.js'
import Demos from '../Demos.vue'
useI18n();
// navigator.language; //"en-US"
// navigator.languages; //["en-US", "zh-CN", "ja-JP"]
const isEnLanguage = navigator.language ? navigator.language.split('-')[0] == 'en' : false
const title3Span = isEnLanguage ? 8 : 7;
const title3Offset = isEnLanguage ? 2 : 3;
const fromPage = 'home';
function demo() {
    // VueScrollTo.scrollTo(document.getElementById('demosList'))
    winScrollTo(document.getElementById('demosList'))
}
</script>
<style scoped>
.title1 {
    background-image: url("../../assets/easy.png");
}

.title2 {
    background-image: url("../../assets/rocket.png");
}

.title3 {
    background-image: url("../../assets/diversity.png");
}

.title4 {
    background-image: url("../../assets/compatible.png");
    padding-left: 70px;
}

.title5 {
    background-image: url("../../assets/link.png");
}

.title1, .title2, .title3, .title4, .title5 {
  background-repeat: no-repeat;
  height: 100px;
  padding-left: 60px;
  background-size: 40px;
  background-position: left center;
}

.title4 {
  padding-left: 70px;
}

.progress-bg {
  width: 100%;
  max-width: 500px;
  height: 30px;
  border-radius: 20px;
  background-color: rgb(235, 238, 245);
  margin-bottom: 10px;
}

.progress1 {
  width: 150px;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(103, 194, 58);
}

.progress2 {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(64, 158, 255);
}

.progress3 {
  width: 90%;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(230, 162, 60);
}

.progress4 {
  width: 60%;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(245, 108, 108);
}

.intro .el-row, .features .el-row {
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.intro div, .features div {
  font-size: large;
}

.mid {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.black-line {
  height: 6px;
  background-color: black;
  margin: 0 auto;
}

/* 响应式部分 */
@media screen and (max-width: 768px) {
  .title1, .title2, .title3, .title4, .title5 {
    padding-left: 40px;
    background-size: 30px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .progress-bg {
    width: 100%;
  }

  .intro .el-col, .features .el-col {
    width: 100% !important;
    max-width: 100%;
    flex: none !important;
  }

  .black-line {
    display: none;
  }
}

</style>
<template>
    <el-row class="mid">
        <el-col :span="8">
            <div class="black-line"></div>
        </el-col>
        <el-col :span="4">
            <h1 style="text-align: center;">{{ $t('home.introTitle') }}</h1>
        </el-col>
        <el-col :span="8">
            <div class="black-line"></div>
        </el-col>
    </el-row>
    <div class="intro">
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/talk.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro1') }}</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/canvas.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro2') }}</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/nodes.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro3') }}, <el-button color="#b3e19d" @click="demo">See demos</el-button>.</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/exe.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro4') }}</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/scenarios.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro5') }}</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="2">
                <div><img src="../../assets/storage.png" /></div>
            </el-col>
            <el-col :span="10">
                <div>{{ $t('home.intro6') }}</div>
            </el-col>
        </el-row>
        <el-row class="mid">
            <el-col :span="8">
                <div class="black-line"></div>
            </el-col>
            <el-col :span="4">
                <h1 style="text-align: center;">{{ $t('home.midTitle') }}</h1>
            </el-col>
            <el-col :span="8">
                <div class="black-line"></div>
            </el-col>
        </el-row>
    </div>
    <div class="features" id="introDocAdvantage">
        <el-row>
            <el-col :span="5" :offset="3">
                <div class="grid-content">
                    <h1 class="title1">{{ $t('home.adv1Title') }}</h1>
                    <div v-html="$t('home.adv1')"></div>
                    <p id="demosList">
                        <Demos :parentPage="home" />
                        <!-- <Demos :parentPage="fromPage" /> -->
                        <!-- {{ $t('home.demo') }}:
                    <ol>
                        <li>
                            <el-link type="success" @click="gotoDemo('demo-repay', 'UmVwYXkgRGVtbw==')">{{
                                $t('home.demo1') }}</el-link>
                        </li>
                        <li>
                            <el-link type="success"
                                @click="gotoDemo('demo-collect', 'SW5mb3JtYXRpb24gQ29sbGVjdGlvbiBEZW1v')">{{
                                    $t('home.demo2') }}</el-link>
                        </li>
                        <li>
                            <el-link type="success"
                                @click="gotoDemo('demo-notify', 'T25lIFNlbnRlbmNlIE5vdGlmaWNhdGlvbiBEZW1v')">{{
                                    $t('home.demo3') }}</el-link>
                        </li>
                    </ol> -->
                    </p>
                </div>
            </el-col>
            <el-col :span="15">
                <div class="grid-content">
                    <img src="../../assets/easy-b.png" />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="9" :offset="3">
                <div class="progress-bg">
                    <div class="progress1"></div>
                </div>
                <div class="progress-bg">
                    <div class="progress2"></div>
                </div>
                <div class="progress-bg">
                    <div class="progress3"></div>
                </div>
                <div class="progress-bg">
                    <div class="progress4"></div>
                </div>
            </el-col>
            <el-col :span="10" :offset="2">
                <div class="grid-content">
                    <h1 class="title2">{{ $t('home.adv2Title') }}</h1>
                    <div v-html="$t('home.adv2')"></div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="title3Span" :offset="title3Offset">
                <div class="grid-content">
                    <h1 class="title3">{{ $t('home.adv3Title') }}</h1>
                    <div v-html="$t('home.adv3')"></div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content">
                    <img src="../../assets/diversity-b.png" />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="9" :offset="3">
                <div class="grid-content">
                    <p><img src="../../assets/browsers.png" /></p>
                    <p><img src="../../assets/os.png" /></p>
                </div>
            </el-col>
            <el-col :span="11" :offset="1">
                <div class="grid-content">
                    <h1 class="title4">{{ $t('home.adv4Title') }}</h1>
                    <div v-html="$t('home.adv4')"></div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="3">
                <div class="grid-content">
                    <h1 class="title5">{{ $t('home.adv5Title') }}</h1>
                    <div v-html="$t('home.adv5')"></div>
                    <br />
                    <router-link to="/doc">{{ $t('home.adv5Doc') }}</router-link>
                </div>
            </el-col>
            <el-col :span="15">
                <div class="grid-content">
                    <img src="../../assets/link-b.png" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>