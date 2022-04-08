<h1>Transfer</h1>

<h2>基本用法</h2>

间距组件的基本用法。

:::demo 

```vue
<template>
  <u-transfer :data="data" v-model="value"></u-transfer>
</template>
<script setup>
import { ref } from 'vue';
const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([])
</script>
```
:::

