<script setup>
import SolarDocumentTextLinear from '~icons/solar/document-text-linear'

// 图片路径用 new URL 处理
const step2 = new URL('../../assets/step2.png', import.meta.url).href
const step3 = new URL('../../assets/step3.png', import.meta.url).href
const step4 = new URL('../../assets/step4.png', import.meta.url).href
const step5 = new URL('../../assets/step5.png', import.meta.url).href
const step6 = new URL('../../assets/step6.png', import.meta.url).href
const step7 = new URL('../../assets/step7.png', import.meta.url).href
const step8 = new URL('../../assets/step8.png', import.meta.url).href
const step9 = new URL('../../assets/step9.png', import.meta.url).href

const stepImg = (i) => {
  return new URL(`../../assets/step${i}.png`, import.meta.url).href
}
</script>

<style scoped>
.mid {
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.black-line {
  height: 6px;
  background-color: black;
}

.title {
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <el-row class="mid" id="howToUse">
    <el-col :span="8">
      <div class="black-line"></div>
    </el-col>
    <el-col :span="4">
      <h1 style="text-align: center;">How to use</h1>
    </el-col>
    <el-col :span="8">
      <div class="black-line"></div>
    </el-col>
  </el-row>

  <el-timeline>
    <el-timeline-item timestamp="#1 Prerequisite" placement="top">
      <el-card>
        <div class="title">Download prebuild files</div>
        <ul>
          <li>Docker: <a href="https://hub.docker.com/r/dialogflowai/dialogflow" target="_blank" rel="noopener noreferrer">
            https://hub.docker.com/r/dialogflowai/dialogflow</a></li>
          <li>Release page: <a href="https://github.com/dialogflowai/dialogflow/releases" target="_blank" rel="noopener noreferrer">
            https://github.com/dialogflowai/dialogflow/releases</a></li>
        </ul>
        <div class="description">
          Alternatively, you can download source code and build by yourself
          <ul>
            <li>Frontend: <a href="https://github.com/dialogflowai/dialogflow/tree/main/frontend" target="_blank" rel="noopener noreferrer">
              https://github.com/dialogflowai/dialogflow/tree/main/frontend</a></li>
            <li>Backend: <a href="https://github.com/dialogflowai/dialogflow" target="_blank" rel="noopener noreferrer">
              https://github.com/dialogflowai/dialogflow</a></li>
          </ul>
        </div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#2 Start the application" placement="top">
      <el-card>
        <div class="title">
          On Windows, you can start it by double-clicking with the mouse.<br />
          On Linux or macOS, the executable permission needs to be granted: chmod x dialogflowai.
        </div>
        <p><img :src="stepImg(2)" alt="Step 2" /></p>
        <div class="description">One dialog flow contains many main flows which contains many sub flows.</div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#2 Guiding page" placement="top">
      <el-card>
        <div class="title">
          Run the program and use a browser to open the access address output by the program<br />
          On the "Guide" page, click on the button in the image below to go to the main flows management page.
        </div>
        <p><img :src="stepImg(2)" alt="Step 2" /></p>
        <div class="description">One dialog flow contains many main flows which contains many sub flows.</div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#3 Main flow" placement="top">
      <el-card>
        <div class="title">Create a main flow if there's none.</div>
        <p><img :src="step3" alt="Step 3" /></p>
        <div class="description">Here give a name to main flow, you can change the name anytime.</div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#4 Dialog flow" placement="top">
      <el-card>
        <div class="title">Create dialog flow</div>
        <p>
          <img :src="step4" alt="Step 4" /><br />
          <img :src="step5" alt="Step 5" />
        </p>
        <div class="description">On the left, you can add sub-flow.</div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#5 Editing" placement="top">
      <el-card>
        <div class="title">Edit dialog flow</div>
        <p>
          <img :src="step6" alt="Step 6" /><br />
          <img :src="step7" alt="Step 7" />
        </p>
        <div class="description">You can drag and drop flow node. Double-click on one node, will popup detail setting.</div>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#6 Testing" placement="top">
      <el-card>
        <div class="title">Test dialog flow</div>
        <div class="description">
          <ol>
            <li>Click '<b>Publish all sub-flows</b>' button (Will save current sub-flow automatically)</li>
            <li>Click '<b>Test dialog test</b>' button, testing window will popup on the right side</li>
            <li>Test it</li>
          </ol>
        </div>
        <p>
          <img :src="step8" alt="Step 8" /><br />
          <img :src="step9" alt="Step 9" />
        </p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="#7 Integrating" placement="top">
      <el-card>
        <div class="title">Integrate to your application</div>
        <p>
          <el-icon>
            <SolarDocumentTextLinear />
          </el-icon>
          Checkout <router-link to="/doc">request API doc</router-link>
        </p>
        <div class="description"></div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
