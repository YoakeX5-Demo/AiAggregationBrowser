<script lang="ts" setup>
import { gptResponse, storeChat, userProblem } from "@store/chat.ts";
import IconChatGpt from "/src/assets/svg/chatgpt.svg";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/foundation.css";

const render = new marked.Renderer();
marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  extensions: {
    renderers: {
      ["code"]: function (code: any) {
        return (
          "<pre class='code hljs'><code class=language " +
          code.lang +
          ">" +
          hljs.highlight(code.text, { language: code.lang }).value +
          "</code></pre>"
        );
      },
    },
    childTokens: {},
  },
});
const response = () => {
  if (storeChat().select == "0") {
    return gptResponse().response;
  } else if (storeChat().select == "1") {
    return gptResponse().response;
  } else if (storeChat().select == "3") {
    return (
      "![][img]\n" +
      " \n" +
      "[img]:data:image/png;base64," +
      gptResponse().response[0]
    );
  }
  return "";
};
</script>

<template>
  <!--内容栏中部内容-->
  <div>
    <div class="flex h-full gap-3">
      <div class="flex">
        <img
          class="rounded-full w-7 h-7"
          src="/src/assets/svg/user.png"
          alt=""
        />
      </div>
      <div class="flex w-full flex-col bg-gray-700">
        <a class="bg-gray-600">孙鸿：</a>
        <div class="markdown-body" v-html="marked(userProblem().problem)"></div>
      </div>
    </div>
    <div class="flex h-full gap-3">
      <div class="flex">
        <IconChatGpt class="w-7 h-7 rounded-full" />
      </div>
      <div class="flex w-full flex-col bg-gray-700">
        <a class="bg-gray-600">AI：</a>
        <div class="markdown-body" v-html="marked(response())"></div>
      </div>
    </div>
  </div>
</template>
