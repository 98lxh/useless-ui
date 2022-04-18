<h1>安装使用</h1>

```javascript
npm install useless-ui
//或
yarn add useless-ui
```

<h2>引入Useless</h2>

```javascript
import App from './App.vue';
import uselessUI from "useless-ui"
import "useless-ui/theme-chalk/src/index.css"
const app = createApp(App)
app.use(uselessUi)
app.mount("#app")
```

<h2>组件按需引入</h2>

```vue
<template>
  <Button>Import</Button>
</template>

<script lang="ts" setup>
//引入Button组件
import { Button } from "useless-ui";
</script>
```

<h2>样式按需引入</h2>

```javascript
//单独引入Button样式
import "useless-ui/theme-chalk/button.css";
```
