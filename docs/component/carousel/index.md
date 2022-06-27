# 走马灯 carousel

<h2>基本用法</h2>
循环播放图片、文字

:::demo 
```vue
<template>
  <div class="carousel-container">
    <use-carousel>
      <use-carousel-item v-for="i in 4" :key="i">
        <div
          class="carousel-item"
          :style="{ background: i % 2 === 0 ? '#4e9476' : '#599a7e' }"
        >
          {{ i }}
        </div>
      </use-carousel-item>
    </use-carousel>
  </div>
</template>
<style lang="scss">
.carousel-container {
  width: 520px;
  height: 280px;
}

.carousel-item {
    width: 520px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: #fff;
    font-weight: bold;
}
</style>
```
:::
