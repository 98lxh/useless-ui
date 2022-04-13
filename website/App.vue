<template>
  <use-space direction="vertical" style="padding:200px">
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
