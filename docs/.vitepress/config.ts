import { defineConfig } from 'vitepress'
import demoBlock from 'vitepress-theme-demoblock'
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/': [
        { text: '快速开始', link: '/' },
        {
          text: '通用', children: [
            { text: 'Button 按钮', link: '/component/button/' },
            { text: 'Icon 图标', link: '/component/icon/' }
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
