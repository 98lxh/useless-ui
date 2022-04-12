<template>
  <div style="padding:600px 0">
    <use-button @click="handleVisiable">Show Modal</use-button>
    <use-modal v-model:visible="value" cancelText="Cancel" confirmText="Confirm">
      <template #title>
        Title
      </template>
      <div>
        You can cusstomize modal body text by the current situation. This modal will be closed immediately once you press the OK button.
      </div>
    </use-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref(false)
const handleVisiable = () => {
  value.value = true
}
</script>
