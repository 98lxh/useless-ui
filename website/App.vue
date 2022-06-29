<template>
  <use-pagination
    :total="10"
    :page-count="7"
    v-model:current-page="currentPage"
    @change="handleChange"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const currentPage = ref(10);
</script>
