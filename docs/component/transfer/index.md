<h1>数据穿梭框 Transfer</h1>

<h2>基本用法</h2>



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
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([1,2,3])
</script>
```
:::
