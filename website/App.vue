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
