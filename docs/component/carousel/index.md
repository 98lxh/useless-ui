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

<h2>隐藏指示器</h2>
循环播放图片、文字

:::demo 
```vue
<template>
  <div class="carousel-container">
    <use-carousel
      :has-dot="false"
    >
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

`<Carousel>`Props
| 参数名           | 描述      | 类型  | 默认值 |
| ------------------- | ----------- | ------- | ------ |
| inital | 初始状态激活的幻灯片的索引，从 0 开始   | number | -   0   |
| hasDot               | 是否显示指示器 | boolean  |  true     |
| hasDirector            | 是否显示左右箭头 | boolean | true  |
| duration       | 切换时间 | number | 3000(ms)  |
| autoplay       | 是否自动播放 | boolean | true  |
