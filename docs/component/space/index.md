<h1>间隔 Space</h1>

<h2>基本用法</h2>

间距组件的基本用法。

:::demo 

```vue
<template>
  <u-space>
    <span style="line-height:30px">space:</span>
    <u-button>Item1</u-button>
    <u-button>Item2</u-button>
    <u-button>Item3</u-button>
  </u-space>
</template>
```
:::

<h2>排列方式</h2>

通过`direction`属性设置排列方向,分为`vertical`和`horzantal`(默认)

:::demo 

```vue
<template>
  <p>vertical:</p>
  <u-space direction="vertical" fill>
    <div class='space-item'>Item1</div>
    <div class='space-item'>Item2</div>
    <div class='space-item'>Item3</div>
  </u-space>

  <p>horzantal:</p>
    <u-space>
    <u-button>Item1</u-button>
    <u-button>Item2</u-button>
    <u-button>Item3</u-button>
  </u-space>
</template>
<style>
.space-item{
  background-color:#165DFF;
  color:#fff;
  line-height:30px;
  text-align:center;
}
</style>
```

:::

<h2>间隔距离</h2>

通过`size`属性设置间隔的距离

:::demo 

```vue
<template>
  <u-space :size="size" fill>
    <u-button>Item1</u-button>
    <u-button>Item2</u-button>
    <u-button>Item3</u-button>
  </u-space>

  <u-space style="margin-top:10px">
    <u-button icon="jiahao" circle @click="handleSize('plus')"></u-button>
    <u-button icon="jianhao" circle @click="handleSize('sub')"></u-button>
  </u-space>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const size = ref(10)

const handleSize = (mode:'plus'|'sub') => {
  const num = mode === 'plus' ? 5 : -5;
  size.value = size.value + num;
}
</script>
```
:::

<h2>环绕间隔</h2>

环绕类型的间距，四周都有间距，一般用于换行的场景。

:::demo 

```vue
<template>
  <u-space style="width:300px" wrap>
    <u-button>Item1</u-button>
    <u-button>Item2</u-button>
    <u-button>Item3</u-button>
    <u-button>Item4</u-button>
    <u-button>Item5</u-button>
    <u-button>Item6</u-button>
    <u-button>Item7</u-button>
    <u-button>Item8</u-button>
    <u-button>Item9</u-button>
  </u-space>
</template>
```
:::


`<Space>`Props
| 参数名 | 描述                 | 类型                   | 默认值    |
| -------- | ---------------------- | ------------------------ | ------------ |
| dirction | 间隔方向           | `vertical`、`horizontal` | `horizontal` |
| size     | 间隔大小           | number                   | 5            |
| wrap     | 环绕间隔，折行后的间隔 | boolean                  | false        |
| fill     | 充满整行           | boolean                  | false        |
