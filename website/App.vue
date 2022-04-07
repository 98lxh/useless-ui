<script lang="ts" setup>
import {Message} from "useless-ui"
let id = 0
 const showMessage = () => {
   Message({
     message:'消息',
     type:'success'
   })
 }


</script>
<template>
<div style="padding:20px">
  <u-button @click="showMessage" type="primary">消息</u-button>
</div>
</template>
