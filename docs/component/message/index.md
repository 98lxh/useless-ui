<h1>全局提醒 Message</h1>

<h2>基本使用</h2>

全局提醒的用法

:::demo 

```vue
<template>
  <use-button @click="()=>this.$message('Info Message')">Info Message</use-button>
</template>
```
:::

<h2>消息类型</h2>

全局消息有4种不同类型分别为`info`(默认)、`success`、`warning`、`error`

:::demo 

```vue
<template>
  <use-space>
    <use-button @click="()=>this.$message(createMessage('info'))">Info Message</use-button>
    <use-button status="success" @click="()=>this.$message(createMessage('success'))">Success Message</use-button>
    <use-button status="warning" @click="()=>this.$message(createMessage('warning'))">Warning Message</use-button>
    <use-button status="danger" @click="()=>this.$message(createMessage('error'))">Error Message</use-button>
  </use-space>
</template>
<script setup>
const createMessage = (type) => ({
  message:`${type} Message`,
  type
})
</script>
```
:::

<h2>消息显示时间</h2>

通过`duration`属性设置消息的显示时间,默认为`3000ms`

:::demo 

```vue
<template>
  <use-space>
    <use-button @click="()=>this.$message(createMessage(1000))">1000 ms</use-button>
    <use-button @click="()=>this.$message(createMessage(3000))">3000 ms</use-button>
    <use-button @click="()=>this.$message(createMessage(5000))">5000 ms</use-button>
    <use-button @click="()=>this.$message(createMessage(10000))">10000 ms</use-button>
  </use-space>
</template>
<script setup>
const createMessage = (duration) => ({
  message:`${duration}ms 后自动关闭`,
  type:'info',
  duration
})
</script>
```
:::

MessageMethod
| 参数名 | 描述                     | 类型                                | 默认值 |
| --------- | -------------------------- | ------------------------------------- | ------ |
| message   | 消息内容               | string                                | -      |
| id        | 节点的唯一id          | string                                | -      |
| type      | 消息的类型            | `info`、`error`、`warning`、`success` | `info` |
| durcation | 消息显示的持续时间 | number (ms)                           | 3000   |
| onClose   | 关闭时的回调(节点未被销毁) | ()=>void                              | -      |
