<script lang="ts" setup>
// 引入状态管理
import { userRegister } from "@api/user.ts";
import router from "@src/router";

// 存储页面数据
const user = ref({
  userName: "",
  userPwd: "",
  userPwd2: "",
});

// 处理注册
async function register() {
  if (user.value.userPwd != user.value.userPwd2) {
    ElMessage.error("两次密码不一致");
    return;
  }
  const res = await userRegister(user.value.userName, user.value.userPwd);
  if (res) {
    ElMessage.success("注册成功");
    await router.push("/login");
  }
}
</script>
<template>
  <section class="w3l-login">
    <div class="overlay">
      <div class="wrapper">
        <div class="form-section">
          <h3>注册</h3>
          <h6>Register an account</h6>
          <form
            action="#"
            class="signin-form"
            method="post"
            @submit.prevent="register()"
          >
            <div class="form-input">
              <input
                v-model="user.userName"
                autocomplete="off"
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
                autocomplete="off"
                name="userPwd"
                placeholder="密码"
                required
                type="password"
              />
            </div>

            <div class="form-input">
              <input
                v-model="user.userPwd2"
                autocomplete="off"
                name="userPwd2"
                placeholder="确认密码"
                required
                type="password"
              />
            </div>
            <label class="check-remaind">
              <input required type="checkbox" />
              <span class="checkmark"></span>
              <p class="remember">同意用户协议</p>
            </label>
            <button class="btn btn-primary theme-button mt-4" type="submit">
              注册
            </button>
            <div class="new-signup">
              <a class="signuplink" href="#register">忘记用户名或密码?</a>
            </div>
          </form>
          <p class="signup">
            已经有账户?
            <a class="signuplink" href="#login">登录</a>
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
