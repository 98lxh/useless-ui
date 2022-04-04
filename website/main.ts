import { createApp } from "vue";
import App from './App.vue';
import Button from "../lib/button";
import "theme-chalk/src/index.scss"
const app = createApp(App)
app.use(Button)
app.mount("#app")
