<Toc />

# 输入框 Input

## 基本用法

输入框的基本用法。

:::demo 

```vue
<template>
  <use-space :size="15">
    <use-input placeholder="Place enter"></use-input>
    <use-input value="Content"></use-input>
  </use-space>
</template>
```
:::

## 输入框的状态

输入框可以设置禁用和错误状态。

:::demo 

```vue
<template>
  <use-space :size="15" direction="vertical">
    <use-input placeholder="Disabled" disabled></use-input>
    <use-input placeholder="Error" error></use-input>
    <use-input placeholder="Default"></use-input>
  </use-space>
</template>
```
:::

## 前缀和后缀

通过传入`prefix`和`suffix`插槽在输入框内添加前缀和后缀

:::demo 

```vue
<template>
  <use-space :size="15" direction="vertical">
    <use-input placeholder="Place enter user info">
      <template #prefix>
        <use-icon name="user"></use-icon>
      </template>
    </use-input>
     <use-input placeholder="Loading...">
      <template #suffix>
        <use-icon name="loading"></use-icon>
      </template>
    </use-input>
      <use-input placeholder="Loading user information">
      <template #prefix>
        <use-icon name="user"></use-icon>
      </template>
      <template #suffix>
        <use-icon name="loading"></use-icon>
      </template>
    </use-input>
  </use-space>
</template>
```
:::

## 密码输入框

用于输入密码,可以通过`show-password`属性配置是否可以显示密码内容

:::demo 

```vue
<template>
  <use-space :size="15" direction="vertical">
    <use-input placeholder="Connot be displayed in clear text" 
               v-model:value="password"
               type="password"
               >
    </use-input>
     <use-input placeholder="Can be displayed in clear text" 
                v-model:value="password"
                type="password"
                show-password
                >
    </use-input>
  </use-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
</script>
```
:::


## `<Input>` Props

| 参数名      | 描述           | 类型              | 默认值 |
| -------------- | ---------------- | ------------------- | ------ |
| value(v-model) | 绑定值        | string              | -      |
| disabled       | 是否禁用     | boolean             | false  |
| error          | 是否为错误状态 | boolean             | false  |
| placeholder    | 提示文字     | string              | -      |
| type           | input的类型   | 'text' | 'password' | 'text' |
| show-passoword | 是否可以显示密码 | boolean             | false  |


## `<Input>` Slots
| 参数名 | 描述   | 类型 |
| ------ | -------- | ---- |
| suffix | 前缀元素 | -    |
| prefix | 后缀元素 | -    |
