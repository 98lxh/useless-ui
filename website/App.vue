<template>
  <use-space style="padding:800px 100px">
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
