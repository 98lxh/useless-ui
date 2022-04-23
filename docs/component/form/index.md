<h1>表单 Form</h1>

<h2>基本用法</h2>

表单的基本用法

:::demo 

```vue
<template>
  <use-form :modal="form" :label-width="70" :rules="rules">
   <use-form-item label="用户名:" prop="name">
    <use-input v-model:value="form.name"></use-input>
   </use-form-item>
   <use-form-item label="密码:" prop="password">
    <use-input v-model:value="form.password"></use-input>
   </use-form-item>
  </use-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const form = reactive({
  name:'',
  password:'',
}) 

const rules = {
    'name':{
      message:'用户名必须在6位以上',
      required:true,
      len:6
    },
   'password':{
      required:true,
      message:'密码为必填项',
   },
}

</script>
```
:::
