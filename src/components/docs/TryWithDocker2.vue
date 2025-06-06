<script setup>
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'

const { t, tm } = useI18n()
const md = new MarkdownIt()

import { winScrollTo } from '../../assets/tools.js'

const itfn = () => {
  winScrollTo(document.getElementById('functionNodes'))
}

const htu = () => {
  winScrollTo(document.getElementById('howToUse'))
}
</script>

<template>
  <div class="dcontainer">
    <section class="docker">
      <h1>Give it a go.</h1>
      <h3>
        This tool is completely installation-free<br />
        There are two ways:
      </h3>
      <ol>
        <li>
          Download the compiled file directly from the
          <a
            href="https://github.com/dialogflowai/dialogflow/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            release page
          </a>
          on GitHub
        </li>
        <li>
          Try demos with Docker<br />
          We provide an image on Docker Hub:
          <a
            href="https://hub.docker.com/r/dialogflowai/dialogflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            dialogflowai/dialogflow
          </a>
          <br />
          <span class="note">
            If you are using Windows, please install
            <a
              href="https://hub.docker.com/editions/community/docker-ce-desktop-windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker Desktop
            </a>
            first
          </span>
          <ol>
            <li><code>docker pull dialogflowai/dialogflow</code></li>
            <li><strong>Normal:</strong><br />
              <code>docker run -dp 127.0.0.1:12715:12715 --name dialogflow dialogflowai/dialogflow</code>
              <ul>
                <li>
                  <strong>Listening 0.0.0.0:</strong><br />
                  <code>docker run -dp 0.0.0.0:12715:12715 --name dialogflow dialogflowai/dialogflow</code>
                </li>
                <li>
                  <strong>Mounting local data directory:</strong><br />
                  <code>docker run -v &lt;Your local data dir&gt;:/data -dp 0.0.0.0:12715:12715 --name dialogflow dialogflowai/dialogflow</code>
                </li>
              </ul>
            </li>
            <li>
              Open your browser and visit:<br />
              <code>http://127.0.0.1:12715/</code> or <code>http://&lt;Your IP&gt;:12715/</code>
            </li>
          </ol>
        </li>
      </ol>
      <div class="button-group">
        <button @click="itfn">Introduction to function nodes</button>
        <button @click="htu">How to use</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dcontainer {
  background-color: aliceblue;
}

.docker {
  margin: 5% auto;
  padding: 20px 30px;
  max-width: 720px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.note {
  color: gray;
  font-size: 14px;
}

.docker code {
  background: #f2f2f2;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.button-group {
  margin-top: 30px;
  text-align: center;
}

.button-group button {
  background-color: white;
  border-radius: 30px;
  border: 2px solid #000;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s ease;
}

.button-group button:hover {
  background-color: #000;
  color: white;
}
</style>
