<script lang="ts" setup>
import type { TreeNodeOption } from '@useless-ui/tree/src/tree.types';
import { ref } from 'vue';

  const data = ref<TreeNodeOption[]>()

  // const getSourceData = (path='0',level=1) => {
  //   if(level === 5) return []
  //   const res:TreeNodeOption[] = []
  //   for(let i = 0;i<2;i++){
  //     const nodeKey = `${path}-${i}`
  //     const currentNode = {
  //       key:nodeKey,
  //       label:nodeKey,
  //       children:[]
  //     }
  //     res.push(currentNode)
  //     currentNode.children = getSourceData(nodeKey,level + 1)
  //   }
  //   return res
  // }

  data.value = [
    {
      label: "一级",
      key: "1",
      children: [
        {
          label: "一级1",
          key: "2",
        },
        {
          label: "一级2",
          key: "3",
        },
        {
          label: "一级3",
          key: "4",
          children: [
            {
              label: "一级3-1",
              key: "5",
            },
            {
              label: "一级3-2",
              key: "27",
              children: [
                {
                  label: "一级3-2-1",
                  key: "6",
                },
                {
                  label: "一级3-2-2",
                  key: "7",
                },
                {
                  label: "一级3-2-3",
                  key: "8",
                },
              ],
            },
            {
              label: "一级3-3",
              key: "9",
            },
          ],
        },
      ],
    },
    {
      label: "二级",
      key: "10",
      children: [
        {
          label: "二级1",
          key: "11",
        },
        {
          label: "二级2",
          key: "12",
        },
        {
          label: "二级3",
          key: "13",
          children: [
            {
              label: "二级3-1",
              key: "14",
              children: [
                {
                  label: "二级3-1-1",
                  key: "15",
                },
                {
                  label: "二级3-1-2",
                  key: "16",
                },
                {
                  label: "二级3-1-3",
                  key: "17",
                },
              ],
            },
            {
              label: "二级3-2",
              key: "18",
            },
            {
              label: "二级3-3",
              key: "19",
            },
          ],
        },
      ],
    },
    {
      label: "三级",
      key: "20",
      children: [
        {
          label: "三级1",
          key: "21",
        },
        {
          label: "三级2",
          key: "22",
        },
        {
          label: "三级3",
          key: "23",
          children: [
            {
              label: "三级3-1",
              key: "24",
            },
            {
              label: "三级3-2",
              key: "25",
            },
            {
              label: "三级3-3",
              key: "26",
            },
          ],
        },
      ],
    },
  ]
  const handleSelect = (key:string) => {
    console.log(key)
  }
  const handleCheckedChange = (key:string[]) => {
    console.log(key)
  }

  const defaultExpaned = ['0-0','0-0-0']
</script>
<template>
<div>
  <u-tree :data="data" :defaultExpaned="defaultExpaned" @select="handleSelect" @checkedChange="handleCheckedChange" checkable checkStrictly></u-tree>
</div>
</template>
