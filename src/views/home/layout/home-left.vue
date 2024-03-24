<script lang="ts" setup>
// 引入状态管理
import { userStore } from "@store/user.ts";
import { viewStore } from "@store/view.ts";
// 引入按钮组件
import {
  BtnChatItem,
  BtnChatNew,
  BtnNavClosed,
  BtnUserMenu,
} from "../../../common/button";
import { onMounted } from "vue";
import { aiStore } from "@store/ai.ts";

// 处理侧边栏状态
const navClosedActive = storeToRefs(viewStore()).active;
const navClosed = storeToRefs(viewStore()).closed;

// 处理时间
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10).replace("T", " ");

// 获取item
const items = () => {
  // 处理数据
  const data = userStore().chatHistorical["data"] as Array<number>;
  // 创建一个 Set 来存储不重复的 item_id 值
  const itemIdSet = new Set(data.map((item) => item["item_id"]));
  // 存储最新回答数据
  const newMessage = Array.from(itemIdSet, (item) =>
    data.find((dataItem) => dataItem["item_id"] == item),
  );
  // 过滤器
  const filterData = (condition: (data: number) => boolean) =>
    newMessage.filter(condition);
  // 过滤当天数据
  const toDayData = () => filterData((data) => data["time"] >= formattedDate);
  // 过滤历史数据
  const oldData = () => filterData((data) => data["time"] < formattedDate);
  return { toDayData, oldData };
};
// 更新状态
const updateStore = (itemId: number, aiId: number) => {
  aiStore().itemId = itemId;
  aiStore().aiId = aiId;
  aiStore().confirm = true;
};
</script>

<template>
  <!--侧边栏框架-->
  <div class="flex items-center relative">
    <!--侧边栏-->
    <div
      :class="[
        { 'brightness-70': navClosedActive || navClosed },
        { 'w-40 sm:w-65': !navClosed },
        { 'w-0 px-0': navClosed },
        { 'w-0 px-0': navClosed },
      ]"
      class="h-full bg-slate-3 dark:bg-zinc-900 transition-all flex flex-col flex-1 box-border p-3 overflow-hidden"
    >
      <!--首部-->
      <div class="flex flex-col">
        <btn-chat-new />
        <br />
      </div>
      <!--中部-->
      <div
        class="flex flex-col h-full w-full overflow-y-auto"
        v-if="
          userStore().isLogin && userStore().chatHistorical['data'] != undefined
        "
      >
        <!--今日-->
        <div class="flex flex-col">
          <span class="text-xs p-2 gap-2 text-gray-600 dark:text-gray-400"
            >今日对话</span
          >
          <btn-chat-item
            v-for="(item, index) in items().toDayData()"
            :key="index"
            @click="updateStore(item?.['item_id'], item?.['ai_id'])"
          >
            <template v-slot:default>
              <span class="overflow-hidden grow">{{ item?.["problem"] }}</span>
            </template>
          </btn-chat-item>
        </div>
        <br />
        <!--往日-->
        <div class="flex flex-col">
          <div
            class="text-xs p-2 gap-2 whitespace-nowrap text-gray-600 dark:text-gray-400"
          >
            历史对话
          </div>
          <btn-chat-item
            v-for="(item, index) in items().oldData()"
            :key="index"
            @click="updateStore(item?.['item_id'], item?.['ai_id'])"
          >
            <template v-slot:default>
              <span class="overflow-hidden grow">{{ item?.["problem"] }}</span>
            </template>
          </btn-chat-item>
        </div>
      </div>
      <!--底部-->
      <div class="flex flex-col">
        <btn-user-menu />
      </div>
    </div>
    <!--侧边栏收起按钮-->
    <btn-nav-closed />
  </div>
</template>
