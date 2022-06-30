# 折叠渐变 Collapse Transition

## 基本使用

为一个不定高度的元素绑定折叠渐变

:::demo 

```vue
<template>
  <div style="height:350px">
    <use-button @click="handleCollapse">{{collapse ? 'close' : 'open'}}</use-button>
    <use-collapse-transition :delay=".6">
      <div class='collapse-content' v-show="collapse">
        content
      </div>
    </use-collapse-transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const collapse = ref(true)

const handleCollapse = () => {
  collapse.value = !collapse.value
}
</script>
<style>
.collapse-content{
 height:300px;
 width:300px;
 line-height:300px;
 text-align:center;
 font-weight:bold;
 background:#f1f1f1;
 margin-top:20px;
}
</style>
```
:::

## `<CollapseTransition>` Props
| 参数名      | 描述           | 类型              | 默认值 |
| -------------- | ---------------- | ------------------- | ------ |
| delay | 动画时间       | number              | 0.3(s)     |
