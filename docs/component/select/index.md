<Toc />

# 选择器 Select

## 基本用法

:::demo 

```vue
<template>
  <p>当前选中:{{value}}</p>
  <use-select v-model:value="value" :options="options" placeholder="请选择一个城市" />
</template>
<script setup>
import {ref} from 'vue';
const value = ref('')
const options =  [
        {
          label: "Beijing",
          value: 'Beijing',
        },
        {
          label: 'Shanghai',
          value: 'Shanghai',
          disabled:true,
        },
        {
          label: 'Guangzhou',
          value: 'Guangzhou'
        },
        {
          label: "Shenzhen",
          value: 'Shenzhen',
        },
      ]
</script>
```
:::


## 验证状态

:::demo 

```vue
<template>
  <use-space direction="vertical">
    <use-select v-model:value="value" :options="options" placeholder="默认状态" />
    <use-select v-model:value="value" error :options="options" placeholder="错误状态" />
  </use-space>
</template>
<script setup>
import {ref} from 'vue';
const value = ref('')
const options =  [
        {
          label: "Beijing",
          value: 'Beijing',
          disabled:true,
        },
        {
          label: 'Shanghai',
          value: 'Shanghai',
        },
        {
          label: 'Guangzhou',
          value: 'Guangzhou'
        },
        {
          label: "Shenzhen",
          value: 'Shenzhen',
        },
      ]
</script>
```
:::


## 多选
TODO...

## 加载中
TODO...

## 远程搜索
TODO...
