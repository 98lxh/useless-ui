<script lang="ts" setup>
import { ref } from 'vue';

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return ref(data)
}

const data = generateData()

const leftValue = ref([])
const rightValue = ref([1,2,3])
</script>
<template>
<u-transfer v-model="rightValue" :data="data"></u-transfer>

</template>
