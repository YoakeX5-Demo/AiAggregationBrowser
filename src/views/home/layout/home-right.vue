<script lang="ts" setup>
// 引入状态管理
import { userStore } from "@store/user.ts";
import { aiStore } from "@store/ai.ts";
// 引入按钮组件
import { BtnAiSelect } from "../../../common/button";
// 引入接口函数
import {
  aiResponseChatGLM,
  aiResponseChatGPT,
  aiResponseStableDiffusion,
} from "@api/ai.ts";
import { userChatHistorical } from "@api/user.ts";
import { ViewChatBubble } from "@src/common/views";

// 存储页面数据
const problem = ref("");

// 处理提问请求
async function sendProblemRequest(e) {
  // 判断是否换行
  if (!e.shiftKey && e.keyCode == 13) {
    e.preventDefault(); // 取消换行动作
    // 设置 AI Store 数据
    aiStore().confirm = true;
    aiStore().problem = problem.value;
    aiStore().response = "正在思考...";
    // 获取选择的 AI ID
    const select = aiStore().aiId;
    // 根据选择的 AI 不同，调用不同的 API
    let response;
    if (select == 0) {
      response = await aiResponseChatGLM(aiStore().itemId, problem.value);
    } else if (select == 1) {
      response = await aiResponseChatGPT(aiStore().itemId, problem.value);
    } else if (select == 3) {
      response = await aiResponseStableDiffusion(
        aiStore().itemId,
        problem.value,
      );
    }
    aiStore().response = response["data"];
    problem.value = "";
    userStore().chatHistorical = await userChatHistorical();
  }
}

// 处理回复内容
const formatResponse = (response: string) => {
  if (aiStore().aiId == 3) {
    return "![][img]\n" + " \n" + "[img]:data:image/png;base64," + response[0];
  }
  return response;
};
// 处理回答集合
const items = () => {
  const data = userStore().chatHistorical["data"] as Array<number>;
  const Data = () =>
    data.filter((data: number) => data["item_id"] == aiStore().itemId);
  return { Data };
};
</script>

<template>
  <div class="flex flex-col">
    <!--上部-->
    <div class="flex p-1 px-3">
      <!--AI选择-->
      <btn-ai-select />
    </div>
    <!--中部-->
    <div class="flex flex-col h-full items-center overflow-auto">
      <!--聊天框-->
      <div
        v-if="
          userStore().isLogin && userStore().chatHistorical['data'] != undefined
        "
        class="flex flex-col w-full flex-1 break-all gap-2"
        style="width: 60vw; max-width: 40rem"
      >
        <div v-for="(item, index) in items().Data()" :key="index">
          <!-- 用户对话 -->
          <ViewChatBubble :user="true" :content="item['problem']" />
          <!-- AI回复 -->
          <ViewChatBubble
            :user="false"
            :content="formatResponse(item['response'])"
          />
        </div>
      </div>
    </div>
    <!--下部-->
    <div class="flex flex-col items-center">
      <!--输入框-->
      <div class="flex flex-col p-3" style="width: 60vw; max-width: 50rem">
        <el-input
          v-model="problem"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入你的问题，Shift+回车换行，回车键发送"
          style="text-align: center"
          type="textarea"
          @keydown="sendProblemRequest"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>
<style>
.el-textarea__inner {
  font-size: 1rem;
  line-height: normal;
  max-height: 40vh;
}
</style>
