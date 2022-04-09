# Button 按钮

<h2>基本用法</h2>

按钮分为 `primary` 主要按钮 `dashed` 虚线按钮、`outline` 线形按钮、`text` 文本按钮四种类型。

:::demo 

```vue
<template>
  <u-space>
    <u-button>Primary</u-button>
    <u-button type="dashed">Dashed</u-button>
    <u-button type="outline">Outline</u-button>
    <u-button type="text">Text</u-button>
  </u-space>
</template>
```
:::

<h2>图标按钮</h2>

通过`icon`属性为`button`嵌入图标

:::demo 

```vue
<template>
  <u-space>
    <u-button icon="setting"></u-button>
    <u-button icon="setting">Setting</u-button>
  </u-space>
</template>
```
:::

<h2>按钮形状</h2>

按钮分为`square`长方形(默认)、`circle`两种形状

:::demo 

```vue
<template>
  <u-space>
    <u-button>Square</u-button>
    <u-button icon="setting" circle></u-button>
  </u-space>
</template>
```
:::

<h2>按钮尺寸</h2>

通过`size`属性设置按钮尺寸，分为`small`小、`default`默认、`large`大

:::demo 

```vue
<template>
  <u-space :size="20">
    <u-button size="small">Samll</u-button>
    <u-button size="default">Default</u-button>
    <u-button size="large">Large</u-button>
  </u-space>
</template>
```
:::

<h2>按钮状态</h2>

通过`status`属性设置`button`的状态,分为`normal`正常(默认),`success`成功、`warning`警告、`danger`危险

:::demo 

```vue
<template>
 <u-space>
  <u-space direction="vertical">
    <u-button status="success">Success</u-button>
    <u-button status="warning">Warning</u-button>
    <u-button status="danger">Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button status="success"  type="outline">Success</u-button>
    <u-button status="warning"  type="outline">Warning</u-button>
    <u-button status="danger"  type="outline">Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button status="success"  type="dashed">Success</u-button>
    <u-button status="warning"  type="dashed">Warning</u-button>
    <u-button status="danger"  type="dashed">Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button status="success"  type="text">Success</u-button>
    <u-button status="warning"  type="text">Warning</u-button>
    <u-button status="danger"  type="text">Danger</u-button>
  </u-space>
 </u-space>
</template>
```
:::


<h2>禁用按钮</h2>

通过`disabled`属性设置按钮禁用状态

:::demo 

```vue
<template>
 <u-space>
  <u-space direction="vertical">
    <u-button disabled>Success</u-button>
    <u-button status="success" disabled>Success</u-button>
    <u-button status="warning" disabled>Warning</u-button>
    <u-button status="danger" disabled>Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="outline" disabled>Primary</u-button>
    <u-button status="success"  type="outline" disabled>Success</u-button>
    <u-button status="warning"  type="outline" disabled>Warning</u-button>
    <u-button status="danger"  type="outline" disabled>Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="dashed" disabled>Primary</u-button>
    <u-button status="success"  type="dashed" disabled>Success</u-button>
    <u-button status="warning"  type="dashed" disabled>Warning</u-button>
    <u-button status="danger"  type="dashed" disabled>Danger</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="text" disabled>Primary</u-button>
    <u-button status="success"  type="text" disabled>Success</u-button>
    <u-button status="warning"  type="text" disabled>Warning</u-button>
    <u-button status="danger"  type="text" disabled>Danger</u-button>
  </u-space>
 </u-space>
</template>
```
:::

<h2>加载状态</h2>

通过设置`loading`属性，更改`button`加载状态

:::demo 

```vue
<template>
  <u-space :size="20">
    <u-button loading>Loading</u-button>
    <u-button loading type="outline">Loading</u-button>
    <u-button :loading="loading" @click="showLoading">Click Me</u-button>
  </u-space>
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


<h2>按钮组合</h2>

通过`u-button-group`组件使按钮以组合的形式出现

:::demo 

```vue
<template>
  <u-space :size="20" direction="vertical">
    <u-button-group>
      <u-button >Prev</u-button>
      <u-button>Next</u-button>
    </u-button-group>
    
    <u-button-group>
      <u-button>User</u-button>
      <u-button icon="user"></u-button>
    </u-button-group>
  </u-space>
</template>
```
:::


`Button` Props

| 参数名 | 描述         | 类型                                      | 默认值 |
| -------- | -------------- | ------------------------------------------- | --------- |
| type     | 按钮的类型 | `primary`、`dashed`、`outline` 、`text`        | `primary` |
| cricle   | 按钮是否圆角 | boolean                                     | false     |
| status   | 按钮的状态 | `normal` 、 `warning` 、 `success` 、 `danger` | `normal`  |
| size     | 按钮的尺寸 | `small` 、 `default` 、 `large`               | `default` |
| loading  | 按钮是否加载中 | boolean                                     | false     |
| disabled | 按钮是否禁用 | boolean                                     | false     |

`Button` Event

| 事件名 | 描述         | 参数        |
| ------ | -------------- | ------------- |
| click  | 点击按钮时触发 | event:`Event` |
