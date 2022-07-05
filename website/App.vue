<template>
  selectItems:{{ JSON.stringify(selectItems) }}
  <use-table :columns="columns" :data="data" @select-change="handleSelect" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const selectItems = ref([]);
const columns = [
  {
    type: "selection",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age: 25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Li Si",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2017-10-04",
  },
  {
    name: "Wang Wu",
    age: 19,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];

const handleSelect = (rows) => {
  selectItems.value = rows.map((row) => row.name);
};
</script>
