import uselessUi from 'useless-ui';
import message from '@useless-ui/message';
import DeafultTheme from 'vitepress/theme'
import Demo from "vitepress-theme-demoblock/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue"
import Icon from "./../components/icon.vue"
import Toc from "./../components/toc.vue"
import "vitepress-theme-demoblock/theme/styles/index.css"
import "theme-chalk/src/index.scss"
import './custom.css';

export default {
  ...DeafultTheme,
  enhanceApp({ app }) {
    app.use(uselessUi)
    app.use(message)
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)
    app.component("Icon", Icon)
    app.component("Toc", Toc)
  },
}
