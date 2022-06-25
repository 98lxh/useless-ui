import uselessUi from 'useless-ui';
import message from '@useless-ui/message';
import Theme from 'vitepress/dist/client/theme-default'
import Demo from "vitepress-theme-demoblock/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue"
import Icon from "./../components/icon.vue"
import "./../../utils/redirect"
import "vitepress-theme-demoblock/theme/styles/index.css"
import "theme-chalk/src/index.scss"
import './custom.css';

(window as any).message = message

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(uselessUi)
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)
    app.component("Icon", Icon)
  },
}
