<h1>表单 Form</h1>

<h2>基本用法</h2>

表单的基本用法

:::demo 

```vue
<template>
  <use-form :model="form" :label-width="50">
   <use-form-item label="name:" prop="name">
    <use-input v-model:value="form.name"></use-input>
   </use-form-item>
   <use-form-item label="post:" prop="post">
    <use-input v-model:value="form.post"></use-input>
   </use-form-item>
   <use-form-item label="city:" prop="city">
    <use-select v-model:value="form.city" :options="options"></use-select>
   </use-form-item>
   <use-form-item>
    <use-button @click="register">Register</use-button>
   </use-form-item>
  </use-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
  name:'',
  post:'',
  city:''
}) 

const options = [
  {
    value:'Beijing',
    label:'北京'
  },
  {
    value:'HengShui',
    label:'衡水'
  },
  {
    value:'Disabled',
    label:'Disabled',
    disabled:true
  }
]

const register = () => {
  console.log('register....')
}

</script>
```
:::
