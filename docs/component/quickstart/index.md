# 安装引入


<h2>安装</h2>

```bash
$ npm install useless-ui
#or
$ yarn add useless-ui
```

<h2>引入Useless</h2>

<h3>全局完整注册</h3>

```javascript
import App from './App.vue';
import uselessUI from "useless-ui"
import "useless-ui/dist/theme-chalk/index.css"
const app = createApp(App)
app.use(uselessUi)
app.mount("#app")
```

<h3>全局部分注册</h3>

```javascript
import App from './App.vue';
import { Button } from "useless-ui"
import "useless-ui/dist/theme-chalk/button.css"
const app = createApp(App)
app.use(Button)
app.mount("#app")
```

<h3>局部注册组件</h3>

```vue
<template>
  <Button>Import</Button>
</template>

<script lang="ts" setup>
//需要手动引入该组件的样式
import "useless-ui/dist/theme-chalk/button.css"
import { Button } from "useless-ui";
</script>
```

