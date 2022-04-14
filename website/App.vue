<template>
  <use-date-picker v-model:value="value" type="day"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref(new Date())
</script>
