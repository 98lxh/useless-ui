---
home: true
heroImage: logo.png
heroText: Useless UI
tagline: 一个Vue3组件库 使用TypeScript
---

<div style="display:flex;justify-content:center">
  <use-button type="primary" size="large" @click="handleClick">快速开始</use-button>
</div>

<script setup>
  const handleClick = () => {
    window.location = "/component/quickstart/"
  }
</script>
