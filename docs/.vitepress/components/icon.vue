<script lang="ts" setup>
const icons = [
  'arrow-right',
  'calendar',
  'snow',
  'eye',
  'eye-close',
  'error',
  'warning',
  'arrow-up-filling',
  'arrow-down-filling',
  'arrow-left-filling',
  'arrow-right-filling',
  'jiahao',
  'jianhao',
  'success',
  'user',
  'arrowdown',
  'arrowup',
  'arrow-left',
  'arrow-double-left',
  'arrow-double-right',
  'setting'
]

const copy = (iconName:string) => {
  let input = document.createElement('input');
  input.value = iconName;
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  input.remove()
}

</script>
<template>
 <div class="icon-wrapper">
   <div class="icons">
     <div class="icon" v-for="i in icons" @click="()=>{
        const ic = `<use-icon name='${i}' />`
        copy(ic)
       }">
       <use-icon :name="i" />
       <p>{{i}}</p>
       <div class="mask">
         Copy
       </div>
     </div>
   </div>
 </div>
</template>

<style lang="scss">
.icon-wrapper{
  padding:10px;
  
  .u-input{
    width:100%;
    display:block;

    input{
      display:block;
      width:100%;
    }
  }

  .icons{
    width:100%;
    margin-top:10px;
    display:flex;
    flex-wrap:wrap;
    
    .icon{
      padding:10px;
      width:20%;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      user-select:none;
      text-align:center;
      position:relative;

      .mask{
        width:100%;
        height:100%;
        border-radius:5px;
        position:absolute;
        background-color:#edfff3;
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0;
        transition:opacity .2s ease-in-out,transform .2s ease-in-out;
        font-weight:bold;
        transform:scale(.1);
      }



      &:hover{
        .mask{
          opacity:0.8;
          transform:scale(1);
        }
      }

      i{
       font-size:40px;
      }

      p{
        width:100%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
    }
  }
}
</style>
