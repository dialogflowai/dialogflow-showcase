<script setup>
// import { Picture as IconPicture } from '@element-plus/icons-vue'
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

.el-row {
  margin-bottom: 30px;
}

.el-row span {
  font-weight: bold;
}

.b {
  border: #eee 1px solid;
}
</style>
<template>
  <el-row class="mid" id="functionNodes">
    <el-col :span="7">
      <div class="black-line"></div>
    </el-col>
    <el-col :span="6">
      <h1 style="text-align: center;">Function nodes</h1>
    </el-col>
    <el-col :span="7">
      <div class="black-line"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/dialogNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Dialog node</span>
      <div class="desc">
        You can set the text returned to the user,<br />
        and you can choose whether to wait for user input after the node returns the text,<br />
        or directly run the next node.
        <br />
        <router-link to="/doc/node/dialogNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/llmChatNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Large language model chat node</span>
      <div class="desc">
        Use a large language model to communicate with users, supporting OpenAI, Ollama, and HuggingFace local
        models.<br />
        If the model returns a timeout, you can also set another reply to return to the user.
        <br />
        <router-link to="/doc/node/llmChatNode">Check detail</router-link>
        <!-- <router-link :to="{ name: 'docDetail', params: { docCatelog: 'NodeIndex', docDetail: 'LlmChatNode' } }">Detail</router-link> -->
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/knowledgeBaseAnswerNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Knowledge base answer node</span>
      <div class="desc">
        This node can return Q&A knowledge, and can also find answers from uploaded documents.<br />
        If you don't find a suitable answer, you can also set up an alternate answer
        <br />
        <router-link to="/doc/node/knowledgeBaseAnswerNode">Check detail</router-link>
        <!-- <router-link :to="{ name: 'docDetail', params: { docCatelog: 'NodeIndex', docDetail: 'LlmChatNode' } }">Detail</router-link> -->
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/conditionNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Conditions node</span>
      <div class="desc">
        In this node,<br />
        you can determine whether the user input is equal to or contains certain text.<br />
        You can also determine the intention of the user's input,<br />
        or determine whether the value in the variable is what you expect.
        <br />
        <router-link to="/doc/node/conditionNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/gotoNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Goto node</span>
      <div class="desc">
        Using this node,<br />
        you can control the direction of the dialog.<br />
        You can jump to another conversation, or goto external link.
        <br />
        <router-link to="/doc/node/gotoNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/collectNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Collect node</span>
      <div class="desc">
        Using this node,<br />
        you can save all or part of the content input by the user into a variable. Later,<br />
        the content can be displayed as user text, conditionally judged,<br />
        or submitted to a third-party system through HTTP.
        <br />
        <router-link to="/doc/node/collectNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/externalApiNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>External HTTP node</span>
      <div class="desc">
        Using this node,<br />
        you can request an external HTTP interface,<br />
        and you can use this node to send input to the outside.<br />
        If you need to get data from external HTTP,<br />
        please create a variable and choose the value of the variable to be an HTTP interface.
        <br />
        <router-link to="/doc/node/externalHttpNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/sendEmailNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Send email node</span>
      <div class="desc">
        This node can send preset email content or dynamic email content to multiple recipients.<br />
        It can send emails synchronously or asynchronously.
        <br />
        <router-link to="/doc/node/sendEmailNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
      <img src="../../../assets/endNode.png" class="b" />
    </el-col>
    <el-col :span="10" :offset="1">
      <span>The end node</span>
      <div class="desc">
        This is an endpoint, indicating that a conversation flow has ended or terminated.
        <br />
        <router-link to="/doc/node/theEndNode">Check detail</router-link>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6" :offset="3">
    </el-col>
    <el-col :span="10" :offset="1">
      <span>Create your own node</span>
      <div class="desc">
        Use your imagination and create your own node<br />
        For example, a Slack/Discord bot node,<br />
        or a node that uses ChatGPT, exits when the user enters specific characters.<br />
        <br />
        If you have any good ideas or needs, you can also submit them to <a
          href="https://github.com/dialogflowai/dialogflow/discussions">Discussions</a> on Github
      </div>
    </el-col>
  </el-row>
</template>