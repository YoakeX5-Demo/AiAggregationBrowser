<script setup lang="ts">
import request from "@src/utils/request.ts";

const test = () => {
  return request({
    url: "http://s0.i-mc.cn:22023/api/p/medical/blockchain/crate",
    method: "post",
    data: {
      key: "123",
    },
  });
};
onMounted(() => {
  console.log(test());
});
</script>
<template>
  <button></button>
</template>
