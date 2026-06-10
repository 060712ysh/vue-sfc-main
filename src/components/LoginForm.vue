<template>
  <div class="auth-form">
    <h2>歡迎回來！</h2>
    <p class="subtitle">我們很高興又見到您了！</p>
    
    <form id="loginForm" @submit.prevent="handleLogin">
      <div class="input-group">
        <label>電子郵件或電話號碼</label>
        <input type="text" id="account" v-model="account" required>
      </div>
      <div class="input-group">
        <label>密碼</label>
        <input type="password" id="password" v-model="password" required>
        <a href="#" class="forgot-link">忘記您的密碼？</a>
      </div>
      <button type="submit" class="login-btn">登入</button>
      <p class="register-text">需要一個帳號？ <a href="#">註冊</a></p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const account = ref('')
const password = ref('')

const handleLogin = () => {
  if (account.value) {
    alert(`正在登入：${account.value}`)
    console.log("登入資訊已擷取")
  }
}
</script>

<style scoped>
.auth-form {
  flex: 1;
}

h2 { color: #F2F3F5; margin-bottom: 8px; text-align: center; }
.subtitle { color: #B5BAC1; font-size: 16px; margin-bottom: 20px; text-align: center; }

.input-group { margin-bottom: 20px; }
.input-group label {
  display: block;
  color: #B5BAC1;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.input-group input {
  width: 100%;
  padding: 10px;
  background-color: #1E1F22;
  border: none;
  border-radius: 3px;
  color: #DBDEE1;
  font-size: 16px;
}

.forgot-link, .register-text a {
  color: #00A8FC;
  text-decoration: none;
  font-size: 14px;
}

.forgot-link {
  display: inline-block;
  margin-top: 4px;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
}

.login-btn:hover {
  background-color: #4752C4;
}

.register-text {
  color: #949BA4;
  font-size: 14px;
  margin-top: 8px;
}
</style>
