# 树 Tree

<h2>基本用法</h2>

为每个节点赋予全局唯一的`key`(必填),label 为该节点显示的内容。

:::demo 

```vue
<template>
  <use-tree :data="treeData" :default-expaned="['0-0']"></use-tree>
</template>
<script setup>
  import { ref } from 'vue';
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
```
:::


<h2>带有复选框的树</h2>

通过`checkable`属性指定树节点是否显示复选框

:::demo 

```vue
<template>
  <use-tree :data="treeData" checkable
          :default-expaned="['0-0', '0-1']">
  </use-tree>
</template>
<script setup>
  import { ref } from 'vue';
  const selectedKey = ref('')
  const checkedKeys = ref([])
  const treeData = [
    {
      label: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          label: 'Leaf',
          key: '0-0-1',
        },
        {
          label: 'Branch 0-0-2',
          key: '0-0-2',
          disabled: true,
          children: [
            {
              label: 'Leaf',
              key: '0-0-2-1'
            },
            {
              label: 'Leaf',
              key: '0-0-2-2',
              disableCheckbox: true
            }
          ]
        },
      ],
    },
    {
      label: 'Trunk 0-1',
      key: '0-1',
      children: [
        {
          label: 'Branch 0-1-1',
          key: '0-1-1',
          children: [
            {
              label: 'Leaf ',
              key: '0-1-1-1',
            },
            {
              label: 'Leaf ',
              key: '0-1-1-2',
            },
          ]
        },
        {
          label: 'Leaf',
          key: '0-1-2',
        },
      ],
    },
  ]
</script>
```
:::

<h2>复选框父子联动</h2>

通过`checkStrictly`属性指定节点的复选框父子联动

:::demo 

```vue
<template>
  <use-tree :data="treeData" checkable
          :default-expaned="['0-0', '0-1']" 
          checkStrictly>
  </use-tree>
</template>
<script setup>
  import { ref } from 'vue';
  const selectedKey = ref('')
  const checkedKeys = ref([])
  const treeData = [
    {
      label: 'Trunk 0-0',
      key: '0-0',
      children: [
        {
          label: 'Leaf',
          key: '0-0-1',
        },
        {
          label: 'Branch 0-0-2',
          key: '0-0-2',
          children: [
            {
              label: 'Leaf',
              key: '0-0-2-1'
            },
            {
              label: 'Leaf',
              key: '0-0-2-2',
              disableCheckbox: true
            }
          ]
        },
      ],
    },
    {
      label: 'Trunk 0-1',
      key: '0-1',
      children: [
        {
          label: 'Branch 0-1-1',
          key: '0-1-1',
          children: [
            {
              label: 'Leaf ',
              key: '0-1-1-1',
            },
            {
              label: 'Leaf ',
              key: '0-1-1-2',
            },
          ]
        },
        {
          label: 'Leaf',
          key: '0-1-2',
        },
      ],
    },
  ]
</script>
```
:::



`<Tree>`Props
| 参数名            | 描述                 | 类型     | 默认值 |
| -------------------- | ---------------------- | ---------- | ------ |
| default-expand       | 默认展开的节点  | strting[]  | []     |
| checkable            | 是否在节点前添加复选框 | boolean    | false  |
| checkStricity        | 是否开启父子联动 | boolean    | false  |
| selectedKey(v-model) | 选中的树节点     | string     | ''     |
| checkedKeys(v-model) | 选中复选框的树节点 | string[]   | []     |
| data                 | 树结构的数据     | TreeNode[] | []     |


`<Tree>`Events

| 事件名      | 描述               | 参数               |
| -------------- | -------------------- | -------------------- |
| selectedChange | 选择树时触发   | selectedKey:string   |
| checkedChange  | 勾选取消复选框时触发 | checkedKeys:string[] |

TreeNode

| 事件名 | 描述描        | 类型  | 默认值 |
| -------- | ---------------- | ------- | ------ |
| key      | 唯一标识     | string  | -      |
| label    | 节点显示的标题 | string  | -      |
| selected | 节点是否被选中 | boolean | false  |
| disabled | 节点是否被禁用 | boolean | false  |
| expaned  | 节点是否默认展开 | boolean | false  |
