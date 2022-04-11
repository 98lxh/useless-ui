<h1>文字气泡 Tooltip</h1>

<h2>基本用法</h2>

鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。

:::demo 

```vue
<template>
  <use-tooltip content="this is tooltip content">
    <use-button>Mouse over to display tooltip</use-button>
  </use-tooltip>
</template>
```
:::

<h2>位置</h2>

通过修改`placement`属性，可以指定弹出的位置,目前支持`上-top`,`下-bottom`,`左-left`,`右-right`
:::demo 

```vue
<template>
  <use-space direction="vertical">
    <use-tooltip content="this is tooltip content">
      <use-button type="outline">Top</use-button>
    </use-tooltip>
     <use-tooltip content="this is tooltip content" placement="left">
      <use-button type="outline">Left</use-button>
    </use-tooltip>
    <use-tooltip content="this is tooltip content" placement="right">
      <use-button type="outline">Right</use-button>
    </use-tooltip>
    <use-tooltip content="this is tooltip content" placement="bottom">
      <use-button type="outline">Bottom</use-button>
    </use-tooltip>
  </use-space>
</template>
```
:::


`<Tooltip>`Porps
| 参数名 | 描述           | 类型                        | 默认值 |
| --------- | ---------------- | ----------------------------- | ------- |
| content   | 内容           | string                        | -       |
| placement | 弹出位置     | 'top','left','right'|'bottom' | 'top'   |
