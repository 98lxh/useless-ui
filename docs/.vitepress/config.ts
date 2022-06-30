import { defineConfig } from 'vitepress'
import demoBlock from 'vitepress-theme-demoblock'
export default defineConfig({
  title: ' Useless UI',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png',
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    sidebar: {
      '/': [
        {
          text: '快速上手',
          children: [
            { text: '安装引入', link: "/component/quickstart/" }
          ],
        },
        {
          text: '通用', children: [
            { text: '按钮 Button', link: '/component/button/' },
            { text: '图标 Icon', link: '/component/icon/' },
          ]
        },
        {
          text: '布局', children: [
            { text: '栅格 Grid', link: '/component/grid/' },
            { text: '间隔 Space', link: '/component/space/' },
          ]
        },
        {
          text: "数据展示", children: [
            { text: '树 Tree', link: "/component/tree/" },
            { text: '气泡卡片 Popover', link: '/component/popover/' },
            { text: '文字气泡 Tooltip', link: '/component/tooltip/' },
            { text: '分页 Pagination', link: "/component/pagination/" },
            { text: '走马灯 Carousel', link: '/component/carousel/' },
            { text: '表格 Table', link: "/component/table/" }
          ]
        },
        {
          text: '数据输入', children: [
            { text: "复选框 Checkbox", link: '/component/checkbox/' },
            { text: "数据穿梭框 Transfer", link: '/component/transfer/' },
            { text: '输入框 Input', link: '/component/input/' },
            { text: '日期选择器 DatePicker', link: '/component/datepicker/' },
            { text: '选择器 Select', link: '/component/select/' },
            { text: "表单 Form", link: '/component/form/' }
          ]
        },
        {
          text: '反馈', children: [
            { text: '全局提醒 Message', link: '/component/message/' },
            { text: '模态框 Modal', link: "/component/modal/" }
          ]
        },
        {
          text: "其他", children: [
            { text: '折叠渐变 CollapseTransition', link: '/component/collapseTransition/' }
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
