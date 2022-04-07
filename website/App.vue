<script lang="ts" setup>
import type { TreeNodeOption } from '@useless-ui/tree/src/tree.types';
import { ref } from 'vue';

  const data = ref<TreeNodeOption[]>()

  const getSourceData = (path='0',level=1) => {
    if(level === 5) return []
    const res:TreeNodeOption[] = []
    for(let i = 0;i<2;i++){
      const nodeKey = `${path}-${i}`
      const currentNode = {
        key:nodeKey,
        label:nodeKey,
        children:[]
      }
      res.push(currentNode)
      currentNode.children = getSourceData(nodeKey,level + 1)
    }
    return res
  }

  data.value = getSourceData()
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
