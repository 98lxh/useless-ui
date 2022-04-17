<template>
<div style="padding:300px">
  <use-date-picker v-model:value="value" type="range" :placeholder="['开始时间','结束时间']"></use-date-picker>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null)
</script>
