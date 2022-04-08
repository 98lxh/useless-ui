import { defineConfig } from 'vitepress'
import demoBlock from 'vitepress-theme-demoblock'
export default defineConfig({
  title: 'uselessUI',
  themeConfig: {

    sidebar: {
      '/': [
        {
          text: '通用', children: [
            { text: '按钮 Button', link: '/component/button/' },
            { text: '图标 Icon-', link: '/component/icon/' },
          ]
        },
        {
          text: '布局', children: [
            { text: '栅格 Grid', link: '/component/grid/' },
            { text: '间隔 Space', link: '/component/space/' },
          ]
        },
        {
          text: '数据输入', children: [
            { text: "数据穿梭框 Transfer", link: '/component/transfer/' }
          ]
        }
      ]
    },
    nav: [
      { text: 'github', link: 'https://github.com/98lxh/useless-ui' }
    ]
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock
      md.use(demoBlockPlugin)
    }
  }
})
