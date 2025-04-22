<script setup>
import { winScrollTo } from '../../assets/tools.js'
const itfn = () => {
    winScrollTo(document.getElementById('functionNodes'))
}
const htu = () => {
    winScrollTo(document.getElementById('howToUse'))
}
</script>
<style scoped>
.dcontainer {
    background-color: aliceblue;
}

.docker {
    margin: 5% auto;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 720px;
}

.note {
    color: gray;
}

.docker button {
    background-color: white;
    border-radius: 30px;
    border: 3px #000 solid;
    font-size: 16px;
    padding: 12px;
    cursor: pointer;
}
</style>
<template>
    <div class="dcontainer">
        <div class="docker">
            <h1>Give it a go.</h1>
            <h3>
                This tool is completely installation-free<br />
                There are two ways:
            </h3>
            <ol>
                <li>Download the compiled file directly from the <a href="https://github.com/dialogflowchatbot/dialogflow/releases">release page</a> on GitHub</li>
                <li>
                    Try demos with Docker<br />
                    We provided an image on Docker Hub at <a href="https://hub.docker.com/r/dialogflowai/dialogflow">dialogflowai/dialogflow</a><br />
                    <span class="note">If you are using a windows operating system, please install <a
                            href="https://hub.docker.com/editions/community/docker-ce-desktop-windows">Docker
                            Desktop</a>
                        first</span>
                    <ol>
                        <li>docker pull dialogflowai/dialogflow</li>
                        <li>docker run -dp 127.0.0.1:12715:12715 --name dialogflowdemo dialogflowai/dialogflow</li>
                        <li>Open your browser and visit: http://127.0.0.1:12715/</li>
                    </ol>
                </li>
            </ol>
            <div style="text-align: center;">
                <button @click="itfn">
                    Introduction to function nodes
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button @click="htu">
                    How to use
                </button>
            </div>
        </div>
    </div>
</template>