<h1>Modal 模态框</h1>

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

