<Toc />

# 栅格 Grid

## 基本用法
展示最基本的24等分

:::demo 

```vue
<template>
  <use-row>
    <use-col :span="8" class="odd">
      <div>col-8</div>
    </use-col>
    <use-col :span="8" class="even">
      <div>col-8</div>
    </use-col>
    <use-col :span="8" class="odd">
      <div>col-8</div>
    </use-col>
  </use-row>

  <use-row>
    <use-col :span="10" class="odd">
      <div>col-10</div>
    </use-col>
    <use-col :span="14" class="even">
      <div>col-14</div>
    </use-col>
  </use-row>

   <use-row>
    <use-col :span="8" class="odd">
      <div>col-8</div>
    </use-col>
    <use-col :span="4" class="even">
      <div>col-4</div>
    </use-col>
    <use-col :span="4" class="odd">
      <div>col-4</div>
    </use-col>
    <use-col :span="8" class="even">
      <div>col-8</div>
    </use-col>
  </use-row>

  <use-row>
    <use-col :span="6" class="odd">
      <div>col-6</div>
    </use-col>
    <use-col :span="6" class="even">
      <div>col-6</div>
    </use-col>
    <use-col :span="6" class="odd">
      <div>col-6</div>
    </use-col>
    <use-col :span="6" class="even">
      <div>col-6</div>
    </use-col>
  </use-row>
</template>

<style>
.odd,.even{
  background-color:red;
  width:100%;
  line-height:40px;
  text-align:center;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  color:black;
  font-size:14px;
}
.odd{
  background-color:#e0f0e0;
}

.even{
  background-color:#c2e1c2;
}
</style>
```
:::

## 栅格偏移

通过 `offset` 属性设置栅格的偏移量

:::demo 

```vue
<template>
  <use-row>
    <use-col  class="odd" :span="6" :offset="6">
      <div>col-6|offset-6</div>
    </use-col>
    <use-col class="even" :span="6" :offset="3">
      <div>col-6|offset-3</div>
    </use-col>
  </use-row>

  <use-row>
    <use-col  class="odd" :span="6" :offset="3">
      <div>col-6|offset-3</div>
    </use-col>
    <use-col class="even" :span="6" :offset="9">
      <div>col-6|offset-9</div>
    </use-col>
  </use-row>

  <use-row>
    <use-col class="even" :span="8" :offset="8">
      <div>col-8|offset-8</div>
    </use-col>
  </use-row>
</template>

<style>
.odd,.even{
  background-color:red;
  width:100%;
  line-height:40px;
  text-align:center;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  color:black;
  font-size:14px;
}
.odd{
  background-color:#e0f0e0;
}

.even{
  background-color:#c2e1c2;
}
</style>
```
:::

## 水平布局

通过 `gutter` 属性增加栅格的间隔

:::demo 

```vue
<template>
  <span>start</span>
  <use-row :gutter="24" justify="start">
    <use-col  class="odd" :span="10">
      <div>col-12</div>
    </use-col>
    <use-col class="even" :span="10">
      <div>col-12</div>
    </use-col>
  </use-row>

  <span>end</span>
  <use-row :gutter="24" justify="end">
    <use-col  class="odd" :span="10">
      <div>col-12</div>
    </use-col>
    <use-col class="even" :span="10">
      <div>col-12</div>
    </use-col>
  </use-row>

  <span>between</span>
  <use-row :gutter="24" justify="space-between">
    <use-col  class="odd" :span="10">
      <div>col-12</div>
    </use-col>
    <use-col class="even" :span="10">
      <div>col-12</div>
    </use-col>
  </use-row>

  <span>around</span>
  <use-row :gutter="24" justify="space-around">
    <use-col  class="odd" :span="10">
      <div>col-12</div>
    </use-col>
    <use-col class="even" :span="10">
      <div>col-12</div>
    </use-col>
  </use-row>
</template>

<style>
.odd,.even{
  background-color:red;
  width:100%;
  line-height:40px;
  text-align:center;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  color:black;
  font-size:14px;
}
.odd{
  background-color:#e0f0e0;
}

.even{
  background-color:#c2e1c2;
}
</style>
```
:::


## 响应式布局

预设了五个响应式尺寸:`xs`,`sm`,`md`,`lg`和`xl`,调整浏览器大小查看效果

:::demo 

```vue
<template>
  <use-row>
    <use-col  class="odd" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
      <div>1</div>
    </use-col>
     <use-col  class="even" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
      <div>2</div>
    </use-col>
    <use-col  class="odd" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
      <div>3</div>
    </use-col>
     <use-col  class="even" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
      <div>4</div>
    </use-col>
  </use-row>
</template>
<style>
.odd,.even{
  background-color:red;
  width:100%;
  line-height:40px;
  text-align:center;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  color:black;
  font-size:14px;
}
.odd{
  background-color:#e0f0e0;
}

.even{
  background-color:#c2e1c2;
}
</style>
```
:::

## `Row` Props

| 参数名 | 描述       | 类型                                                         | 默认值 |
| ------- | ------------ | -------------------------------------------------------------- | ------- |
| gutter  | 栅格间隔 | number                                                         | 24      |
| justify | 水平排列方向 | `start`、`end`、`space-around`、`space-beween`、`space-evenly` | `start` |

## `Col` Props
| 参数名 | 描述               | 类型 | 默认值 |
| ------ | -------------------- | ------ | ------ |
| span   | 栅格占位格数   | number | 24     |
| offset | 栅格左侧的间隔数 | number | -      |
| xs     | < 576px 响应式栅格 | number | -      |
| sm     | >= 576px 响应式栅格 | number | -      |
| md     | >= 768px 响应式栅格 | number | -      |
| lg     | >= 992px 响应式栅格 | number | -      |
| xl     | >= 1200px 响应式栅格 | number | -      |
