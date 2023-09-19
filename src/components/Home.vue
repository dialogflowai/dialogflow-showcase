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

#header button {
    background-color: gold;
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
</style>
<template>
    <div id="header">
        <span>Dialog flow</span>
        <p>
            Dialog Flow Visual Editor and Responsing System
        </p>
        <p>
            Low code dialog flow responsing system
        </p>
        <p>
            <button>Download, It's totally free.</button>
        </p>
    </div>
    <p class="title">Screenshots</p>
    <div style="text-align: center;">
        <p>
            <img src="../assets/demo.png" width="90%" /><br />
            Visual flow editor
        </p>
        <p>
            <img src="../assets/testing.png" /><br />
            Test dialog flow
        </p>
    </div>
    <div>
        <table style="width: 100%;" align="center">
            <tr>
                <td style="33.33%">Screenshots</td>
                <td style="33.33%">Videos</td>
                <td style="33.33%">Introduction</td>
            </tr>
        </table>
    </div>
</template>