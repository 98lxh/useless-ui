<template>
  <use-table :columns="columns" :data="data" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const columns = ref([
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
    filterOption: [
      {
        label: "地址在河北",
        value: "Hebei",
      },
      {
        label: "地址在北京",
        value: "Beijing",
      },
    ],
    filter(row, value) {
      return row.address.includes(value);
    },
  },
]);

const data = ref([
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
    address: "Beijing",
    date: "2016-10-02",
  },
  {
    name: "Li Si",
    age: 26,
    address: "Hebei",
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
]);
</script>
