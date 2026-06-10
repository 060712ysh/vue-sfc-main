<template>
  <div class="login-wrapper">
    <div class="dc-logo-container">
      <img src="./assets/LOGO.png" alt="Discord Logo" class="main-logo">
    </div>

    <div class="login-card">
      <LoginForm />
      <QRCodeSection />
    </div>
  </div>
</template>

<script setup>
import LoginForm from './components/LoginForm.vue'
import QRCodeSection from './components/QRCodeSection.vue'
</script>

<style>
/* Global styles adapted from style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body {
    background-image: url('./assets/BACKGROUND.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
}

.dc-logo-container {
    margin-bottom: 24px;
}

.main-logo {
    width: 124px;
    height: auto;
}

.login-card {
    background-color: #2B2D31;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.24);
    display: flex;
    gap: 32px;
    width: 100%;
    max-width: 780px;
}

@media (max-width: 600px) {
    .login-card {
        padding: 24px;
        flex-direction: column;
        align-items: center;
        max-width: 440px;
    }
}
</style>
