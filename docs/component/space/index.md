<Toc />

# 间隔 Space

## 基本用法

间距组件的基本用法。

:::demo 

```vue
<template>
  <use-space>
    <span style="line-height:30px">space:</span>
    <use-button>Item1</use-button>
    <use-button>Item2</use-button>
    <use-button>Item3</use-button>
  </use-space>
</template>
```
:::

## 排列方式

通过`direction`属性设置排列方向,分为`vertical`和`horzantal`(默认)

:::demo 

```vue
<template>
  <p>vertical:</p>
  <use-space direction="vertical" fill>
    <div class='space-item'>Item1</div>
    <div class='space-item'>Item2</div>
    <div class='space-item'>Item3</div>
  </use-space>

  <p>horzantal:</p>
    <use-space>
    <use-button>Item1</use-button>
    <use-button>Item2</use-button>
    <use-button>Item3</use-button>
  </use-space>
</template>
<style>
.space-item{
  background-color:#4d9375;
  color:#fff;
  line-height:30px;
  text-align:center;
}
</style>
```

:::

## 间隔距离

通过`size`属性设置间隔的距离

:::demo 

```vue
<template>
  <use-space :size="size" fill>
    <use-button>Item1</use-button>
    <use-button>Item2</use-button>
    <use-button>Item3</use-button>
  </use-space>

  <use-space style="margin-top:10px">
    <use-button icon="jiahao" circle @click="handleSize('plus')"></use-button>
    <use-button icon="jianhao" circle @click="handleSize('sub')"></use-button>
  </use-space>
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

## 环绕间隔

环绕类型的间距，四周都有间距，一般用于换行的场景。

:::demo 

```vue
<template>
  <use-space style="width:300px" wrap>
    <use-button>Item1</use-button>
    <use-button>Item2</use-button>
    <use-button>Item3</use-button>
    <use-button>Item4</use-button>
    <use-button>Item5</use-button>
    <use-button>Item6</use-button>
    <use-button>Item7</use-button>
    <use-button>Item8</use-button>
    <use-button>Item9</use-button>
  </use-space>
</template>
```
:::


## `<Space>` Props
| 参数名 | 描述                 | 类型                   | 默认值    |
| -------- | ---------------------- | ------------------------ | ------------ |
| dirction | 间隔方向           | `vertical`、`horizontal` | `horizontal` |
| size     | 间隔大小           | number                   | 5            |
| wrap     | 环绕间隔，折行后的间隔 | boolean                  | false        |
| fill     | 充满整行           | boolean                  | false        |
