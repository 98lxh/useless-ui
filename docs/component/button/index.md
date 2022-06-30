<Toc />

# 按钮 Button

## 基本用法

按钮分为 `primary` 主要按钮 `secondary`次要按钮  `dashed` 虚线按钮、`outline` 线形按钮、`text` 文本按钮四种类型。

:::demo 

```vue
<template>
  <use-space>
    <use-button type="primary">Primary</use-button>
    <use-button>Secondary</use-button>
    <use-button type="dashed">Dashed</use-button>
    <use-button type="outline">Outline</use-button>
    <use-button type="text">Text</use-button>
  </use-space>
</template>
```
:::

## 图标按钮

通过`icon`属性为`button`嵌入图标

:::demo 

```vue
<template>
  <use-space>
    <use-button type="primary" icon="setting"></use-button>
    <use-button type="primary" icon="setting">Setting</use-button>
  </use-space>
</template>
```
:::

## 按钮形状

按钮分为`square`长方形(默认)、`circle`两种形状

:::demo 

```vue
<template>
  <use-space>
    <use-button type="primary">Square</use-button>
    <use-button type="primary" icon="setting" circle></use-button>
  </use-space>
</template>
```
:::

## 按钮尺寸

通过`size`属性设置按钮尺寸，分为`small`小、`default`默认、`large`大

:::demo 

```vue
<template>
  <use-space :size="20">
    <use-button size="small">Samll</use-button>
    <use-button size="default">Default</use-button>
    <use-button size="large">Large</use-button>
  </use-space>
</template>
```
:::

## 按钮状态

通过`status`属性设置`button`的状态,分为`normal`正常(默认),`success`成功、`warning`警告、`danger`危险

:::demo 

```vue
<template>
 <use-space>
  <use-space direction="vertical">
    <use-button type="primary" status="success">Success</use-button>
    <use-button type="primary" status="warning">Warning</use-button>
    <use-button type="primary" status="danger">Danger</use-button>
  </use-space>
  <use-space direction="vertical">
    <use-button status="success">Success</use-button>
    <use-button status="warning">Warning</use-button>
    <use-button status="danger">Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button status="success"  type="outline">Success</use-button>
    <use-button status="warning"  type="outline">Warning</use-button>
    <use-button status="danger"  type="outline">Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button status="success"  type="dashed">Success</use-button>
    <use-button status="warning"  type="dashed">Warning</use-button>
    <use-button status="danger"  type="dashed">Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button status="success"  type="text">Success</use-button>
    <use-button status="warning"  type="text">Warning</use-button>
    <use-button status="danger"  type="text">Danger</use-button>
  </use-space>
 </use-space>
</template>
```
:::


## 禁用按钮

通过`disabled`属性设置按钮禁用状态

:::demo 

```vue
<template>
 <use-space>
   <use-space direction="vertical">
    <use-button type="primary" disabled>Normal</use-button>
    <use-button type="primary" status="success" disabled>Success</use-button>
    <use-button type="primary" status="warning" disabled>Warning</use-button>
    <use-button type="primary" status="danger" disabled>Danger</use-button>
  </use-space>
  <use-space direction="vertical">
    <use-button disabled>Normal</use-button>
    <use-button status="success" disabled>Success</use-button>
    <use-button status="warning" disabled>Warning</use-button>
    <use-button status="danger" disabled>Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button type="outline" disabled>Normal</use-button>
    <use-button status="success"  type="outline" disabled>Success</use-button>
    <use-button status="warning"  type="outline" disabled>Warning</use-button>
    <use-button status="danger"  type="outline" disabled>Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button type="dashed" disabled>Normal</use-button>
    <use-button status="success"  type="dashed" disabled>Success</use-button>
    <use-button status="warning"  type="dashed" disabled>Warning</use-button>
    <use-button status="danger"  type="dashed" disabled>Danger</use-button>
  </use-space>
  <use-space direction="vertical" >
    <use-button type="text" disabled>Normal</use-button>
    <use-button status="success"  type="text" disabled>Success</use-button>
    <use-button status="warning"  type="text" disabled>Warning</use-button>
    <use-button status="danger"  type="text" disabled>Danger</use-button>
  </use-space>
 </use-space>
</template>
```
:::

## 加载状态

通过设置`loading`属性，更改`button`加载状态

:::demo 

```vue
<template>
  <use-space :size="20">
    <use-button loading>Loading</use-button>
    <use-button loading type="outline">Loading</use-button>
    <use-button :loading="loading" @click="showLoading">Click Me</use-button>
  </use-space>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(false)
const showLoading = () => {
  loading.value = true
}
</script>
```
:::


## 按钮组合

通过`use-button-group`组件使按钮以组合的形式出现

:::demo 

```vue
<template>
  <use-space :size="20" direction="vertical">
    <use-button-group>
      <use-button >Prev</use-button>
      <use-button>Next</use-button>
    </use-button-group>
    
    <use-button-group>
      <use-button>User</use-button>
      <use-button icon="user"></use-button>
    </use-button-group>
  </use-space>
</template>
```
:::


## `Button` Props

| 参数名 | 描述         | 类型                                      | 默认值 |
| -------- | -------------- | ------------------------------------------- | --------- |
| type     | 按钮的类型 | `primary`、`dashed`、`outline` 、`text` 、 `secondary`      | `secondary`|
| cricle   | 按钮是否圆角 | boolean                                     | false     |
| status   | 按钮的状态 | `normal` 、 `warning` 、 `success` 、 `danger` | `normal`  |
| size     | 按钮的尺寸 | `small` 、 `default` 、 `large`               | `default` |
| loading  | 按钮是否加载中 | boolean                                     | false     |
| disabled | 按钮是否禁用 | boolean                                     | false     |

## `Button` Event

| 事件名 | 描述         | 参数        |
| ------ | -------------- | ------------- |
| click  | 点击按钮时触发 | event:`Event` |
