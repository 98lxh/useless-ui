<template>
  <use-button @click="handleVisible">Open Modal</use-button>
  <use-modal v-model:visible="visible">
    <template #title>
     <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  </use-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const handleVisible = () => {
  visible.value = true
}
</script>
