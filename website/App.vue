<template>
   <span>当前勾选节点{{chekcedKeys}}:</span>
   <span>当前选择节点{{selectedKey}}:</span>
  <u-tree :data="treeData" checkable v-model:checkedKeys="chekcedKeys" v-model:selectedKey="selectedKey" check-strictly></u-tree>
</template>
<script setup>
import {ref} from "vue";
const chekcedKeys = ref([])
const selectedKey = ref('')
  const treeData = [
    {
      label: 'Trunk 0-0',
      key: '0-0',
      expanded:true,
      children: [
        {
          label: 'Branch 0-0-0',
          key: '0-0-0',
          disabled:true,
          children: [
            {
              label: 'Leaf',
              key: '0-0-0-0',
            },
            {
              label: 'Leaf',
              key: '0-0-0-1',
            }
          ]
        },
        {
          label: 'Branch 0-0-1',
          key: '0-0-1',
          children: [
            {
              label: 'Leaf',
              key: '0-0-1-0',
            },
          ]
        },
      ],
    },
  ];
</script>
