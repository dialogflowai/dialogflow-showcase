<style scoped>
.common {
  color: white;
  padding-left: 20px;
  line-height: 30px;
  font-size: 20px;
}
.bg1 {
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}

.bg2 {
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

.bg3 {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>
<template>
  <div style="margin-left: 120px;margin-right: 120px;">
    <h1>Why?</h1>
    <h2>This intelligent tool offers several key advantages</h2>
    <el-row :gutter="50">
      <el-col :span="7">
        <h3>💡 Free to use</h3>
        There are no registration steps and no personal, machine information is collected.
      </el-col>
      <el-col :span="7">
        <h3>🎈 Light</h3>
        Only ONE executable file. It can run smoothly on laptop without GPUs.
      </el-col>
      <el-col :span="7">
        <h3>✨ AI powered</h3>
        Integrated OpenAI, Ollama and HuggingFace local LLMs, empowered your business.
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="7">
        <h3>🛠️ Easy to use</h3>
        Use the mouse to drag and drop with our intuitive node-based editor.
      </el-col>
      <el-col :span="7">
        <h3>🐱‍🏍 Fast</h3>
        Built on Rust and Vue3. It requires very few resources to run very quickly.
      </el-col>
      <el-col :span="7">
        <h3>🔑 Safe</h3>
        100% open source. It can be used completely offline and all runtime data is saved locally.
      </el-col>
    </el-row>
  </div>
</template>