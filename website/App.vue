<template>
 <use-space style="padding:60px" >
  <use-input v-model:value="value" type="password"></use-input>
 </use-space>
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref('')
</script>
