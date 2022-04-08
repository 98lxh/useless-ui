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

 <u-space>
  <u-space direction="vertical" >
    <u-button type="primary">primary</u-button>
    <u-button status="success"  type="primary">primary</u-button>
    <u-button status="danger"  type="primary">primary</u-button>
    <u-button status="warning"  type="primary">primary</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="outline">error Message</u-button>
    <u-button status="success"  type="outline">error Message</u-button>
    <u-button status="danger"  type="outline">error Message</u-button>
    <u-button status="warning"  type="outline">error Message</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="dashed">error Message</u-button>
    <u-button status="success"  type="dashed">error Message</u-button>
    <u-button status="danger"  type="dashed">error Message</u-button>
    <u-button status="warning"  type="dashed">error Message</u-button>
  </u-space>
  <u-space direction="vertical" >
    <u-button type="text">error Message</u-button>
    <u-button status="success"  type="text">error Message</u-button>
    <u-button status="danger"  type="text">error Message</u-button>
    <u-button status="warning"  type="text">error Message</u-button>
  </u-space>

   <u-space direction="vertical" >
    <u-button type="primary" circle>
      <u-icon name="user"></u-icon>
    </u-button>
    <u-button status="success"  type="text">error Message</u-button>
    <u-button status="danger"  type="text">error Message</u-button>
    <u-button status="warning"  type="text">error Message</u-button>
  </u-space>
 </u-space>
</template>
