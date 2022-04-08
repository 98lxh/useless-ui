// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default'
import Demo from "vitepress-theme-demoblock/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue"
// 导入主题样式
import "vitepress-theme-demoblock/theme/styles/index.css"
import './custom.css';
import Button from "@useless-ui/button/index"
import ButtonGroup from "@useless-ui/button-group/index"
import Space from "@useless-ui/space/index"
import Icon from "@useless-ui/icon/index"
import Col from "@useless-ui/Col/index"
import Row from "@useless-ui/Row/index"
import "theme-chalk/src/index.scss"
// 导入插件的主题

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)
    app.component(Button.name, Button)
    app.component(Space.name, Space)
    app.component(Icon.name, Icon)
    app.component(Col.name, Col)
    app.component(Row.name, Row)
    app.component(ButtonGroup.name, ButtonGroup)
  },

}
