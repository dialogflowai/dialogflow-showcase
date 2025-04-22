<style scoped>
.header {
    text-align: center;
    padding: 20px;
}

.logo {
    width: 100px;
}

.nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f5f7fa;
    padding: 10px;
}

.nav-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.nav-item img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.nav-item h3 {
    margin: 0;
    flex-grow: 1;
}

.content {
    padding: 20px;
}

.footer {
    background-color: #409EFF;
    color: white;
    text-align: center;
    padding: 1px;
}
</style>
<template>
    <div class="header">
        <img src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg" alt="Logo" class="logo">
        <h1>Thank you for using DialogFlowAI!</h1>
    </div>
    <div class="nav">
        <div class="nav-item">
            <img src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg" alt="Article 1">
            <h3><a href="">How to build a simple chat bot in 1 minute.</a></h3>
            <p>WIP</p>
        </div>
        <div class="nav-item">
            <h3>How to setup condition branches?</h3>
            <p>WIP</p>
        </div>
        <div class="nav-item">
            <img src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg" alt="Article 3">
            <h3>How to configure intent recognition parameters?</h3>
            <p>WIP</p>
        </div>
        <div class="nav-item">
            <img src="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg" alt="Article 3">
            <h3>How to use LLM answer node?</h3>
            <p>WIP</p>
        </div>
        <!-- 下载了模型以后，就解锁了 xxx 功能 -->
    </div>
    <!-- <div class="content">
        <h2>How to integrate DialogFlowAI into your project?</h2>
        <p>首先，您需要安装所需的依赖包。</p>
        <pre><code>npm install some-tool</code></pre>
        <p>然后，在您的代码中引入并使用这个工具：</p>
        <pre><code>import SomeTool from 'some-tool';

SomeTool.init({
  // 配置选项
});</code></pre>
    </div> -->
    <div class="footer">
        <p>&copy; 2025.</p>
    </div>
</template>