<script lang="ts" setup>
// 引入状态管理
import { userLogin, userToken } from "@api/user.ts";
import { userStore } from "@store/user.ts";
// 引入路由管理
import router from "@src/router";

// 存储页面数据
const user = ref({
  userName: "abc",
  userPwd: "123456",
});

// 处理登录
const login = async () => {
  const res = await userLogin(user.value.userName, user.value.userPwd);
  if (res["msg"] == "登录成功") {
    const res = await userToken();
    userStore().name = user.value.userName;
    userStore().token = res["msg"];
    userStore().isLogin = true;
    ElMessage.success("登陆成功");
    ElMessage.success("Token:" + res["msg"]);
    await router.push("/");
  } else {
    ElMessage.error(res["msg"]);
  }
};
</script>
<template>
  <section class="w3l-login">
    <div class="overlay">
      <div class="wrapper">
        <div class="form-section">
          <h3>登录</h3>
          <h6>Login account</h6>
          <form
            action="http://s0.i-mc.cn:21041/user/userLogin"
            class="signin-form"
            method="post"
            @submit.prevent="login()"
          >
            <div class="form-input">
              <input
                v-model="user.userName"
                autocomplete="on"
                autofocus
                name="userName"
                placeholder="用户名"
                required
                type="text"
              />
            </div>
            <div class="form-input">
              <input
                v-model="user.userPwd"
                autocomplete="on"
                name="userPwd"
                placeholder="密码"
                required
                type="password"
              />
            </div>
            <label class="check-remaind">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <p class="remember">记住密码</p>
            </label>
            <button class="btn btn-primary theme-button mt-4" type="submit">
              登录
            </button>
            <div class="new-signup">
              <a class="signuplink" href="#login">忘记用户名或密码?</a>
            </div>
          </form>
          <p class="signup">
            还没有账户?
            <a class="signuplink" href="#register">注册</a>
          </p>
        </div>
      </div>
      <div class="copy-right">
        <p>&copy; 2024届 毕设作品 | 2227019130孙鸿</p>
      </div>
    </div>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </section>
</template>
<style scoped>
@import "@src/common/css/css-login.scss";
</style>
