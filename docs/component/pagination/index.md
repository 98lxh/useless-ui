<Toc />

# 分页 Pagination

## 基本使用

分页的基本用法

:::demo 

```vue
<template>
  <use-pagination
    v-model:current-page="currentPage"
    :total="5"
    @change="handleChange"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const currentPage = ref(5);
</script>
```
:::

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，`Pagination` 会折叠多余的页码按钮。 通过`pager-count`属性可以设置最大页码按钮数。

:::demo 

```vue
<template>
  <use-pagination
    v-model:current-page="currentPage"
    :total="100"
    :page-count="10"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const currentPage = ref(50);
</script>
```
:::


## 背景颜色

通过 `background` 属性为 `Pagination` 设置背景颜色

:::demo 

```vue
<template>
  <use-pagination
    v-model:current-page="currentPage"
    :total="100"
    :page-count="10"
    background
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const currentPage = ref(50);
</script>
```
:::


## `<Pagination>` Props

| 参数名        | 描述                 | 类型        | 默认值          |
| ---------------- | ---------------------- | ------------- | ------------------ |
| curren-page(v-model) | 当前页码  | number       |     1              |
| total   | 总条目数量| number | 无 |     1
| page-count     | 显示的条目树 | number       | 5               |
| background   | 是否显示背景颜色  | boolean | false  |
| cancelText     | 取消按钮文字 | string       | '取消'               |


## `<Pagination>` Events
| 事件名 | 描述           | 参数 |
| ------- | ---------------- | ---- |
| change | 页码改变时触发 | 新的当前页码    |
