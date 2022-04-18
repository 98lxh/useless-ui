<template>
  <use-date-picker v-model:value="value" type="month" placeholder="请选择一个月份"></use-date-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
