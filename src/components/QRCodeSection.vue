<template>
  <div class="qr-section">
    <div class="qr-container">
      <img src="../assets/QRCODE.png" alt="QR Code" class="real-qr">
    </div>
    <h3>使用 QR Code 登入</h3>
    <p>用 <strong>Discord 行動應用程式</strong> 對此掃描就能立即登入。</p>
  </div>
</template>

<style scoped>
.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
}

.qr-container {
  background: white;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.real-qr {
  width: 160px;
  height: 160px;
}

.qr-section h3 { color: #F2F3F5; margin-bottom: 10px; }
.qr-section p { color: #B5BAC1; font-size: 14px; text-align: center; line-height: 1.4; }

@media (max-width: 600px) {
  .qr-section { display: none; }
}
</style>
