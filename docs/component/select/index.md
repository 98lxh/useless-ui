<h1>选择器 Select</h1>

<h2>基本用法</h2>

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
          value: 'Shanghai'
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
