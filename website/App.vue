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
  </use-modal>
  <use-modal v-model:visible="visibleBottom" 
             confirmText="Confirm" 
             cancelText="Cancel"
             >
    <template #title>
      <span style="font-weight:600">Title</span>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero adipisci animi quibusdam consequatur voluptate, fugit et architecto? Minus rem perferendis autem iusto quisquam aliquid cupiditate eveniet esse explicabo? Ipsam atque numquam alias nostrum accusantium, incidunt quae consectetur earum. Odio sit culpa eos est velit reprehenderit molestiae ullam totam asperiores explicabo?
  </use-modal>
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
  </use-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visibleTop = ref(false)
const visibleBottom = ref(true)
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
