<h1>数据穿梭框 Transfer</h1>

<h2>基本用法</h2>

数据穿梭框的基本用法

:::demo 

```vue
<template>
  <p>当前目标项:{{value}}</p>
  <use-transfer :data="data" v-model="value"></use-transfer>
</template>
<script setup>
import { ref } from 'vue';
const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([1,2,3])
</script>
```
:::

<h2>节点禁用</h2>

通过`disabled`属性设置某一个节点的禁用

:::demo 

```vue
<template>
  <p>当前目标项:{{value}}</p>
  <use-transfer :data="data" v-model="value"></use-transfer>
</template>
<script setup>
import { ref } from 'vue';
const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled:i % 3 === 0
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([1,3])
</script>
```
:::


`<Transfer>`Props
| 参数名            | 描述         | 类型         | 默认值 |
| -------------------- | -------------- | -------------- | ------ |
| model-value(v-model) | 目标项的绑定值 | array          | -      |
| data                 | 穿梭框的数据 | TransferItem[] | []     |


`TransferItem`
| 参数名 | 描述     | 类型  | 默认值 |
| -------- | ---------- | ------- | ------ |
| label    | 选项的标签 | string  | -      |
| key      | 选项的值 | string  | -      |
| disabled | 是否禁用 | boolean | false  |
