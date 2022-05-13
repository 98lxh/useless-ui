# 文字气泡 Tooltip

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
   <div :style="{position: 'relative', width: '440px', height: '280px'}">
    <use-tooltip placement="tl" content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'70px'}">TL</use-button>
    </use-tooltip>

     <use-tooltip placement="top"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'200px'}">TOP</use-button>
    </use-tooltip>

    <use-tooltip placement="tr"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'330px'}">TR</use-button>
    </use-tooltip>

    <use-tooltip placement="lt"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'50px',left:'30px'}">LT</use-button>
    </use-tooltip>

    <use-tooltip placement="left"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'100px',left:'30px'}">LEFT</use-button>
    </use-tooltip>

     <use-tooltip placement="lb"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'150px',left:'30px'}">LB</use-button>
    </use-tooltip>

     <use-tooltip placement="bl"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'70px'}">BL</use-button>
    </use-tooltip>

     <use-tooltip placement="bottom"  content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'200px'}">BOTTOM</use-button>
    </use-tooltip>

    <use-tooltip placement="br" content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'330px'}">BR</use-button>
    </use-tooltip>

     <use-tooltip placement="rt" content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'50px',left:'360px'}">RT</use-button>
    </use-tooltip>

    <use-tooltip placement="right" content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'100px',left:'360px'}">RIGHT</use-button>
    </use-tooltip>

     <use-tooltip placement="rb" content="this is tooltip content">
      <use-button class="button" :style="{position: 'absolute',top:'150px',left:'360px'}">RB</use-button>
    </use-tooltip>
  </div>
</template>

<style>
.button{
  width: 100px;
}
</style>
```
:::


`<Tooltip>`Porps
| 参数名 | 描述           | 类型                        | 默认值 |
| --------- | ---------------- | ----------------------------- | ------- |
| content   | 内容           | string                        | -       |
| placement | 弹出位置     | 'top','left','right'|'bottom' | 'top'   |
