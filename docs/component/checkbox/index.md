<h1>复选框 checkbox</h1>

<h2>基本用法</h2>

在一组数据中，通过复选框选择一个或者多个值

:::demo 

```vue
<template>
 <use-checkbox label="option1" v-model="checked"></use-checkbox>
</template>
<script>
  import { ref ,defineComponent } from 'vue';
  export default defineComponent({
    name:'Demo',
    setup(){
      const checked = ref('')

      return {
        checked
      }
    }
  })
</script>
```
:::


<h2>禁用状态</h2>

通过`disabled`属性禁用复选框

:::demo 

```vue
<template>
 <use-checkbox v-model="value" disabled>option</use-checkbox>
</template>
<script setup>
  import { ref } from 'vue';
  const value = ref(false)
</script>
```
:::

<h2>复选框组</h2>

通过`<use-checkbox-group>`组件展示复选框组

:::demo 

```vue
<template>
  {{checks}}
  <use-checkbox-group v-model="checks">
    <use-checkbox v-for="c in data" :label="c"></use-checkbox>
 </use-checkbox-group>
</template>
<script setup>
  import { ref } from 'vue';
  const checkedAll = ref(false)
  const indeterminate = ref(false)
  const checks = ref([])
  const data = ref(['option1','option2','option3'])
</script>
```
:::


`<Checkbox>`Props
| 参数名           | 描述      | 类型  | 默认值 |
| ------------------- | ----------- | ------- | ------ |
| modelValue(v-model) | 绑定值   | boolean | -      |
| label               | 选项的label | string  | -      |
| disabled            | 是否禁用 | boolean | false  |
| indeterminate       | 是否未半选 | boolean | false  |


`<Checkbox>`Events
| 事件名 | 描述       | 参数                   |
| ------ | ------------ | ------------------------ |
| change | 值改变时触发 | string|number|boolean [] |


`<Checkbox-group>`Props
| 参数名           | 描述   | 类型                   | 默认值 |
| ------------------- | -------- | ------------------------ | ------ |
| modelValue(v-model) | 绑定值 | string|number|boolean [] | -      |
| disabled            | 是否禁用 | boolean                  | false  |


`<Checkbox-group>`Events
| 事件名 | 描述       | 参数                   |
| ------ | ------------ | ------------------------ |
| change | 值改变时触发 | string|number|boolean [] |
