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
    <el-carousel height="200px" direction="vertical">
      <el-carousel-item class="common bg1">
        <h2 class="small justify-center" text="2xl">Focused Expertise</h2>
        Unlike general-purpose LLM (Large Language Model) robots.<br />
        This tool is specifically designed to concentrate on areas of interest to businesses.<br />
        It swiftly and directly addresses real-world problems that users encounter when using related products.
      </el-carousel-item>
      <el-carousel-item class="common bg2">
        <h2 class="small justify-center" text="2xl">Simplicity</h2>
        Creating your own bot is effortless.<br />
        Users only need to drag and drop functional nodes with a mouse, making the process intuitive and user-friendly.
      </el-carousel-item>
      <el-carousel-item class="common bg3">
        <h2 class="small justify-center" text="2xl">Speed</h2>
        The tool delivers millisecond-level responses without the need for powerful GPUs or CPUs.<br />
        This ensures that it operates efficiently and quickly, providing immediate answers to user queries.
      </el-carousel-item>
    </el-carousel>
  </div>
</template>