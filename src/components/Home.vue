<script setup>
const download = () => {
    location.href = 'https://github.com/dialogflowchatbot/dialogflow/releases'
}
const tutorial = () => {
    location.href = 'https://dialogflowchatbot.github.io/#/tutorial'
}
</script>
<style scoped>
#header {
    background-image: url(../assets/flow.png), url(../assets/header_bg.jpg);
    background-position: right center, left top;
    background-repeat: no-repeat, repeat;
    height: 400px;
    color: white;
    padding-top: 100px;
    padding-left: 70px;
    font-size: 30px;
}

#header span {
    font-weight: bold;
    font-size: 70px;
}

#header .download {
    background-color: gold;
    border-radius: 10px;
    border: 3px #000 solid;
    font-size: 30px;
    padding: 12px;
    cursor: pointer;
    margin-right: 20px;
}

#header .tutorial {
    background-color: aliceblue;
    border-radius: 10px;
    border: 3px #000 solid;
    font-size: 30px;
    padding: 12px;
    cursor: pointer;
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
</style>
<template>
    <div id="header">
        <span>Dialog flow</span>
        <p>
            Dialog Flow Visual Editor and Responsing System
        </p>
        <p>
            Just in ONE file
        </p>
        <p>
            <button class="download" @click="download">Download, It's totally free.</button>
            <button class="tutorial" @click="tutorial">Tutorial</button>
        </p>
    </div>
    <p class="title">&gt;&gt;&gt;&gt;&gt;Screenshots&lt;&lt;&lt;&lt;&lt;</p>
    <div style="text-align: center;">
        <p class="sub-title">Working space</p>
        <p>
            <img src="../assets/work-space.png" width="90%" />
        </p>
        <p>
            <hr />
        </p>
        <p class="sub-title">Main flow list page</p>
        <p>
            <img src="../assets/main-flow.png" width="90%" />
        </p>
        <p>
            <hr />
        </p>
        <p class="sub-title">Visual flow editor</p>
        <p>
            <img src="../assets/canvas.png" width="90%" />
        </p>
        <p>
            <hr />
        </p>
        <p class="sub-title">Testing dialog flow tool</p>
        <p>
            <img src="../assets/testing.png" />
        </p>
    </div>
    <!-- <div>
        <table style="width: 100%;" align="center">
            <tr>
                <td style="33.33%">Screenshots</td>
                <td style="33.33%">Videos</td>
                <td style="33.33%">Introduction</td>
            </tr>
        </table>
    </div> -->
</template>