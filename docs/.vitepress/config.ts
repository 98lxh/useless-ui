import { defineConfig } from 'vitepress'
import demoBlock from 'vitepress-theme-demoblock'
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/': [
        { text: '快速开始', link: '/' },
        {
          text: '通用', children: [
            { text: '按钮 Button', link: '/component/button/' }
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock
      md.use(demoBlockPlugin)
    }
  }
})
