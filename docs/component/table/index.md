<Toc />

# 表格 Table

## 基本用法

:::demo 

```vue
<template>
  <use-table
    :columns="columns"
    :data="data"
  />
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age:25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];
</script>
```
:::


## 固定表头

通过设置`max-height`属性,即可实现表头固定

:::demo 

```vue
<template>
  <use-table
    :columns="columns"
    :data="data"
    :max-height="200"
  />
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age:25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Li Si",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2017-10-04",
  },
  {
    name: "Wang Wu",
    age: 19,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
   {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
   {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];
</script>
```
:::

## 固定列

:::demo 

```vue
<template>
  <use-table
    :columns="columns"
    :data="data"
    :max-height="200"
  />
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Name",
    key: "name",
    fixed: "left"
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
   {
    title: "code",
    key: "code",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age:25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
    code:1000
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    code:1000
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    code:1000
  },
  {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    code:1000
  },
];
</script>
```
:::


## 排序-默认

对表格进行排序，可快速查找或对比数据。

为需要排序的字段添加`sortable`属性,可以通过`sortType`指定排序方式`asc升序`、`desc降序`、`normal默认`

:::demo 

```vue
<template>
  <use-table
    :columns="columns"
    :data="data"
  />
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    sortable:true,
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age:25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Li Si",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2017-10-04",
  },
  {
    name: "Wang Wu",
    age: 19,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
   {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
   {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];
</script>
```
:::

## 多选

添加一个`selection`为`true`的`column`,即可实现多选操作,可以通过`select-change`方法实时获取当前选定项

:::demo 

```vue
<template>
  selectItems:{{JSON.stringify(selectItems)}}
  <use-table
    :columns="columns"
    :data="data"
    @select-change="handleSelect"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectItems = ref([])
const columns = [
  {
    type:'selection'
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age:25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Li Si",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2017-10-04",
  },
  {
    name: "Wang Wu",
    age: 19,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
   {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];

const handleSelect = (rows) => {
  selectItems.value = rows.map(row => row.name)
}
</script>
```
:::

