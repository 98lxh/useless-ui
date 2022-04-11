<h1>气泡卡片 Popover</h1>

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
  <use-space direction="vertical">
    <use-popover placement="top">
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Top</use-button>
    </use-popover>
    <use-popover placement="left">
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Left</use-button>
    </use-popover>
    <use-popover placement="right">
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Right</use-button>
    </use-popover>
    <use-popover placement="bottom">
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
      <use-button>Bottom</use-button>
    </use-popover>
  </use-space>
</template>
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
