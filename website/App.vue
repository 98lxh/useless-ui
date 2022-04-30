<template>
  <div :style="{position: 'relative', width: '440px', height: '280px',margin:'300px'}">
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
