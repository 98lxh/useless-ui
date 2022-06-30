import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from "vite"

const components = [
  'button',
  'icon',
  'button-group',
  'row',
  'col',
  'checkbox',
  'checkbox-group',
  'transfer',
  'collapse-transition',
  'tree',
  'message',
  'space',
  'popover',
  'tooltip',
  'input',
  'modal',
  'date-picker',
  'select',
  'form',
  'carousel',
  'pagination',
  'table'
]


export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: [
      { find: 'useless-ui', replacement: resolve('node_modules/useless-ui/index.ts') },
      ...components.map(c => ({ find: `@useless-ui/${c}`, replacement: resolve(`node_modules/@useless-ui/${c}/index.ts`) })),
    ]
  },
})
