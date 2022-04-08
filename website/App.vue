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
  <u-space wrap direction="horizantal" >
    <u-button @click="showMessage('info')" type="primary" style="width:100%">info Message</u-button>
    <u-button @click="showMessage('error')" type="danger">error Message</u-button>
    <u-button @click="showMessage('warning')" type="warning">warning Message</u-button>
    <u-button @click="showMessage('success')" type="success">success Message</u-button>
    <u-button @click="showMessage('success')" type="success">success Message</u-button>
    <u-button @click="showMessage('success')" type="success">success Message</u-button>
    <u-button @click="showMessage('success')" type="success">success Message</u-button>
  </u-space>
</template>
