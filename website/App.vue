<template>
  <use-space>
    <use-date-picker v-model:value="value" type="range" :placeholder="['开始时间','结束时间']"></use-date-picker>
    <!-- <use-date-picker v-model:value="monthValue" type="date" placeholder="请选择一个时间"></use-date-picker> -->
    <use-date-picker v-model:value="monthValue" type="date" placeholder="请选择一个时间"></use-date-picker>
  </use-space>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref(null)
const monthValue = ref(null)
const YearValue = ref(null)
</script>
