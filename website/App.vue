<script lang="ts" setup>
import type { TreeNodeOption } from '@useless-ui/tree/src/tree.types';
import { ref } from 'vue';

  const data = ref<TreeNodeOption[]>()

  const getSourceData = (path='0',level=1) => {
    if(level === 4) return []
    const res:TreeNodeOption[] = []
    for(let i = 0;i<5;i++){
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
</script>
<template>
<u-tree :data="data"></u-tree>
</template>
