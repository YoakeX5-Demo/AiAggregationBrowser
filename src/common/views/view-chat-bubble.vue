<script lang="ts" setup>
import { defineProps, computed } from "vue";
// 引入SVG图标
import IconChatGpt from "/src/assets/svg/chatgpt.svg";
import IconUser from "@src/assets/svg/user.svg";

// 引入代码高亮
import { marked } from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/foundation.css";

const props = defineProps({
  user: Boolean,
  content: String,
});

const userName = computed(() => (props.user ? "你" : "AI"));
const content = computed(() => props.content as string);

// 处理代码高亮
marked.setOptions({
  // 使用 marked.Renderer() 作为渲染器
  renderer: new marked.Renderer(),
  // 启用类似于 Github 样式的 Markdown 语法
  gfm: true,
  // 只解析符合 Markdown 定义的内容，不修正 Markdown 的错误
  pedantic: false,
  // 定义扩展
  extensions: {
    // 自定义渲染器
    renderers: {
      ["code"]: function (code) {
        return (
          "<pre class='code hljs'><code class=language " +
          code.lang +
          ">" +
          // 使用 highlight 对代码进行高亮处理
          highlight.highlight(code.text, { language: code.lang }).value +
          "</code></pre>"
        );
      },
    },
    childTokens: {},
  },
});
</script>
<template>
  <div class="flex gap-3">
    <div class="flex">
      <IconUser v-if="user" class="w-7 h-7 rounded-full" />
      <IconChatGpt v-else class="w-7 h-7 rounded-full" />
    </div>
    <div class="flex w-full flex-col">
      <a>{{ userName }}</a>
      <div class="markdown-body" v-html="marked(content)"></div>
    </div>
  </div>
</template>
