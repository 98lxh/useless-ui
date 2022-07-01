<template>
  <use-table :columns="columns" :data="data" :max-height="200" :scroll-x="1200" />
</template>
<script setup lang="ts">
import { ref, h } from "vue";
const columns = ref([
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
  {
    title: "status",
    key: "status",
    fixed: "right",
    render(row) {
      return h(
        "button",
        {
          class: `u-button u-button--secondary u-button--default u-button--small ${
            row.status ? "u-button--success" : "u-button--danger"
          }`,
        },
        {
          default: () => (row.status ? "启用" : "禁用"),
        }
      );
    },
  },
]);

const data = ref([
  {
    name: "Liu Xuehan",
    age: 25,
    address: "Hengshui, Hebei",
    date: "1997-12-23",
    code: "1000",
    status: true,
  },
  {
    name: "Li Ming",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
    code: "1000",
    status: true,
  },
  {
    name: "Zhang San",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
    code: "1000",
    status: false,
  },
  {
    name: "Li Si",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2017-10-04",
    code: "1000",
    status: false,
  },
  {
    name: "Wang Wu",
    age: 19,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    code: "1000",
    status: false,
  },
  {
    name: "Han Meimei",
    age: 37,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    code: "1000",
    status: false,
  },
  {
    name: "Li Lei",
    age: 28,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
    code: "1000",
    status: false,
  },
]);
</script>
