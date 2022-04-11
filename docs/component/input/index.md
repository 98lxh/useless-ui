<h1>输入框 Input</h1>

<h2>基本用法</h2>

输入框的基本用法。

:::demo 

```vue
<template>
  <use-space :size="15">
    <use-input placeholder="Place enter"></use-input>
    <use-input value="Content"></use-input>
  </use-space>
</template>
```
:::

<h2>输入框的状态</h2>

输入框可以设置禁用和错误状态。

:::demo 

```vue
<template>
  <use-space :size="15" direction="vertical">
    <use-input placeholder="Disabled" disabled></use-input>
    <use-input placeholder="Error" error></use-input>
    <use-input placeholder="Default"></use-input>
  </use-space>
</template>
```
:::

<h2>前缀和后缀</h2>

通过传入`prefix`和`suffix`插槽在输入框内添加前缀和后缀

:::demo 

```vue
<template>
  <use-space :size="15" direction="vertical">
    <use-input placeholder="Place enter user info">
      <template #prefix>
        <use-icon name="user"></use-icon>
      </template>
    </use-input>
     <use-input placeholder="Default">
      <template #suffix>
        <use-icon name="loading"></use-icon>
      </template>
    </use-input>
  </use-space>
</template>
```
:::

todo
