# 模态框 Modal

<h2>基本使用</h2>

模态框的基本用法

:::demo 

```vue
<template>
  <use-button @click="handleVisible">Open Modal</use-button>
  <use-modal v-model:visible="visible">
    <template #title>
     <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  <use-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const handleVisible = () => {
  visible.value = true
}
</script>
```
:::

<h2>定制按钮文字</h2>

通过 `confirmText` 和 `canelText` 设置确认按钮和取消按钮的文字内容

:::demo 

```vue
<template>
  <use-button @click="handleVisible">Open Modal</use-button>
  <use-modal v-model:visible="visible" confirmText="Confirm" cancelText="Cancel">
    <template #title>
      <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  <use-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const handleVisible = () => {
  visible.value = true
}
</script>
```
:::

<h2>自定义动画</h2>

通过`originPosition`,`targetPosition`设置动画的开始位置和结束位置

:::demo 

```vue
<template>
  <use-space>
    <use-button @click="handleVisibleTop">Top to Middle</use-button>
    <use-button @click="handleVisibleBottom">LeftTop to RightBottom</use-button>
    <use-button @click="handleVisibleMiddle">Middle to Middle</use-button>
  </use-space>
  <use-modal v-model:visible="visibleTop" 
             confirmText="Confirm" 
             cancelText="Cancel"
             :origin-position="{x:'50%',y:0}"
             >
    <template #title>
      <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  <use-modal>
  <use-modal v-model:visible="visibleBottom" 
             confirmText="Confirm" 
             cancelText="Cancel"
             :origin-position="{x:0,y:0}"
             :target-position="{x:'70%',y:'70%'}"
             >
    <template #title>
      <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  <use-modal>
    <use-modal v-model:visible="visibleMiddle" 
             confirmText="Confirm" 
             cancelText="Cancel"
             :origin-position="{x:'50%',y:'50%'}"
             :target-position="{x:'50%',y:'50%'}"
             >
    <template #title>
      <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  <use-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visibleTop = ref(false)
const visibleBottom = ref(false)
const visibleMiddle = ref(false)
const handleVisibleTop = () => {
  visibleTop.value = true
}
const handleVisibleBottom = () => {
  visibleBottom.value = true
}
const handleVisibleMiddle = () => {
  visibleMiddle.value = true
}
</script>
```
:::


`<Modal>`Props

| 参数名        | 描述                 | 类型        | 默认值          |
| ---------------- | ---------------------- | ------------- | ------------------ |
| visible(v-model) | 对话框是否可见  | boolean       | -                  |
| oirginPosition   | 动画的起始位置  | ModalPosition | 显示事件触发的位置 |
| targetPosition   | 动画的结束位置  | ModalPosition | '{x:'50%',y:'30%'}'  |
| maskClosable     | 是否可以点击遮罩层关闭 | boolean       | true               |
| confirmText   | 确认按钮文字  | string | '确认'  |
| cancelText     | 取消按钮文字 | string       | '取消'               |


`<Modal>`Events
| 事件名 | 描述           | 参数 |
| ------- | ---------------- | ---- |
| confirm | 点击确认按钮触发 | -    |
| cancel  | 点击取消按钮触发 | -    |

`<Modal>`Slost
| 插槽名 | 描述      | 参数 |
| ------ | ----------- | ---- |
| title  | 标题      | -    |
| footer | modal的页脚 | -    |
