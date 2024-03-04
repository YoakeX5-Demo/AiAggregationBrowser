<script setup lang="ts">
import {
  getResponseChatGLM,
  getResponseChatGPT,
  getResponseStableDiffusion,
} from "@api/gpt.ts";
import { storeChat, gptResponse, userProblem } from "@store/chat.ts";
const problem = ref("");

async function getResponse(e) {
  // 判断是否换行
  if (!e.shiftKey && e.keyCode == 13) {
    e.cancelBubble = true; //ie阻止冒泡行为
    e.stopPropagation(); //Firefox阻止冒泡行为
    e.preventDefault(); //取消事件的默认动作*换行
    userProblem().problem = problem.value;
    // GPT选择
    const select = storeChat().select;
    gptResponse().response = "正在思考...";
    if (select == "0") {
      const response = await getResponseChatGLM(problem.value);
      console.log(response["0"]["data"]);
      gptResponse().response = response["0"]["data"];
    } else if (select == "1") {
      const response = await getResponseChatGPT(problem.value);
      console.log(response["0"]["data"]);
      gptResponse().response = response["0"]["data"];
    } else if (select == "3") {
      const response = await getResponseStableDiffusion(problem.value);
      console.log(response["0"]["data"]);
      gptResponse().response = response["0"]["data"];
    }
    problem.value = "";
  }
}
</script>
<template>
  <el-input
    v-model="problem"
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 4 }"
    placeholder="请输入你的问题，Shift+回车换行，回车键发送"
    style="text-align: center"
    @keydown="getResponse"
  >
  </el-input>
</template>
<style>
.el-textarea__inner {
  font-size: 1rem;
  line-height: normal;
  max-height: 40vh;
}
</style>
