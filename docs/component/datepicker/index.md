<Toc />

# 日期选择 DatePicker

## 基本使用

日期选择器的基本用法
:::demo 

```vue
<template>
  <use-date-picker v-model:value="value" type="date" placeholder="请选择一个日期"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
```
:::

## 月份选择器

月份选择选择器的基本用法
:::demo 

```vue
<template>
  <use-date-picker v-model:value="value" type="month" placeholder="请选择一个月份"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
```
:::


## 年份选择器

年份选择选择器的基本用法
:::demo 

```vue
<template>
  <use-date-picker v-model:value="value" type="year" placeholder="请选择一个月份"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
```
:::


## 范围选择器

范围选择器的基本用法
:::demo 

```vue
<template>
  <use-date-picker v-model:value="value" type="range" :placeholder="['开始时间','结束时间']"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
```
:::

## 验证状态

:::demo 

```vue
<template>
  <use-space direction="vertical">
    <use-date-picker v-model:value="value" placeholder="默认状态"></use-date-picker>
    <use-date-picker v-model:value="value" error placeholder="错误状态"></use-date-picker>
  </use-space>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
```
:::



## `DatePicker` Props

<h1>TODO</h1>


## `DatePicker` Slots

<h1>TODO</h1>

## `DatePicker` Events

<h1>TODO</h1>
