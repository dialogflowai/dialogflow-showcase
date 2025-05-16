<script setup>
// import { Picture as IconPicture } from '@element-plus/icons-vue'
import FunctionNodeCard from './FunctionNodeCard.vue'
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
  <!-- <el-row class="mid" id="functionNodes">
    <el-col :span="7">
      <div class="black-line"></div>
    </el-col>
    <el-col :span="6">
      <h1 style="text-align: center;">Function nodes</h1>
    </el-col>
    <el-col :span="7">
      <div class="black-line"></div>
    </el-col>
  </el-row> -->
  <el-row justify="center" style="margin-top: 40px;">
    <el-col :span="16">
      <h1 style="text-align:center; margin-bottom: 40px;">Function nodes</h1>

      <FunctionNodeCard
        img="dialogNode.png"
        title="Dialog node"
        link="/doc/node/dialogNode"
      >
        You can set the text returned to the user,<br />
        and you can choose whether to wait for user input after the node returns the text,<br />
        or directly run the next node.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="llmChatNode.png"
        title="Large language model chat node"
        link="/doc/node/llmChatNode"
      >
        Use a large language model to communicate with users, supporting OpenAI, Ollama, and HuggingFace local models.<br />
        If the model returns a timeout, you can also set another reply to return to the user.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="knowledgeBaseAnswerNode.png"
        title="Knowledge base answer node"
        link="/doc/node/knowledgeBaseAnswerNode"
      >
        This node can return Q&A knowledge, and can also find answers from uploaded documents.<br />
        If you don't find a suitable answer, you can also set up an alternate answer.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="conditionNode.png"
        title="Conditions node"
        link="/doc/node/conditionNode"
      >
        In this node,<br />
        you can determine whether the user input is equal to or contains certain text.<br />
        You can also determine the intention of the user's input,<br />
        or determine whether the value in the variable is what you expect.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="gotoNode.png"
        title="Goto node"
        link="/doc/node/gotoNode"
      >
        Using this node,<br />
        you can control the direction of the dialog.<br />
        You can jump to another conversation, or goto external link.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="collectNode.png"
        title="Collect node"
        link="/doc/node/collectNode"
      >
        Using this node,<br />
        you can save all or part of the content input by the user into a variable. Later,<br />
        the content can be displayed as user text, conditionally judged,<br />
        or submitted to a third-party system through HTTP.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="externalApiNode.png"
        title="External HTTP node"
        link="/doc/node/externalHttpNode"
      >
        Using this node,<br />
        you can request an external HTTP interface,<br />
        and you can use this node to send input to the outside.<br />
        If you need to get data from external HTTP,<br />
        please create a variable and choose the value of the variable to be an HTTP interface.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="sendEmailNode.png"
        title="Send email node"
        link="/doc/node/sendEmailNode"
      >
        This node can send preset email content or dynamic email content to multiple recipients.<br />
        It can send emails synchronously or asynchronously.
      </FunctionNodeCard>

      <FunctionNodeCard
        img="endNode.png"
        title="The end node"
        link="/doc/node/theEndNode"
      >
        This is an endpoint, indicating that a conversation flow has ended or terminated.
      </FunctionNodeCard>

      <FunctionNodeCard
        img=""
        title="Create your own node"
        link="https://github.com/dialogflowai/dialogflow/discussions"
      >
        Use your imagination and create your own node<br />
        For example, a Slack/Discord bot node,<br />
        or a node that uses ChatGPT, exits when the user enters specific characters.<br />
        <br />
        If you have any good ideas or needs, you can also submit them to <a href="https://github.com/dialogflowai/dialogflow/discussions">Discussions</a> on Github
      </FunctionNodeCard>

    </el-col>
  </el-row>
</template>