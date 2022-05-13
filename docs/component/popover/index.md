# 气泡卡片 Popover

<h2>基本用法</h2>

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。

:::demo 

```vue
<template>
  <use-popover>
    <template #content>
      <p>Here is the text content</p>
      <p>Here is the text content</p>
    </template>
    <use-button>Hover</use-button>
  </use-popover>
</template>
```
:::

<h2>触发方式</h2>

通过修改`trigger`属性，可以指定不同的触发方式。

:::demo 

```vue
<template>
  <use-space>
    <use-popover>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Hover</use-button>
    </use-popover>
    <use-popover trigger="click">
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Click</use-button>
    </use-popover>
  </use-space>
</template>
```
:::

<h2>弹出位置</h2>

通过修改`placement`属性，可以指定弹出的位置,目前支持`上-top`,`下-bottom`,`左-left`,`右-right`


:::demo 

```vue
<template>
  <div :style="{position: 'relative', width: '440px', height: '280px'}">
    <use-popover placement="tl">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'70px'}">TL</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="top">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'200px'}">TOP</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

    <use-popover placement="tr">
      <use-button class="button" :style="{position: 'absolute',top:'0',left:'330px'}">TR</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

    <use-popover placement="lt">
      <use-button class="button" :style="{position: 'absolute',top:'50px',left:'30px'}">LT</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

    <use-popover placement="left">
      <use-button class="button" :style="{position: 'absolute',top:'100px',left:'30px'}">LEFT</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="lb">
      <use-button class="button" :style="{position: 'absolute',top:'150px',left:'30px'}">LB</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="bl">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'70px'}">BL</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="bottom">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'200px'}">BOTTOM</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

    <use-popover placement="br">
      <use-button class="button" :style="{position: 'absolute',top:'200px',left:'330px'}">BR</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="rt">
      <use-button class="button" :style="{position: 'absolute',top:'50px',left:'360px'}">RT</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

    <use-popover placement="right">
      <use-button class="button" :style="{position: 'absolute',top:'100px',left:'360px'}">RIGHT</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>

     <use-popover placement="rb">
      <use-button class="button" :style="{position: 'absolute',top:'150px',left:'360px'}">RB</use-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </use-popover>
  </div>
</template>

<style>
.button{
  width: 100px;
}
</style>
```
:::


`<Popover>`Porps
| 参数名 | 描述           | 类型                        | 默认值 |
| --------- | ---------------- | ----------------------------- | ------- |
| content   | 内容           | string                        | -       |
| placement | 弹出位置     | 'top','left','right'|'bottom' | 'top'   |
| trigger   | 触发方式     | 'hover','click'               | 'hover' |
| bgColor   | 弹出框的背景颜色 | string                        | '#000'  |
| color     | 弹出框的文字颜色 | string                        | '#fff'  |

`<popover>` Slots
| 具名插槽 | 描述           | 参数                        |
| --------- | ---------------- | ----------------------------
| content   | 内容           | -                        |
