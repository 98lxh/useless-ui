<template>
  <use-form :modal="form" :label-width="70" :rules="rules" ref="formRef">
   <use-form-item label="用户名:" prop="name">
    <use-input v-model:value="form.name"></use-input>
   </use-form-item>
   <use-form-item label="密码:" prop="password">
     <use-input v-model:value="form.password"></use-input>
   </use-form-item>
   <use-form-item label="城市:" prop="city">
     <use-select v-model:value="form.city" :options="option"></use-select>
   </use-form-item>
   <use-form-item>
     <use-button @click="submit">登录</use-button>
   </use-form-item>
  </use-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const formRef = ref()

const form = reactive({
  name:'',
  password:'',
  city:''
}) 

const rules = {
    'name':[
      {max:6,min:3,message:'用户名必须在3~6位之间'},
      {required:true,message:'用户名为必填项'}
    ],
   'password':{
      required:true,
      message:'密码为必填项',
   },
   'city':{
      required:true,
      message:'城市为必填项',
   },
}

const option = [
  {
    label:'Shanghai',
    value:'Shanghai'
  }
]

const submit = () => {
  formRef.value.validate((error)=>{
    if(!error) console.log('请求..')
  })
}
</script>
