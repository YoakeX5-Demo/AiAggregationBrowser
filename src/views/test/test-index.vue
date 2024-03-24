<script setup lang="ts">
import { userStore } from "@store/user.ts";
import { userChatHistorical } from "@api/user.ts";

onMounted(async () => {
  // 更新数据
  userStore().chatHistorical = await userChatHistorical();
  // 获取item
  const item = () => {
    // 获取时间
    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 10)
      .replace("T", " ");
    const result = userStore().chatHistorical["data"] as Array<number>;
    // 创建一个 Set 来存储不重复的 item_id 值
    const itemIdSet = new Set();
    // 遍历数组 result，并获取 item_id 集合
    result.forEach((item) => {
      itemIdSet.add(item["item_id"]);
    });
    // 存储最新回答数据
    const newMessage: any[] = [];
    // 取出最新的回答
    itemIdSet.forEach((item) => {
      newMessage.push(
        // 获取相同 item_id 中最新的回答
        result.find((data) => data["item_id"] == item),
      );
    });
    // 获取当天数据
    const toDayData = () => {
      return newMessage.filter((data: number) => {
        return data["time"] >= formattedDate;
      });
    };
    // 获取过去数据
    const oldData = () => {
      return newMessage.filter((data: number) => {
        return data["time"] < formattedDate;
      });
    };
  };
});
</script>
<template></template>
