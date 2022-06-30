<template>
  <use-table :columns="columns" :data="data" :max-height="200" />
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
  {
    title: "code",
    key: "code",
  },
];

const data = [
  {
    name: "Liu Xuehan",
    age: 18,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
    code: 1000,
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    code: 1000,
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    code: 1000,
  },
  {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    code: 1000,
  },
];
</script>
