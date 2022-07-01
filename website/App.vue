<template>
  <use-table :columns="columns" :data="data" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([]);
const columns = ref([
  {
    title: "Name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Address",
    key: "address",
  },
  {
    title: "code",
    key: "code",
    fixed: "right",
  },
  {
    title: "action",
    key: "action",
    fixed: "right",
  },
]);
</script>
