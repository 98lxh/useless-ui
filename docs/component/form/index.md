# 表单 Form

<h2>基本用法</h2>

表单的基本用法

:::demo 

```vue
<template>
  <use-space wrap>
    <div>{{JSON.stringify(formModel)}}</div>
  </use-space>
  <use-form :model="formModel" :label-width="50">
   <use-form-item label="name:" prop="name">
    <use-input v-model:value="formModel.name"></use-input>
   </use-form-item>
   <use-form-item label="post:" prop="post">
    <use-input v-model:value="formModel.post"></use-input>
   </use-form-item>
   <use-form-item label="city:" prop="city">
    <use-select v-model:value="formModel.city" :options="options"></use-select>
   </use-form-item>
   <use-form-item>
    <use-button @click="register">Register</use-button>
   </use-form-item>
  </use-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const formModel = reactive({
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


<h2>表单布局</h2>

:::demo 

```vue
<template>
  <use-space wrap fill>
    <div>{{JSON.stringify(formModel)}}</div>
  </use-space>
  <use-space wrap>
    <use-button @click="changeLayout('horizontal')">switch horizontal</use-button>
    <use-button @click="changeLayout('vertical')">switch vertical</use-button>
    <use-button @click="changeLayout('inline')">switch inline</use-button>
  </use-space>
  <use-form :model="formModel" :label-width="50" :layout="layout">
   <use-form-item label="name:" prop="name">
    <use-input v-model:value="formModel.name"></use-input>
   </use-form-item>
   <use-form-item label="post:" prop="post">
    <use-input v-model:value="formModel.post"></use-input>
   </use-form-item>
   <use-form-item label="city:" prop="city">
    <use-select v-model:value="formModel.city" :options="options"></use-select>
   </use-form-item>
   <use-form-item>
    <use-button @click="register">Register</use-button>
   </use-form-item>
  </use-form>
</template>
<script setup lang="ts">
import { reactive , ref } from 'vue';

const layout = ref('horizontal')

const formModel = reactive({
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

const changeLayout = (currentLayout) => {
  layout.value = currentLayout
}

const register = () => {
  console.log('register....')
}

</script>
```
:::

<h2>表单校验</h2>

:::demo 

```vue
<template>
  <use-space wrap>
    <div>{{JSON.stringify(formModel)}}</div>
  </use-space>
  <use-form :model="formModel" :label-width="100" :rules="rules" ref="formRef">
   <use-form-item label="name:" prop="name">
    <use-input v-model:value="formModel.name"></use-input>
   </use-form-item>
   <use-form-item label="password:" prop="password">
    <use-input v-model:value="formModel.password"></use-input>
   </use-form-item>
   <use-form-item label="email:" prop="email">
    <use-input v-model:value="formModel.email"></use-input>
   </use-form-item>
   <use-form-item label="city:" prop="city">
    <use-select v-model:value="formModel.city" :options="options"></use-select>
   </use-form-item>
   <use-form-item label="birthday:" prop="birthday">
    <use-date-picker v-model:value="formModel.birthday"></use-select>
   </use-form-item>
   <use-form-item>
    <use-button @click="register">Register</use-button>
   </use-form-item>
  </use-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
const formRef = ref()
const formModel = reactive({
  name:'',
  password:'',
  city:'',
  email:'',
  birthday:null
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

const rules = {
  'name': [
    { max: 6, min: 3, message: '用户名必须在3~6位之间' },
    { required: true, message: '用户名不能为空' }
  ],
  'password': [
    { max: 16, min: 6, message: '密码必须在6~16位之间' },
    { required: true, message: '密码不能为空' }
  ],
  'email': [
   { required: true, message: '邮箱不能为空' },
   {
      validator: (rule, value) => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return reg.test(value)
      },
      message:'邮箱格式不正确'
   }
  ],
  'city': {
    required: true,
    message: '请选择一个城市',
  },
  'birthday': {
    required: true,
    message: '请选择出生日期',
  },
}


const register = () => {
  formRef.value.validate((hasError)=> {
    if(!hasError){
      console.log('register....')
    }
  })
}

</script>
```
:::
