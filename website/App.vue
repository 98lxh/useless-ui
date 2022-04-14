<template>
  <use-space>
    {{YearValue}}
    {{monthValue}}
    {{value}}
    <use-date-picker v-model:value="value" type="date" placeholder="选择一个日期" disabled></use-date-picker>
    <use-date-picker v-model:value="monthValue" type="month" placeholder="选择一个日期"></use-date-picker>
    <use-date-picker v-model:value="YearValue" type="year" placeholder="选择一个日期"></use-date-picker>
  </use-space>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref(null)
const monthValue = ref(null)
const YearValue = ref(null)
</script>
