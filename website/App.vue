<script lang="ts" setup>
import {Message} from "useless-ui"
let id = 0
 const showMessage = (type:any) => {
   Message({
     message:'这是一条消息',
     type,
   })
 }


</script>
<template>
<div style="padding:20px">
  <u-button @click="showMessage('info')" type="primary">info Message</u-button>
  <u-button @click="showMessage('error')" type="danger">error Message</u-button>
  <u-button @click="showMessage('warning')" type="warning">warning Message</u-button>
  <u-button @click="showMessage('success')" type="success">success Message</u-button>
</div>
</template>
