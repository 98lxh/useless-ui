<template>
 <use-space style="padding:60px" >
    <use-input v-model:value="value" disabled placeholder="disabled"></use-input>
    <use-input v-model:value="value" error placeholder="error"></use-input>
    <use-input v-model:value="value" placeholder="default"></use-input>

    <use-input v-model:value="value" placeholder="prefix">
      <template #prefix>
         <use-icon name="user"></use-icon>
      </template>
      <template #suffix>
         <use-icon name="user"></use-icon>
      </template>
    </use-input>
 </use-space>
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref('')
</script>
