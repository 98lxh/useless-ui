<template>
   <div :style="{padding:'300px'}">
    <use-tooltip content="this is tooltip content" placement="br" trigger="hover">
    <use-button>Mouse over to dispxxxxxxxxxxxxlay tooltip</use-button>
  </use-tooltip>
     <use-tooltip content="this is tooltip content" placement="br" trigger="click">
    <use-button>Mouse over to dispxxxxxxxxxxxxlay tooltip</use-button>
  </use-tooltip>
  </div>
</template>

<style>
.button{
  width: 200px;
}
</style>
